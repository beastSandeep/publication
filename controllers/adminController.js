const catchAsync = require("../utils/catchAsync");
const fs = require("node:fs/promises");
const path = require("node:path");

const fake = Array(10).fill({
  id: 2203,
  name: "Gaming Hunter",
  url: "/about",
  phone: 1234567890,
  time: new Date(),
  email: "sandeep@gmail.com",
});

exports.getAdminHomePage = catchAsync(async (req, res) => {
  res.status(302).redirect("/admin/dashboard");
});

exports.getDashboard = catchAsync(async (req, res) => {
  res.status(200).render("admin/dashboard", {
    title: "Admin Dashboard",
    currentActivePage: "Dashboard",
  });
});

exports.getArticles = catchAsync(async (req, res) => {
  res.status(200).render("admin/articles", {
    title: "Admin Articles",
    currentActivePage: "Articles",
    // articles: await JSON.parse(
    //   await fs.readFile(path.resolve("dev/article.json"), {
    //     encoding: "utf-8",
    //   }),
    // ),
    fake,
  });
});

exports.getUsers = catchAsync(async (req, res) => {
  res.status(200).render("admin/users", {
    title: "Admin Users",
    currentActivePage: "Users",
    fake,
  });
});

exports.getSettings = catchAsync(async (req, res) => {
  res.status(200).render("admin/settings", {
    title: "Admin Settings",
    currentActivePage: "Settings",
  });
});

exports.getInboxes = catchAsync(async (req, res) => {
  res.status(200).render("admin/inboxes", {
    title: "Admin Inboxes",
    currentActivePage: "Inboxes",
    fake,
  });
});
