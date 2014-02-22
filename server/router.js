var Rdio = require('node-rdio/rdio');
var RdioCredentials = require('./rdio_consumer_credentials');
var rdio = new Rdio([RdioCredentials.RDIO_CONSUMER_KEY, RdioCredentials.RDIO_CONSUMER_SECRET]);

exports.setup = function(app) {

	app.get('/login', function(req, res) {
		// begin the authentication process
		var callbackUrl = "http://localhost:8888/callback";
		rdio.beginAuthentication(callbackUrl, function(err, authUrl) {
			if (err) {
				console.log(err);
				res.clearCookie('requestToken');
				res.send("Error authenticating user.");
			}

			res.cookie('requestToken', {
				token: rdio.token[0],
				secret: rdio.token[1]
			});

			res.redirect(authUrl);
		});
	});

	app.get('/callback', function(req, res) {
		var requestToken = req.cookie('requestToken');
		var verifier = req.query.oauth_verifier;

		if (requestToken && verifier) {
		// exchange the request token and verifier for an access token.
		var rdio = new Rdio(
			[RdioCredentials.RDIO_CONSUMER_KEY, RdioCredentials.RDIO_CONSUMER_SECRET],
			[requestToken.token, requestToken.secret]
		);

		rdio.completeAuthentication(verifier, function(err) {
			if (err) {
				console.log(err);
				res.send("Error completing Authentication");
			}

			res.cookie('accessToken', {
				token: rdio.token[0],
				secret: rdio.token[1]
			});

			res.clearCookie('rdio');
			res.redirect('/');
		});
		} else {
			req.redirect('/logout');
		}
	});
}
