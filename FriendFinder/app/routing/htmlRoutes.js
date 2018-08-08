  //Dependency
var path = require('path');
//module.exports this is going to send whatever is to the right outside of the file when someone requires it.
module.exports = function (app) {
  //GET request 
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  //CATCH ALL ROUTE just IN CASE URL GETS breaks
  // or If no matching route is found default to home
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname +  "../public/home.html")); 
  });
}