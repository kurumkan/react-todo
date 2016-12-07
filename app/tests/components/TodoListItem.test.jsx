var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var TodoListItem = require('TodoListItem');

describe('TodoListItem', ()=>{
	it('should exist', () => {
		expect(TodoListItem).toExist();
	});
})	
