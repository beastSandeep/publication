const express = require("express");
const viewsController = require("../controllers/viewController");

const router = express.Router();

router.get("/", viewsController.getLandingPage);
router.get("/about", viewsController.getAboutPage);
router.get("/privacy", viewsController.getPrivacyPage);
router.get("/publisher", viewsController.getPublisherPage);

// router.use(authController.isLoggedIn);

// router.get("/about", viewsController.getAbout);
// router.get("/policy", viewsController.getPolicy);
// router.get("/contact", viewsController.getContact);
// router.get("/pricing", viewsController.getPrice);
// router.get("/login", viewsController.getLogin);
// router.get("/reset", viewsController.getReset);
// router.get("/changePassword/:token", viewsController.changePassword);
// router.get("/authenticate/:token", viewsController.authenticate);
// router.get("/signup", viewsController.getSignup);
// router.get("/logout", authController.protect, viewsController.getLogout);
// router.get("/jobs", jobController.publication, viewsController.getJobs);
// router.get("/jobs/:slug", viewsController.getJob);
// router.get("/candidate/:slug", viewsController.getSeeker);
// router.get("/company/:slug", viewsController.getCompany);

// router.get("*", viewsController.getError);
module.exports = router;
