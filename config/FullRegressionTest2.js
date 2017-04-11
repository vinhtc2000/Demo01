var env = require('../common/Constant.js');
var HtmlScreenshotReporter = require('../resources/node_modules/protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
	userCss : '../example-custom.css',
	dest : 'reports/tmp/screenshots',
	filename : 'my-report.html',
});

exports.config = {
	// Setup the report before any tests start
	beforeLaunch : function() {
		return new Promise(function(resolve) {
			reporter.beforeLaunch(resolve);
		});
		process.on('uncaughtException', function() {
			reporter.jasmineDone();
			reporter.afterLaunch();
		});
	},

	seleniumAddress : env.GlobalVars.seleniumServer,
	// directConnect: true,
	specs : [ '../tests/tm1.js' ],
	// multiCapabilities: [{
	// 'browserName': 'chrome'
	// }, {
	// 'browserName': 'firefox'
	// }],
	params : {
		login : {
			user : 'Jane',
			password : '1234'
		},
		constant : env.GlobalVars
	},
	
	// Assign the test reporter to each running instance
	onPrepare : function() {
		jasmine.getEnv().addReporter(reporter);
	},
	
	// Close the report after all tests finish
	afterLaunch : function(exitCode) {
		return new Promise(function(resolve) {
			reporter.afterLaunch(resolve.bind(this, exitCode));
		});
	}
};