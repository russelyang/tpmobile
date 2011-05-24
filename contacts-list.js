var mobile = require('./login');

var user = {
		name : "russel.yang",
		password : "toptop",
		token : 'd0be5f82-44c8-4686-aa13-c58e8ee910b7'
};

mobile.login(user, function(res){
	var https = require('https');

	var options = {
			host : 'tpoitgf8i.tpolab.com',
			port : 443,
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
