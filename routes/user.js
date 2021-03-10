const router = require("express").Router();
const bc = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require("../config");
const verify = require("../verify");

const { User } = require("../models/User");
const { Link } = require("../models/Link");

router.post("/register", async (req, res) => {
  console.log(req.body);
  const { dp, email, password, instagram, facebook, twitter } = req.body;
  const salt = await bc.genSalt(10);
  const hashed = await bc.hash(password, salt);
  const userExist = await User.findOne({ instagram: instagram });
  if (userExist) {
    return res.status(500).json({ status: 1, mssg: "User already exists" });
  }
  const newUser = new User({
    password: hashed,
    instagram,
    email,
    facebook,
    twitter,
    dp,
  });
  try {
    const addedUser = await newUser.save();
    const token = await jwt.sign({ _id: addedUser._id }, config.jwt_secret);
    return res.json({ token, user: addedUser });
  } catch (err) {
    return res.status(500).json({ status: 1, mssg: "Something went wrong" });
  }
});

router.post("/login", async (req, res) => {
  const { instagram, password } = req.body;
  const userExist = await User.findOne({ instagram: instagram });
  if (!userExist)
    return res.status(400).json({ status: 1, mssg: "User does not exists" });
  const validPassword = await bc.compare(password, userExist.password);
  if (!validPassword)
    return res.status(400).json({ status: 1, mssg: "Password does not match" });
  const token = jwt.sign({ _id: userExist._id }, config.jwt_secret);
  return res.json({ token, user: userExist });
});

//links routes

router.post("/add", verify, async (req, res) => {
  const { url, title, image, description } = req.body;
  const newLink = new Link({ url, title, image, description });
  User.findById(req.user._id, { $push: { links: new_link } }, { new: true })
    .then((data) => res.json(data))
    .catch((err) =>
      res.status(500).json({ status: 1, mssg: "Something went wrong" })
    );
});

router.post("/update", verify, async (req, res) => {
  const { link } = req.body;
  User.findOneAndUpdate(
    { _id: req.user._id, "links._id": link._id },
    { $set: { "links.$": link } },
    { new: true }
  )
    .then((data) => res.json(data))
    .catch((err) =>
      res.status(500).json({ status: 1, mssg: "Something went wrong" })
    );
});

router.post("/delete", verify, async (req, res) => {
  const { _id } = req.body;
  await User.links.pull(_id).remove();
  await User.save()
    .then((data) => res.json({ mssg: "Successfully deleted" }))
    .catch((err) =>
      res.status(500).json({ status: 1, mssg: "Something went wrong" })
    );
});

module.exports = router;
