var events = require("events"),
	inherits = require("util").inherits;

function ContactSearch() {
	events.EventEmitter.call(this);
}

inherits(ContactSearch, events.EventEmitter);

ContactSearch.prototype.fetch = function(server, userCache) {
		var https = server.port == "443" ? require('https') : require("http");

		var options = {
				host : server.host,
				port : server.port||'443',
				path : '/dataservice/contact.svc/search?q=a',
				method : 'GET',
				headers : {
					'token' : userCache.token
				}
			};
		var self = this;

		var req = https.request(options, function(res) {
			  res.on('data', function(d) {
			    self.emit('data', d);
			  });
			});

		req.end();		
}

module.exports = ContactSearch;




