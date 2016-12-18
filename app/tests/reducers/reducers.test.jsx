var expect = require('expect');
var reducers = require('reducers');

describe('Reducers', ()=>{
  describe('searchTermReducer', ()=>{
    it('should set searchTerm', ()=>{

      var term = 'abc';
      var action={
        type:'SET_TERM',
        term
      }
      
      var result = reducers.searchTermReducer('', action);

      expect(result).toEqual(term);
    });
  });

  describe('showCompletedReducer', ()=>{
    it('should toggle show completed', ()=>{
      
      var action={
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      
      var result = reducers.showCompletedReducer(false,action);

      expect(result).toEqual(true);
    });
  });
});