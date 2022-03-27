const { Router } = require('express');
const router = Router();
const authMid = require("./../middleware/AuthMiddlewares");

router.get("/login", authMid, (req,res) => {
    res.render("login");
});

router.post("/login", (req,res) => {
    res.app.locals.token = "token123";
    res.redirect("/dashboard")
})
module.exports = router;