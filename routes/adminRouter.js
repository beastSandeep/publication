const express = require("express");
const adminController = require("../controllers/adminController");
const adminAuthController = require("../controllers/adminAuthController");
// protectAdmin isAdminLoggedIn adminLogger

const router = express.Router();

// router.route("/login").post(adminAuthController.adminLogger);

// if (process.env.NODE_ENV === "production")
//   router.use(adminAuthController.protectAdmin);

router.get("/", adminController.getAdminHomePage);

router.get("/dashboard", adminController.getDashboard);
router.get("/articles", adminController.getArticles);
router.get("/users", adminController.getUsers);
router.get("/settings", adminController.getSettings);
router.get("/inboxes", adminController.getInboxes);

module.exports = router;
