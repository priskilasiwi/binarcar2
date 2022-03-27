const express = require ("express");
const path = require ("path");
const app = express();
const Authroutes = require ("./routes/AuthRoutes");

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));
app.use("/", Authroutes);

app.get("/dashboard", (req,res) => {
    res.render("index");
})

app.get("/cars", (req,res) => {
    res.render("cars");
})

app.get("/addcar", (req, res) => {
    res.render('addcar');
})



app.listen(5000, () => {
    console.log('Server Running on port 5000...')
})


console.log('OK!')