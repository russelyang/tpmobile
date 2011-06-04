var mobile = require('./login');

var user = {
		name : "russel.yang",
		password : "toptop",
		token : 'd0be5f82-44c8-4686-aa13-c58e8ee910b7'
};

var contact =  {"origin":"8i Mobile",
		"address":{"unit":"","houseNumber":"","dirPrefix":"","streetName":"","streetType":"","dirSuffix":"","city":"","state":"","zip":""},
		"primaryPerson":{"firstName":"node.js-abc","lastName":"123"},
		"secondaryPerson":{"firstName":"","lastName":""},
		"company":"",
		"contactTypes":null,
		"defaultCommMethod":null,
		"phones":[],
		"emails":[]
	};

mobile.login(user, function(res){
	var https = require('https');

	var options = {
			host : 'tpoitgf8i.tpolab.com',
			port : 443,
			path : '/dataservice/contact.svc/add',
			method : 'POST',
			headers : {
				'token' : res.token,
				'content-type' : 'application/json; charset=UTF-8'
			}
		};
	
	for(var i=0; i<10; i++) {
		var req = https.request(options, function(res) {
			  res.on('data', function(d) {
			    console.log(JSON.parse(d).id);
			  });
			});
		contact.primaryPerson.firstName = "node.js.frist" + i;
		req.write(JSON.stringify(contact));
		req.end();			
	}
});