var userRouter = require("../routes/user");

module.exports = (app, context) => {
  app.use("/user", userRouter(context.userController));
};
