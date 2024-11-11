require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "postgres",
      database: "pgdb",
    },
    migrations: {
      directory: "./migrations",
    },
  },
};
