var contactList = require("./lib/contacts-list");

var server = {"host" : "ryang.corp.homestore.net", "port" : "80"};
var user = {"name" : "russel.yang", "password" : "toptop"};
var tpo = require('./lib/mobile');

var m = new tpo.Mobile(server,user);
m.on('data', contactList);
m.login();
