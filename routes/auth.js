const express = require("express");
const passport = require("passport");
const router = express.Router();

router.post("/login", (req, res, next) => {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return res.send("error1");
    }
    if (!user) {
      return res.send("404");
    }
    req.logIn(user, function (err) {
      if (err) {
        return res.send("err2");
      }
        req.session.email=user.email;
      return res.send("logged in");
    });
  })(req, res, next);
});

module.exports = router;
