module.exports = {
	launch: function (url) {
		console.log('Open browser and navigate');
		browser.get(url);  
	},
	close: function () {
		console.log('Close browser');
		browser.close();
	}
};
