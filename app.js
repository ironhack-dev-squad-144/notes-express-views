const express = require("express");

const app = express();

app.use(express.static("public"));

// Define the views folder
app.set("views", __dirname + "/views");

// Define the view engine: HBS
// HBS is like HTML++. Express can use some variables and conditions and loops in a HBS file
app.set("view engine", "hbs");

// Route "/" (http://localhost:3000)
app.get("/", (req, res, next) => {
  let h = new Date().getHours();
  let cities = ["Lisbon", "Porto", "Madrid", "Barcelona", "Paris"];
  cities.sort();

  // Render the view "/views/index.hbs"
  res.render("index", {
    hours: h,
    minutes: new Date().getMinutes(),
    isDaylight: 6 <= h && h <= 20,
    cities: cities,
  });
});

app.listen(3000, () => {
  console.log("App running on http://localhost:3000");
});
