const jwt = require('jsonwebtoken');
const secretkey = "AYUSHSINGH";

const authenticate = (req, res, next) => {
  const authorizationHeader = req.headers['authorization'];

  if (!authorizationHeader) {
    return res.status(401).json({ msg: "Authorization header is missing" });
  }

  const token = authorizationHeader.split(' ')[1];

  jwt.verify(token, secretkey, (err, validate) => {
    if (err) {
      return res.status(403).json({ msg: "Token validation failed" });
    }

    if (validate) {
      req.user = validate;
      return next();
    }

    return res.status(403).json({ msg: "User not authorized" });
  });
};

module.exports = authenticate;
