var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var TodoList = require('TodoList');
var TodoListItem = require('TodoListItem');

describe('TodoList', ()=>{
	it('should exist', () => {
		expect(TodoList).toExist();
	});

	it('should render one listItem for each to do item', () => {
		var todos = [
			{
				id: 1,
				text: 'buy milk'
			},
			{
				id: 2,
				text: 'pay bills'
			}
		];

		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		var todoListItems = TestUtils.scryRenderedComponentsWithType(todoList, TodoListItem);
		expect(todoListItems.length).toBe(todos.length);
	});

	it('should render message if nothing todo', () => {
		var todos = [];

		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		var $el = $(ReactDOM.findDOMNode(todoList));
		expect($el.find('.container__message').length).toBe(1);
	});

})	
