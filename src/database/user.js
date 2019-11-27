module.exports = knex => {
  return {
    async getUser(username, password) {
      let users = await knex("user")
        .where({
          username: username,
          password: password
        })
        .first()
        .select(["id", "username", "mail"])
        .then(row => row);
      return users;
    },
    async insertUser(username, password, mail) {
      let user = await knex("user")
        .returning("id")
        .insert({
          username: username,
          password: password,
          mail: mail
        })
        .then(row => row);
      return user;
    }
  };
};
