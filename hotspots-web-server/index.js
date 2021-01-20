const express = require("express");
const app = express();
const db = require("./model/db");

const host = "http://localhost";
const port = 1234;

// Définition de notre moteur de templates - pug
app.set("view engine", "pug");

app.get("/", function (req, res) {
  const dbName = "hotspotParis";
  const collectionName = "hotspots";
  db.getAllHotspots(dbName, collectionName)
    .then((hotspots) => {
      res.render("index", { hotspots });
    })
    .catch((err) => {
      console.error(err);
    });
});

app.listen(port, () => {
  console.log(`Web-server is running at ${host}:${port}`);
});
