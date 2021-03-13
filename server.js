const path = require("path");
const express = require("express");
const config = require("./config");
const app = express();
const mongoose = require("mongoose");
const axios = require("axios");
const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

const connect = mongoose
  .connect(config.mongouri, {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Mondo db connected...."))
  .catch((err) => console.log(err));

app.use("/api/user", require("./routes/user"));

app.post("/dp", (req, res) => {
  console.log(req.body);
  axios
    .get(`https://www.instagram.com/${req.body.instagram}/?__a=1`)
    .then((data) => res.json(data.data))
    .catch((err) => res.json(err));
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
