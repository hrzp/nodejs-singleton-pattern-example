const user = require("./user");

const knex = require("knex")({
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: "./src/database/database.sqlite"
  }
});

module.exports = {
  ...user(knex)
};
