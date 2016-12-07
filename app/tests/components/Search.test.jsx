var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Search = require('Search');

describe('Search', ()=>{
	it('should exist', () => {
		expect(Search).toExist();
	});

  it('should call onSearch with input value', () => {
    var term = 'abc';
    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(
      <Search  
        onSearch={spy} 
        showCompleted={false}
        term={''}
      />); 
    search.setState({term: term});
    var $el = $(ReactDOM.findDOMNode(search));
    TestUtils.Simulate.change($el.find('input[type=search]')[0]);    
    expect(spy).toHaveBeenCalledWith(false, term);
  });

  it('should call onSearch with proper checked value', () => {   
    
    var term='';     
    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(
      <Search  
        onSearch={spy} 
        showCompleted={false}
        term={''}
      />
    ); 
   
    var $el = $(ReactDOM.findDOMNode(search));
    TestUtils.Simulate.change($el.find('input[type=checkbox]')[0]);    
    expect(spy).toHaveBeenCalledWith(true, term);
  });
});