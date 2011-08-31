var df = require('./dateFormat');

module.exports["today"] = function() {
	var dt = new Date() - 7 * 60 * 60 * 1000; /*time zone adjustment*/
	dt.setHours(0);
	dt.setMinutes(0);
	dt.setSeconds(0);
	dt.setMilliseconds(0);
	return df(dt,"isoDateTime");
}

