module.exports = function() {
	function _getServers() {
		return [ {
					"host" : "tpoitgn8i.tpolab.com",
					"port" : "443"
		    	 }
		   		];
	}

	function _getUsers() {
		return [ { "name" : "service_report",
			"password" : "123456" }
		];
	}

	return {
		getServers : _getServers,
		getUsers : _getUsers
	};
}();
