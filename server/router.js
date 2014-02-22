// var api = require("./api.js");

exports.setup = function(app) {
	// The API root
	app.get('/index.html', function (req, res) {
		res.send("And we're live!"); 
	});
}
