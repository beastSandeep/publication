const catchAsync = require("../utils/catchAsync");
const fs = require("node:fs/promises");
const path = require("node:path");

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
    articles: await JSON.parse(
      await fs.readFile(path.resolve("dev/article.json"), {
        encoding: "utf-8",
      }),
    ),
  });
});

exports.getUsers = catchAsync(async (req, res) => {
  res.status(200).render("admin/users", {
    title: "Admin Users",
    currentActivePage: "Users",
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
  });
});
