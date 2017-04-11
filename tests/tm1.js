var browsers = require('../common/BrowserActions.js');
var pageA = require('../pages/PageA.js');


describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
	console.log(browser.params.constant.password); 
	browsers.launch('https://angularjs.org');
//	browsers.close();
	
    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });
  
  it('should add a todo 2', function() {
		console.log(browser.params.constant.password); 
		browsers.launch('https://angularjs.org');
//		browsers.close();
		
	    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
	    element(by.css('[value="add"]')).click();

	    var todoList = element.all(by.repeater('todo in todoList.todos'));
	    expect(todoList.count()).toEqual(3);
	    expect(todoList.get(2).getText()).toEqual('write second protractor test');

	    // You wrote your first test, cross it off the list
	    todoList.get(2).element(by.css('input')).click();
	    var completedAmount = element.all(by.css('.done-true'));
	    expect(completedAmount.count()).toEqual(2);
	  });
});