var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var uuid = require('node-uuid');
var {Provider} = require('react-redux');
var configureStore = require('configureStore');

var Main = require('Main');
import TodoList from 'TodoList';

describe('Main', ()=>{
	it('should exist', () => {
		expect(Main).toExist();
	});

	it('should render TodoList', () => {
		var store=configureStore.configure();
		var provider = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<Main/>
			</Provider>
		);
				   
		var main = TestUtils.scryRenderedComponentsWithType(provider, Main)[0];
		var todoList =  TestUtils.scryRenderedComponentsWithType(main, TodoList);

		expect(todoList.length).toEqual(1);
	});

})	
