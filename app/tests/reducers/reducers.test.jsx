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
    it('should add todos', ()=>{
      var todos = [
        {
          id:1,
          text:'anything',
          completed: false,
          completedAt: null,
          createdAt: 11
        }
      ]
      var action={
        type: 'ADD_TODOS',
        todos
      }

      var result = reducers.todosReducer([], action)

      expect(result.length).toEqual(1);
      expect(result[0]).toEqual(todos[0]);
    });
  });
});