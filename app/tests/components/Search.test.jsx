var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
import {Search} from 'Search';

describe('Search', ()=>{
	it('should exist', () => {
		expect(Search).toExist();
	});

  it('should dispatch SET_TERM on input change', () => {
    var term = 'abc';
    var action = {
      type: 'SET_TERM',
      term
    };
    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(
      <Search  
        dispatch={spy} 
        showCompleted={false}
        term={''}
      />); 
    search.setState({term: term});
    var $el = $(ReactDOM.findDOMNode(search));
    TestUtils.Simulate.change($el.find('input[type=search]')[0]);    
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch toggleShowCompleted', () => {   
    
    var term='';     
    var action = {      
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(
      <Search  
        dispatch={spy}         
      />
    ); 
   
    var $el = $(ReactDOM.findDOMNode(search));
    TestUtils.Simulate.change($el.find('input[type=checkbox]')[0]);    
    expect(spy).toHaveBeenCalledWith(action);
  });
});