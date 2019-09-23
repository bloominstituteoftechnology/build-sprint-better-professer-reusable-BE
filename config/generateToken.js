const jwt = require("jsonwebtoken");
const secrets = require("./secrets");

function generateToken(user) {
  const payload = {
    username: user.username
  };
  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = { generateToken };
