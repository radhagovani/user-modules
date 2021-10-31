const express = require("express");
const passport =require('../auth/init')
const {
  signUp,
  getUser,
  getAllUser,
  updateUser,
} = require("../Controller/user");
const router = express.Router();

router.get("/",passport.authMiddleware(), async (req, res, next) => {
  const email = req.session.email;

  res.json(await getUser({ email }));
});

router.get("/all",passport.authMiddleware(), async (req, res, next) => {
  res.json(await getAllUser());
});

router.post("/signup", async (req, res, next) => {
  const user = req.body;
  let response = await signUp(user);
  if(response){
    res.json(response);
  }
  else{
    next();
  }
});

router.get("/:id",passport.authMiddleware(), async (req, res, next) => {
  const _id = req.params.id;

  res.json(await getUser({ _id }));
});

router.put("/",passport.authMiddleware(), async (req, res, next) => {
  const email = req.session.email;
  const user = req.body;
  res.json(await updateUser({ email }, user));
});

module.exports = router;
