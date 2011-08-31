var mobile = require('./login');

var user = {
		name : "russel.yang",
		password : "toptop",
		token : 'd0be5f82-44c8-4686-aa13-c58e8ee910b7'
};

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
	
	for(var i=0; i<94; i++) {
		var req = https.request(options, function(res) {
			  res.on('data', function(d) {
			    console.log(JSON.parse(d).id);
			  });
			});
		contact.primaryPerson.firstName = "node.js.total94-" + i;
		req.write(JSON.stringify(contact));
		req.end();			
	}
});

