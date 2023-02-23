const getIndexPage = (req, res) => {
  res.render("index");
};

const getAboutPage = (req, res) => {
  res.render("about");
};

const getContactPage = (req, res) => {
  res.render("contact");
};

const getPortfolioPage = (req, res) => {
  res.render("portfolio");
};

export { getIndexPage, getAboutPage, getContactPage, getPortfolioPage };
