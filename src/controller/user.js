function UserController(userService) {
  return {
    async login(req, res, next) {
      let result = await userService.login(
        req.body.username,
        req.body.password
      );
      res.status(200).send(result);
    },
    async register(req, res, next) {
      let result = await userService.register(
        req.body.username,
        req.body.password,
        req.body.mail
      );
      res.status(200).send(result);
    }
  };
}

module.exports = UserController;
