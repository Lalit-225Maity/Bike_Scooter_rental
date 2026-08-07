const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const Authentication = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided."
      });

    }
    const result = jwt.verify(token, process.env.SECRET_KEY);
    req.user = result;
    next();

  } catch (error) {

  }
}
module.exports = Authentication;