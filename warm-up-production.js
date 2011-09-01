var contactList = require("./lib/contacts-list");

var server = {"host" : "ryang.corp.homestore.net", "port" : "80"};
var user = {"name" : "russel.yang", "password" : "toptop"};

contactList(server, user);
