const authMiddleware = () => {
  return (req, res, next) => {
    if (req.isAuthenticated()) return next();
    else res.redirect("/error");
  };
};

module.exports = authMiddleware;
