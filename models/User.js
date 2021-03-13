const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const { linkSchema } = require("./Link.js");

const userSchema = new Schema({
  dp: {
    type: String,
    default:
      "https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255710-stock-illustration-avatar-vector-male-profile-gray.jpg",
  },
  email: String,
  password: { type: String, required: true },
  created_date: { type: Date, default: Date.now },
  instagram: { type: String, required: true },
  facebook: String,
  twitter: String,
  views: { type: Number, default: 0 },
  links: [linkSchema],
  total_links: { type: Number, default: 0 },
  resetpassword:{type:String,default:null}
});

//TODO Add fields by admins

const User = mongoose.model("user", userSchema);

module.exports = { User };
