const crypto = require("crypto");
const slugify = require("slugify");
const mongoose = require("mongoose");
// eslint-disable-next-line import/no-extraneous-dependencies
const validator = require("validator");
// eslint-disable-next-line import/no-extraneous-dependencies
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Plese tell us your name"],
  },
  email: {
    type: String,
    required: [true, "Plese provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },

  image: {
    type: Array,
    default: ["/profile.jpg"],
  },
  phone: Number,
  location: String,
  type: String,
  salary: Number,
  experience: Number,
  qualification: String,
  about: String,
  languages: {
    type: Array,
    default: ["English"],
  },
  skills: Array,
  socialMediaLinks: {
    type: Array,
    default: [],
  },
  educations: {
    type: Array,
    default: [null, null, null],
  },
  experiences: {
    type: Array,
    default: [null, null, null],
  },
  cv: {
    type: Array,
    default: [],
  },
  cover_letter: {
    type: Array,
    default: [],
  },
  publish: Boolean,
  userId: Number,
  slug: String,

  photo: {
    type: String,
    default: "profile.jpg",
  },

  role: {
    type: String,
    enum: ["seeker", "admin", "worker", "employer"],
    default: "seeker",
  },

  password: {
    type: String,
    required: [true, "Plese provide a password"],
    minlength: 8,
    select: false,
  },
  companyData: {
    company: String,
    since: Number,
    hr: String,
    employees: String,
    website: String,

    email: String,

    socialMediaLinks: {
      type: Array,
      default: [],
    },
    image: {
      type: Array,
      default: ["/profile.jpg"],
    },
    phone: Number,
    location: String,
    about: String,
  },

  passwordChangedAt: Date,
  passwordResetToken: String,
  signupToken: String,
  signupTokenExpires: Date,
  passwordResetExpires: Date,

  active: {
    type: Boolean,
    default: true,
    select: false,
  },

  timeStamp: {
    type: Number,
  },

  authenticated: {
    type: Boolean,
    default: false,
  },

  employerType: {
    type: String,
    enum: [
      "One Day Plan",
      "One Month Plan",
      "Three Month Plan",
      "One Year Plan",
    ],
  },

  canPost: {
    type: Boolean,
    default: false,
  },

  remainingPosts: {
    type: Number,
  },

  createdAt: Number,
  planExpires: Number,
  jobs: {
    type: Array,
    default: [],
  },
});

userSchema.index({ email: 1 });
userSchema.index({ slug: 1 });

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 14);
  next();
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password") || this.isNew) {
    return next();
  }
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.pre("save", async function (next) {
  if (this.role === "admin" || this.role === "worker") {
    this.plan = undefined;
    this.employerType = undefined;
    this.canPost = true;
  } else if (this.role === "seeker") {
    this.plan = undefined;
    this.employerType = undefined;
  }
  next();
});

// userSchema.pre("save", async function (next) {
//   if (this.plan === "100") {
//     this.employerType = "Monthly Employer";
//     this.remainingPosts = 5;
//     this.canPost = true;
//   } else if (this.plan === "400") {
//     this.employerType = "Yearly Employer";
//     this.remainingPosts = 20;
//     this.canPost = true;
//   }

//   next();
// });

userSchema.pre("save", function (next) {
  this.createdAt = Date.now();
  this.timeStamp = Date.now();
  next();
});

// userSchema.pre("save", function (next) {
//   if (this.employerType === "Yearly Employer") {
//     this.planExpires = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
//   } else if (this.employerType === "Monthly Employer") {
//     this.planExpires = new Date().setDate(new Date().getDate() + 20);
//   }

//   next();
// });

userSchema.pre("save", function (next) {
  if (this.companyData.company) {
    this.slug = slugify(`${this.companyData.company} ${this.userId}`, {
      lower: true,
    });
  } else {
    this.slug = slugify(`${this.name} ${this.userId}`, { lower: true });
  }
  next();
});

userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword,
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimeStamp) {
  if (this.passwordChangedAt) {
    const chandedTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10,
    );
    return JWTTimeStamp < chandedTimeStamp;
  }
  // false means not changed
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  //10 miniutes
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

userSchema.methods.createSignupToken = function () {
  const signupToken = crypto.randomBytes(32).toString("hex");

  this.signupToken = crypto
    .createHash("sha256")
    .update(signupToken)
    .digest("hex");

  //10 miniutes
  this.signupTokenExpires = Date.now() + 10 * 60 * 1000;

  return signupToken;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
