var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var AddTodo = require('AddTodo');

describe('AddTodo', ()=>{
	it('should exist', () => {
		expect(AddTodo).toExist();
	});

  it('should call params.onAddTodo', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    addTodo.setState({value: 'hello world'})
    var $el = $(ReactDOM.findDOMNode(addTodo));
    TestUtils.Simulate.submit($el.find('form')[0]);    
    expect(spy).toHaveBeenCalledWith('hello world');
  });

  it('should NOT call params.onAddTodo', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    addTodo.setState({value: ''})
    var $el = $(ReactDOM.findDOMNode(addTodo));
    TestUtils.Simulate.submit($el.find('form')[0]);    
    expect(spy).toNotHaveBeenCalled();
  });
});