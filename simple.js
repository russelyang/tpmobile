var ContactList = require("./lib/contacts-list");
var ContactSearch = require("./lib/contacts-search");

var server = {"host" : "ryang.corp.homestore.net", "port" : "80"};
var user = {"name" : "russel.yang", "password" : "toptop"};
var tpo = require('./lib/mobile');

(function() {
 	console.time("login");
	var m = new tpo.Mobile(server,user);
	m.on('data', function(userhash) {
			console.timeEnd("login");
		}
	);

	var contactlist = new ContactList();
	contactlist.on('data', function(d) {
		console.timeEnd("contactList");
	});

	m.on('data', function(userhash) {
			console.time("contactList");
			contactlist.fetch(server, userhash);
		});


	var contactSearch = new ContactSearch();
	contactSearch.on('data', function(d) {
		console.timeEnd("contactSearch");
	});
	m.on('data', function(userhash) {
			console.time("contactSearch");
			contactSearch.fetch(server, userhash);
		});
	


	m.login();
})();


