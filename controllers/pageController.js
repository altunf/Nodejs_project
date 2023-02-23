const getIndexPage = (req, res) => {
  res.render("index", {
    link: "index"
  });
};

const getAboutPage = (req, res) => {
  res.render("about" , {
    link: "about"
  } );
};

const getContactPage = (req, res) => {
  res.render("contact" , {
    link: "contact"
  });
};

const getPhotosPage = (req, res) => {
  res.render("photos");
};
const getUsersPage = (req, res) => {
    res.render("users");
  };
export { getIndexPage, getAboutPage, getContactPage, getPhotosPage, getUsersPage };
