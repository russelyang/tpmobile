exports.login = function(server, user, callback)
{
	var https = require('https');

	var options = {
			host : server.host,
			port : server.port||'443',
			path : '/dataservice/login.svc/Login',
			method : 'POST',
			headers : {
				'content-type' : 'application/json; charset=UTF-8'
			}
		};

	var req = https.request(options, function(res) {
		  res.on('data', function(d) {
		    callback(JSON.parse(d));
		  });
		});

	req.write(JSON.stringify(user));
	req.end();
};

