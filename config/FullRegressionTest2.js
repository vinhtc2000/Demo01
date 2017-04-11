var verTestReport = require('protractor-build-verification-testreport');
var env = require('../common/Constant.js');
console.log(env.GlobalVars.seleniumServer);

var config  = {
	seleniumAddress: env.GlobalVars.seleniumServer,
	//directConnect: true,  
	specs: ['tm1.js'],
	
//	multiCapabilities: [{
//	    'browserName': 'chrome'
//	  }, {
//	    'browserName': 'firefox'
//	  }],
	params: {
		login: {
			user: 'Jane',
			password: '1234'
	    	},
	    constant: env.GlobalVars
	  	},
	onPrepare: verTestReport.onPrepare
};
exports.config = config;
		