/* eslint-disable import/no-extraneous-dependencies */
// 1.) Module
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xssClean = require("xss-clean");

// const hpp = require("hpp");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const compression = require("compression");

const requestIp = require("request-ip");

const viewRouter = require("./routes/viewRouter");

const app = express();

// app.post("/webhook-checkout", express.raw({ type: "application/json" }), purchaseController.webhookCheckout);

app.use(requestIp.mw());

if (process.env.NODE_ENV === "development") {
  app.use(
    "*",
    cors({
      origin: true,
      credentials: true,
      exposedHeaders: ["Content-Range", "X-Content-Range", "Set-Cookie"],
    }),
  );

  app.options("*", cors());
  //console.log("Cors on in Development");
}

app.use(helmet());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cookieParser());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//Serving static files
app.use(express.static(path.join(__dirname, "/public")));

app.use(express.json({ limit: "20mb" }));
// app.use(express.urlencoded({ extended: true, limit: "20mb" }));

app.use(mongoSanitize());
app.use(xssClean());

// app.use(
//   hpp({
//     whitelist: ["county", "category", "title"],
//   }),
// );

app.use(compression());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//Routes

// app.use("/api/v1/admin", adminRouter);

// Limiters
const limiterForAPI = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many request, please try again in an hour!",
});
app.use("/api", limiterForAPI);

const limiter = rateLimit({
  max: process.env.NODE_ENV === "development" ? 1000 ** 3 : 1000,
  windowMs: 60 * 60 * 1000,
  message: "<h1>Too many request, please try again in an hour!</h1>",
});

app.use("/", limiter);

app.use("/", viewRouter);

// app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  // next(new AppError(`Can't find "${req.originalUrl}" on publication`, 404));
});

// app.use(globalErrorHandler);

module.exports = app;
