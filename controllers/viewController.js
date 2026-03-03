const e = require("express");

exports.getLandingPage = (req, res) => {
  // res.set(
  //   "Content-Security-Policy",
  //   "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com https://partner.googleadservices.com https://tpc.googlesyndication.com https://region1.google-analytics.com;",
  // );

  res.status(200).render("landingPage", {
    title: "publication.com : Your Complete publication Solution",
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render("about", {
    title: "publication.com : About Us",
  });
};
exports.getPrivacyPage = (req, res) => {
  res.status(200).render("privacy", {
    title: "publication.com : Privacy Policy",
  });
};
exports.getPublisherPage = (req, res) => {
  res.status(200).render("publisher", {
    title: "publication.com : Publisher Information",
  });
};
exports.getReviewPolicyPage = (req, res) => {
  res.status(200).render("reviewPolicy", {
    title: "publication.com : Review Policy",
  });
};
exports.getEditorialTeamPage = (req, res) => {
  res.status(200).render("editorialTeam", {
    title: "publication.com : Editorial Team",
  });
};

exports.getSubmissionsPage = (req, res) => {
  res.status(200).render("submissions", {
    title: "publication.com : Submissions",
  });
};
exports.getAuthorInstructionsPage = (req, res) => {
  res.status(200).render("authorInstructions", {
    title: "publication.com : Author Instructions",
  });
};
exports.getReferenceManagementPage = (req, res) => {
  res.status(200).render("referenceManagement", {
    title: "publication.com : Reference Management",
  });
};
exports.getApplyEditorPage = (req, res) => {
  res.status(200).render("applyEditor", {
    title: "publication.com : Apply for Editor",
  });
};
exports.getAimAndScopePage = (req, res) => {
  res.status(200).render("aimAndScope", {
    title: "publication.com : Aim and Scope",
  });
};

exports.getIndexingPage = (req, res) => {
  res.status(200).render("indexing", {
    title: "publication.com : Indexing",
  });
};

exports.getScopePage = (req, res) => {
  res.status(200).render("scope", {
    title: "publication.com : Scope",
  });
};

exports.getOpenAccessPage = (req, res) => {
  res.status(200).render("openAccess", {
    title: "publication.com : Open Access",
  });
};

exports.getEthicsPage = (req, res) => {
  res.status(200).render("ethics", {
    title: "publication.com : Ethics",
  });
};

exports.getCompetingInterestPage = (req, res) => {
  res.status(200).render("competingInterest", {
    title: "publication.com : Competing Interest",
  });
};

exports.getHumanAnimalRightsPage = (req, res) => {
  res.status(200).render("humanAnimalRights", {
    title: "publication.com : Human and Animal Rights",
  });
};

exports.getReviewersGuidelinesPage = (req, res) => {
  res.status(200).render("reviewersGuidelines", {
    title: "publication.com : Reviewers Guidelines",
  });
};

exports.getPlagiarismPolicyPage = (req, res) => {
  res.status(200).render("plagiarismPolicy", {
    title: "publication.com : Plagiarism Policy",
  });
};
exports.getArchivePolicyPage = (req, res) => {
  res.status(200).render("archivePolicy", {
    title: "publication.com : Archive Policy",
  });
};
exports.getAdvertisementPolicyPage = (req, res) => {
  res.status(200).render("advertisementPolicy", {
    title: "publication.com : Advertisement Policy",
  });
};

exports.getDisclaimerPage = (req, res) => {
  res.status(200).render("disclaimer", {
    title: "publication.com : Disclaimer",
  });
};

exports.getReadersPage = (req, res) => {
  res.status(200).render("readers", {
    title: "publication.com : For Readers",
  });
};

exports.getAuthorsPage = (req, res) => {
  res.status(200).render("authors", {
    title: "publication.com : For Authors",
  });
};
exports.getLibrariansPage = (req, res) => {
  res.status(200).render("librarians", {
    title: "publication.com : For Librarians",
  });
};
