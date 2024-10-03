const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve(
   "Backend-Blog-app/",
    `${process.env.NODE_ENV}.env`
  ),
});
module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
};
