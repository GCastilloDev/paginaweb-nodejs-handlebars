const express = require("express");
const app = express();
const hbs = require("hbs");
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
// Partials
hbs.registerPartials(__dirname + '/views/partials');
// Express Handlebars
app.set("view engine", "hbs");


app.get("/", (req, res) => {
  res.render('home', {
    nombre: 'Gustavo'
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, () => {
  console.clear();
  console.log("Servidor iniciado...");
});
