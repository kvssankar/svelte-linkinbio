const path = require("path");
const express = require("express");

const server = express();

server.use(express.static(path.join(__dirname, "public")));

server.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const port = 3000;
server.listen(port, () => console.log(`Listening on port ${port}`));
