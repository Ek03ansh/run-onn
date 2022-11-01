const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 5000,
  SECRET: process.env.JWT_SECRET,
  CONNECTION_STRING: process.env.MONGODB_URL,
};
