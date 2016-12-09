var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Main = require('Main');
var uuid = require('node-uuid');

describe('Main', ()=>{
	it('should exist', () => {
		expect(Main).toExist();
	});


	it('should add todo to the todos state on handleAddTodo', () => {		
		var testText = 'test text';

		var main = TestUtils.renderIntoDocument(<Main/>);
		main.setState({todos: []});
		main.handleAddTodo(testText);

		expect(main.state.todos[0].text).toBe(testText)		
		expect(main.state.todos[0].createdAt).toBeA('number');		
	});

	it('should change state on handleToggle', () => {		
		var main = TestUtils.renderIntoDocument(<Main/>);
		main.setState({
					todos: [
							{
								id: uuid(),
								text: "Walk the dog",
								completed: false
							},
							{
								id: uuid(),
								text: "Buy milk",
								completed: false
							}
						]
				});
		var id=main.state.todos[0].id;
		expect(main.state.todos[0].completed).toBe(false);		
		main.handleToggle(id);
		expect(main.state.todos[0].completed).toBe(true);	
		expect(main.state.todos[0].completedAt).toBeA('number');			
	});


	it('should change state on handleToggle', () => {		
		var main = TestUtils.renderIntoDocument(<Main/>);
		main.setState({
					todos: [
							{
								id: uuid(),
								text: "Walk the dog",
								completed: true,
								completedAt: 1
							},
							{
								id: uuid(),
								text: "Buy milk",
								completed: true,
								completedAt: 2
							}
						]
				});
		var id=main.state.todos[0].id;
		main.handleToggle(id);
		expect(main.state.todos[0].completedAt).toBe(null);			
	});
})	
