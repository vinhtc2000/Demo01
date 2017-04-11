var env = require('../common/Constant.js');
console.log(env.GlobalVars.seleniumServer);

exports.config = {
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
	  	}
};