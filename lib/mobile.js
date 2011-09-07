var events = require("events"),
	util = require("util");

function Mobile(server, user)
{
	this.server = server;
	this.user = user;
	events.EventEmitter.call(this);	
}

util.inherits(Mobile, events.EventEmitter);

exports.Mobile = Mobile;

Mobile.prototype.login = function() {
	var https = (this.server.port == "443") ? require('https') : require('http');

	var options = {
			host : this.server.host,
			port : this.server.port||'443',
			path : '/dataservice/login.svc/Login',
			method : 'POST',
			headers : {
				'content-type' : 'application/json; charset=UTF-8'
			}
		};

	var self = this;

	var req = https.request(options, function(res) {
		  res.on('data', function(d) {
		    self.emit('data', JSON.parse(d));
		  });
		});

	req.write(JSON.stringify(this.user));
	req.end();
}


