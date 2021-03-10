const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const linkSchema = new Schema({
  url: String,
  title: String,
  image: String,
  description: { type: String, default: "Click on the link below" },
  clicks: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
});

const Link = mongoose.model("link", linkSchema);

module.exports = { Link, linkSchema };
