
module.exports = function(server, user) {
	var mobile = require('./login');

	mobile.login(server, user, function(res){
		var https = server.port == "443" ? require('https') : require("http");

		var options = {
				host : server.host,
				port : server.port||'443',
				path : '/dataservice/contact.svc/list?q=all',
				method : 'GET',
				headers : {
					'token' : res.token
				}
			};

		var req = https.request(options, function(res) {
			  res.on('data', function(d) {
			    console.log(d.toString());
			  });
			});

		req.end();	
	});
};

