var events = require("events"),
	inherits = require("util").inherits;

function ContactList() {
	events.EventEmitter.call(this);
}

inherits(ContactList, events.EventEmitter);

ContactList.prototype.fetch = function(server, userCache) {
		var https = server.port == "443" ? require('https') : require("http");

		var options = {
				host : server.host,
				port : server.port||'443',
				path : '/dataservice/contact.svc/list?q=all',
				method : 'GET',
				headers : {
					'token' : userCache.token
				}
			};
		var self = this;

		var req = https.request(options, function(res) {
              var body;
			  res.on('data', function(chunk) {
			    body += chunk;
			  });
              res.on('end', function() {
                self.emit('data', body);
              });
			});

		req.end();		
}

module.exports = ContactList;




