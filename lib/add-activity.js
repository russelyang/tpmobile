module.exports = function(server, user) {
	var mobile = require('./login');
	var config = require('./config');
	var dateFormat = require('./dateFormat');

	var users = config.getUsers();
	var servers = config.getServers();

	var serial = 0;

	var activity =  
		{
		"type":"2",
		"description":"it is a call",
		"startOfEvent":"2011-08-31T00:00:00",
		"endOfEvent":"2011-08-31T00:00:00",
		"assignedToId":"8d4804f2-e6b4-43d5-b2a9-4df598a77f95",
		"reminderDays":0,
		"alarmTime":0,
		"assignedTo":"John Smith",
		"priority":"2",
		"contacts":[],
		"unlinkedContacts":[],
		"timeRange":3};

		mobile.login(server, user, function(userHash){
			console.log(userHash);
			activity.assignedToId = userHash.userId;
			activity.assignedTo = userHash.firstName + " " + userHash.lastName;
			activity.startOfEvent = dateFormat(new Date(), "isoDateTime");
			activity.endOfEvent = dateFormat(new Date(), "isoDateTime");
			activity.description = "node.js description " + dateFormat(new Date(), "isoTime") + serial++;
			
			var https = (server.port == "443") ? require('https') : require("http");
			
			var options = {
					host : server.host,
					port : server.port || '443',
					path : '/dataservice/activity.svc/save',
					method : 'POST',
					headers : {
						'token' : userHash.token,
						'content-type' : 'application/json; charset=UTF-8'
					}
				};	
			
			console.log(options);
			
			var req = https.request(options, function(res) {
				  res.on('data', function(d) {
				    console.log(d.toString());
				  });
				});
			req.write(JSON.stringify(activity));
			req.end();			
	});
};


