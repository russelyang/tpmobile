var events = require('events'),
	inherits = require('util').inherits;

function AddContact(server, userCache) {
	events.EventEmitter.call(this);
	this.server = server;
	this.userCache = userCache;
}

inherits(AddContact, events.EventEmitter);

AddContact.prototype.post = function() {
	var self = this;
	var contact =  {
		"origin":"8i Mobile",
		"address":{
			"unit":"",
			"houseNumber":"",
			"dirPrefix":"",
			"streetName":"",
			"streetType":"",
			"dirSuffix":"",
			"city":"","state":"","zip":""
		},
		"primaryPerson":{"firstName":"node.js-abc","lastName":"123"},
		"secondaryPerson":{"firstName":"","lastName":""},
		"company":"",
		"contactTypes":null,
		"defaultCommMethod":null,
		"phones":[],
		"emails":[]
	};

	var https = this.server.port == 443 ? require('https') : require('http');

	var options = {
			host : this.server.host,
			port : this.server.port,
			path : '/dataservice/contact.svc/add',
			method : 'POST',
			headers : {
				'token' : this.userCache.token,
				'content-type' : 'application/json; charset=UTF-8'
			}
		};
	
		var req = https.request(options, function(res) {
			var body;  
			res.on('data', function(chunk) {
				body += chuck.toString();
			  });
			res.on('end', function() {
				self.emit('data', body);
			}
			});
		req.write(JSON.stringify(contact));
		req.end();			
	
};

module.exports = AddContact;
