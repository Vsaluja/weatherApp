// This app.js consists of the backEnd data for server creation and routing and in the js folder >> main.js consists the weather data fetching
const express = require("express");
const app = express();
// It means when you have a server it will first try to run on the server if not it will run on port 8080
// const port = process.env.PORT || 8080;
const port =  8080;
const path = require("path");
const hbs = require("hbs");

// Static path for the public folder where all the static data is located like the css files and the js file in which we are fetching the data
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

// Path for views folder
const viewsPath = path.join(__dirname, "../templates/views")

// Setting up views folder path
app.set("view engine", "hbs");
app.set("views", viewsPath);

// Path for partials folder
const partialsPath = path.join(__dirname, "../templates/partials")

// Registering partials
hbs.registerPartials(partialsPath);

app.get("/", (req, res)=>{
    res.render("home");
})
app.get("/about", (req, res)=>{
    res.render("about")
})
app.get("/weather", (req, res)=>{
    res.render("weather")
})
app.get("*", (req, res)=>{
    res.send("404 Error page");
})

app.listen(port, ()=>{
    console.log("Connected to port", port);
})