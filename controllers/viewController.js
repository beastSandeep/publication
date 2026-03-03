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
