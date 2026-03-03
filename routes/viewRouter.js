const express = require("express");
const viewsController = require("../controllers/viewController");

const router = express.Router();

router.get("/", viewsController.getLandingPage);

// about
router.get("/about", viewsController.getAboutPage);
router.get("/privacy", viewsController.getPrivacyPage);
router.get("/publisher", viewsController.getPublisherPage);

router.get("/editorial-team", viewsController.getEditorialTeamPage);

// review
router.get("/review-policy", viewsController.getReviewPolicyPage);

// author guide
router.get("/submissions", viewsController.getSubmissionsPage);
router.get("/author-instructions", viewsController.getAuthorInstructionsPage);
router.get("/reference-management", viewsController.getReferenceManagementPage);
router.get("/apply-editor", viewsController.getApplyEditorPage);
router.get("/aim-and-scope", viewsController.getAimAndScopePage);

router.get("/indexing", viewsController.getIndexingPage);

// side pannel links
router.get("/scope", viewsController.getScopePage);
router.get("/open-access", viewsController.getOpenAccessPage);
router.get("/ethics", viewsController.getEthicsPage);
router.get("/competing-interest", viewsController.getCompetingInterestPage);
router.get("/human-animal-rights", viewsController.getHumanAnimalRightsPage);
router.get("/reviewers-guidelines", viewsController.getReviewersGuidelinesPage);
router.get("/plagiarism-policy", viewsController.getPlagiarismPolicyPage);
router.get("/archive-policy", viewsController.getArchivePolicyPage);
router.get("/advertisement-policy", viewsController.getAdvertisementPolicyPage);
router.get("/disclaimer", viewsController.getDisclaimerPage);

router.get("/readers", viewsController.getReadersPage);
router.get("/authors", viewsController.getAuthorsPage);
router.get("/librarians", viewsController.getLibrariansPage);

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
