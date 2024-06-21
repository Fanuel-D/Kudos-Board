require("dotenv").config();

const config = {
  port: process.env.PORT,
  db: process.env.DATABASE_URL,
};

module.exports = config;
