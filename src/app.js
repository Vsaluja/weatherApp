const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");
const hbs = require("hbs");

// Public path
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

// Setting view engine and views Path
app.set("view engine", "hbs");
const viewsPath = path.join(__dirname, "../templates/views");
app.set("views", viewsPath);

// Partials
const partialsPath = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
    res.render("home");
})


app.get("/weather", (req, res) => {
    res.render("weather");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("*", (req, res) => {
    res.send("Error 404. Page couldn't be found");
})

app.listen(PORT, () => {
    console.log("Connected to PORT", PORT);
})