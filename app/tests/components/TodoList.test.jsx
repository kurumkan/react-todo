var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');


import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodoListItem, {TodoListItem} from 'TodoListItem';



describe('TodoList', ()=>{
	it('should exist', () => {
		expect(TodoList).toExist();
	});

	it('should render one listItem for each to do item', () => {
		var todos = [
			{
				id: 1,
				text: 'Do something',
				completed: false,
				completedAt: undefined,
				createdAt: 500
			}, 
			{
				id: 2,
				text: 'Check mail',
				completed: false,
				completedAt: undefined,
				createdAt: 500
			}
		];
		var store = configure({
			todos
		});
		var provider = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<ConnectedTodoList/>
			</Provider>
		);
		var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodoListItem);

		expect(todosComponents.length).toBe(todos.length);
	});

	it('should render message if nothing todo', () => {
		var todos = [];

		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		var $el = $(ReactDOM.findDOMNode(todoList));		
		expect($el.find('.container__message').length).toBe(1); 		
	});

})	
