var createError = require("http-errors");
module.exports = app => {
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res
      .status(err.status || 500)
      .send({ message: "Server error", hasError: true, data: {} });
    // res.render("error");
  });
  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    // next(createError(404));
    res.status(404).send({ message: "Not Found", hasError: true, data: {} });
  });
};
