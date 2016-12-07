var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Main = require('Main');

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
	});

})	
