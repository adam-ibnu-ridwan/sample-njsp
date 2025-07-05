const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views")); // lihat poin 2
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
    nama: "Adam", // data bebas
    layout: "layouts/main-layout",
    mahasiswa,
  });
});

app.use("/", (req, res) => {
  res.send("<h1>404 Page Not Found!</h1>");
});

module.exports = app;
