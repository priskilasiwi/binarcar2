const authMid = (req,res,next) => {
    const token = req.app.locals.token;

    if(!token) return res.render("login");
    else return next();
}

module.exports = authMid;