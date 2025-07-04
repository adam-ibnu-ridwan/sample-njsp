const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
// const port = 1234;

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
  // const mahasiswa = [
  //   {
  //     nama: "Adam Ridwan",
  //     email: "xxxxxx@gmail.com",
  //     jurusan: "I'dad Lughowy",
  //   },
  //   {
  //     nama: "Ibnu Ridwan",
  //     email: "yyyyyyy@gmail.com",
  //     jurusan: "Syariah",
  //   },
  //   {
  //     nama: "Ridwan",
  //     email: "zzzzzzz@gmail.com",
  //     jurusan: "Lughoh",
  //   },
  // ];

  // res.render("index", {
  //   title: "Halaman Home",
  //   nama: "Adam",
  //   layout: "layouts/main-layout",
  //   mahasiswa,
  // });

  res.send("<h1>Halo</h1>");
});

// app.get("/about", (req, res) => {
//   res.render("about", {
//     title: "Halaman About",
//     layout: "layouts/main-layout",
//   });
// });

// app.get("/contact", (req, res) => {
//   res.render("contact", {
//     title: "Halaman Contact",
//     layout: "layouts/main-layout",
//   });
// });

app.use("/", (req, res) => {
  res.sendStatus(404).send("<h1>404 Page Not Found!</h1>");
});

// app.listen(1234, () => {
//   console.log(`The app is listening at http://localhost:${1234}`);
// });

module.exports = app;
