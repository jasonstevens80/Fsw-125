  
const express = require("express");
const morgan = require("morgan");
const app = express();

// Middleware - A function that fires on the inbetween for every route
app.use(express.json()); // Looks for a request body, and turns it into "req.body"
app.use(morgan("dev")) // Logs request to the console

//Routes
app.use("/bounty", require("./routes/bountyRouter.js"))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// telling app to listen to port with callback function showing it is in fact working.
app.listen(9000, () => {
  console.log("App is listening on port 9000!");
});