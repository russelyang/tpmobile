var add_activity = require("../lib/add-activity");

var server = {"host" : "tpodev6web01.tpolab.com", "port" : "81"};
var user = {"name" : "russel.yang", "password" : "toptop"};

var count = process.argv[2] || 1; 

for(var i=0; i<count; i++) {
	add_activity(server, user);
}
