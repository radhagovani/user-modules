const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const passport = require("./auth/init");
const app = express();
const authRouter = require("./routes/auth"); 

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
    secret: "verygoodsecret",
    resave: false,
    saveUninitialized: true,
  })
);

// Passport.js
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use('/auth',authRouter);

app.use("/users", usersRouter);
app.get("/logout", (req, res, next) => {
  req.logOut();
  res.redirect("/");
});

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
