const express = require("express");

const app = express();

app.use(express.static("public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/", (req, res, next) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("App running on http://localhost:3000");
});
