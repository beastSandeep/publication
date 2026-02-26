exports.getLandingPage = (req, res) => {
  // res.set(
  //   "Content-Security-Policy",
  //   "connect-src https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com https://partner.googleadservices.com https://tpc.googlesyndication.com https://region1.google-analytics.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com https://partner.googleadservices.com https://tpc.googlesyndication.com https://region1.google-analytics.com;",
  // );

  res.status(200).render("landingPage", {
    title: "publication.com : Your Complete publication Solution",
  });
};
