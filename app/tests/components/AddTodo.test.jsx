var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var {AddTodo} = require('AddTodo');

describe('AddTodo', ()=>{
	it('should exist', () => {
		expect(AddTodo).toExist();
	});

  it('should dispatch ADD_TODO when valid input', () => {
    var text='hello world';
    var action={
      type: 'ADD_TODO',
      text
    }
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    addTodo.setState({value: text})
    var $el = $(ReactDOM.findDOMNode(addTodo));
    TestUtils.Simulate.submit($el.find('form')[0]);    
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should NOT dispatch ADD_TODO when invalid input', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    addTodo.setState({value: ''})
    var $el = $(ReactDOM.findDOMNode(addTodo));
    TestUtils.Simulate.submit($el.find('form')[0]);    
    expect(spy).toNotHaveBeenCalled();
  });
});