const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Adam Ridwan",
      email: "xxxxxx@gmail.com",
      jurusan: "I'dad Lughowy",
    },
    {
      nama: "Ibnu Ridwan",
      email: "yyyyyyy@gmail.com",
      jurusan: "Syariah",
    },
    {
      nama: "Ridwan",
      email: "zzzzzzz@gmail.com",
      jurusan: "Lughoh",
    },
  ];

  res.render("index", {
    title: "Halaman Home",
    nama: "Adam",
    layout: "layouts/main-layout",
    mahasiswa,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Halaman About",
    layout: "layouts/main-layout",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Halaman Contact",
    layout: "layouts/main-layout",
  });
});

app.use("/", (req, res) => {
  res.send("<h1>404 Page Not Found!</h1>");
});

module.exports = app;
