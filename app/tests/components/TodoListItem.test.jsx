var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var {TodoListItem} = require('TodoListItem');
var uuid = require('node-uuid');

describe('TodoListItem', ()=>{
	it('should exist', () => {
		expect(TodoListItem).toExist();
	});
	it('should dispatch TOGGLE_TODO action on click', () => {		
		var id = uuid();
		var todo =  {
						id: id,
						text: "Walk the dog",
						completed: false
					};
	    var spy = expect.createSpy();
		var todoItem = TestUtils.renderIntoDocument(
			<TodoListItem
				{...todo} dispatch={spy} 	
			/>
		);			

		var $el = $(ReactDOM.findDOMNode(todoItem));
    	TestUtils.Simulate.click($el[0]);    
    	expect(spy).toHaveBeenCalledWith({
    		type: 'TOGGLE_TODO',
    		id
    	});
    });

})	
