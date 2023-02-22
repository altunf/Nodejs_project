import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

//static files middleware
app.use(express.static("public"));

//routes
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Application running on port: ${port}`);
});
