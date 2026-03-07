const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const createSendSessionToken = (user, statusCode, res) => {
  const signTokenAdmin = (id) =>
    jwt.sign({ id }, process.env.JWT_SECRET_ADMIN, {
      expiresIn: process.env.JWT_EXPIRES_IN_ADMIN,
    });

  const token = signTokenAdmin(user._id);

  const cookieOption = {
    expires: new Date(
      Date.now() +
        process.env.JWT_COOKIE_EXPIRES_IN_ADMIN * 1000 * 60 * 60 * 24,
    ),
    httpOnly: true,
    maxAge: process.env.JWT_COOKIE_EXPIRES_IN_ADMIN * 1000 * 60 * 60 * 24,
  };

  if (process.env.NODE_ENV === "production") {
    cookieOption.secure = true;
  }

  res.cookie("admin_token", token, cookieOption);
  res.status(statusCode).json({
    status: "success",
  });
};

exports.protectAdmin = catchAsync(async (req, res, next) => {
  // console.log("hello", req.cookies, req.headers.authorization);
  //Getting token if it's not exist

  const token = req.cookies.admin_token;

  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access", 401),
    );
  }

  //token verification
  const decodedPayload = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET_ADMIN,
  );

  // Check if user still exist
  const currentUser = await User.findById(decodedPayload.id);

  if (!currentUser) {
    return next(
      new AppError("You are not logged in! Please log in to get access", 401),
    );
    // return next(new AppError("The user belonging to this token does no longer exists", 401));
  }

  // Check if user changed password after the token was issued
  if (currentUser.changedPasswordAfter(decodedPayload.iat)) {
    return next(
      new AppError("Admin recently changed password! Please login agian"),
      401,
    );
  }

  req.user = currentUser;
  res.locals.admin = currentUser;
  next();
});

exports.isAdminLoggedIn = async (req, res, next) => {};

exports.adminLogger = catchAsync(async (req, res, next) => {
  // req.body.secret = process.env.ADMIN_SECRET;
  const { user, password, secret } = req.body;

  if (!user || !password) {
    return next(new AppError("There is no user or password", 400));
  }

  const admin = await User.findOne({ name: user, role: "admin" }).select(
    "+password",
  );

  if (!secret || process.env.ADMIN_SECRET !== secret) {
    // restrict 3
    return next(new AppError("Invalid Secret", 401));
  }

  if (!admin || !(await admin.correctPassword(password, admin.password))) {
    // restrict 3
    return next(new AppError("Incorrect user or password", 401));
  }

  // req.clientIp
  // logged in ip
  // make loggin update with ip and date
  //????

  createSendSessionToken(admin, 200, res, true);
});
