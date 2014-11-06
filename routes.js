//  By default upon authentication, the access_token is saved, but you can add it like
module.exports = function(app, nconf) {
  app.get('/', function(req, res) {
    res.render('index');
  });
};
