const e = require("express");
const catchAsync = require("../utils/catchAsync");

exports.getLandingPage = catchAsync(async (req, res) => {
  res.set(
    "Content-Security-Policy",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com https://partner.googleadservices.com https://tpc.googlesyndication.com https://region1.google-analytics.com;",
  );

  res.status(200).render("landingPage", {
    title: "publication.com : Your Complete publication Solution",
  });
});

exports.getAboutPage = catchAsync(async (req, res) => {
  res.status(200).render("about", {
    title: "publication.com : About Us",
  });
});
exports.getPrivacyPage = catchAsync(async (req, res) => {
  res.status(200).render("privacy", {
    title: "publication.com : Privacy Policy",
  });
});
exports.getPublisherPage = catchAsync(async (req, res) => {
  res.status(200).render("publisher", {
    title: "publication.com : Publisher Information",
  });
});
exports.getReviewPolicyPage = catchAsync(async (req, res) => {
  res.status(200).render("reviewPolicy", {
    title: "publication.com : Review Policy",
  });
});
exports.getEditorialTeamPage = catchAsync(async (req, res) => {
  res.status(200).render("editorialTeam", {
    title: "publication.com : Editorial Team",
  });
});

exports.getSubmissionsPage = catchAsync(async (req, res) => {
  res.status(200).render("submissions", {
    title: "publication.com : Submissions",
  });
});
exports.getAuthorInstructionsPage = catchAsync(async (req, res) => {
  res.status(200).render("authorInstructions", {
    title: "publication.com : Author Instructions",
  });
});
exports.getReferenceManagementPage = catchAsync(async (req, res) => {
  res.status(200).render("referenceManagement", {
    title: "publication.com : Reference Management",
  });
});
exports.getApplyEditorPage = catchAsync(async (req, res) => {
  res.status(200).render("applyEditor", {
    title: "publication.com : Apply for Editor",
  });
});
exports.getAimAndScopePage = catchAsync(async (req, res) => {
  res.status(200).render("aimAndScope", {
    title: "publication.com : Aim and Scope",
  });
});

exports.getIndexingPage = catchAsync(async (req, res) => {
  res.status(200).render("indexing", {
    title: "publication.com : Indexing",
  });
});

exports.getScopePage = catchAsync(async (req, res) => {
  res.status(200).render("scope", {
    title: "publication.com : Scope",
  });
});

exports.getOpenAccessPage = catchAsync(async (req, res) => {
  res.status(200).render("openAccess", {
    title: "publication.com : Open Access",
  });
});

exports.getEthicsPage = catchAsync(async (req, res) => {
  res.status(200).render("ethics", {
    title: "publication.com : Ethics",
  });
});

exports.getCompetingInterestPage = catchAsync(async (req, res) => {
  res.status(200).render("competingInterest", {
    title: "publication.com : Competing Interest",
  });
});

exports.getHumanAnimalRightsPage = catchAsync(async (req, res) => {
  res.status(200).render("humanAnimalRights", {
    title: "publication.com : Human and Animal Rights",
  });
});

exports.getReviewersGuidelinesPage = catchAsync(async (req, res) => {
  res.status(200).render("reviewersGuidelines", {
    title: "publication.com : Reviewers Guidelines",
  });
});

exports.getPlagiarismPolicyPage = catchAsync(async (req, res) => {
  res.status(200).render("plagiarismPolicy", {
    title: "publication.com : Plagiarism Policy",
  });
});
exports.getArchivePolicyPage = catchAsync(async (req, res) => {
  res.status(200).render("archivePolicy", {
    title: "publication.com : Archive Policy",
  });
});
exports.getAdvertisementPolicyPage = catchAsync(async (req, res) => {
  res.status(200).render("advertisementPolicy", {
    title: "publication.com : Advertisement Policy",
  });
});

exports.getDisclaimerPage = catchAsync(async (req, res) => {
  res.status(200).render("disclaimer", {
    title: "publication.com : Disclaimer",
  });
});

exports.getReadersPage = catchAsync(async (req, res) => {
  res.status(200).render("readers", {
    title: "publication.com : For Readers",
  });
});

exports.getAuthorsPage = catchAsync(async (req, res) => {
  res.status(200).render("authors", {
    title: "publication.com : For Authors",
  });
});
exports.getLibrariansPage = catchAsync(async (req, res) => {
  res.status(200).render("librarians", {
    title: "publication.com : For Librarians",
  });
});

exports.getContactPage = catchAsync(async (req, res) => {
  res.status(200).render("contact", {
    title: "publication.com : Contact Us",
  });
});
exports.getSearchPage = catchAsync(async (req, res) => {
  res.status(200).render("search", {
    title: "publication.com : Search",
  });
});
exports.getLoginPage = catchAsync(async (req, res) => {
  res.status(200).render("login", {
    title: "publication.com : Login",
  });
});
exports.getRegisterPage = catchAsync(async (req, res) => {
  res.status(200).render("register", {
    title: "publication.com : Register",
  });
});

exports.getError = catchAsync(async (req, res) => {
  res.status(200).render("error", {
    title: "publication.com | Error",
  });
});
