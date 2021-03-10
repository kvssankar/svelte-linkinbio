const jwt = require("jsonwebtoken");
const config = require("./config");

module.exports = async function auth(req, res, next) {
  const token = req.header("auth-token");
  if (!token) res.status(401).json({ mssg: "no token found", status: 1 });
  try {
    const verify = await jwt.verify(token, config.jwt_secret);
    req.user = verify;
    //console.log(verify);
    next();
  } catch (err) {
    res.status(401).json({ mssg: "invalid token", status: 1 });
  }
};
