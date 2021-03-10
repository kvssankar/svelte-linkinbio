const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const { linkSchema } = require("./Link.js");

const userSchema = new Schema({
  password: { type: String, required: true },
  created_date: { type: Date, default: Date.now },
  instagram: { type: String, required: true },
  facebook: String,
  twitter: String,
  views: { type: Number, default: 0 },
  links: [linkSchema],
});

//TODO Add fields by admins

const User = mongoose.model("user", userSchema);

module.exports = { User };
