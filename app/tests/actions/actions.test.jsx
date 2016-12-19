var expect = require('expect');
var $ = require('jQuery');
var actions = require('actions');

describe('actions', ()=>{
	
	it('should generate search term action', () => {
		var term = 'Hello world'; 
		var action = {
			type: 'SET_TERM',
			term
		}
		var result = actions.setTerm(term);

		expect(result).toEqual(action);
	});

	
	it('should generate add todo action', () => {
		var text='Helloo world'
		var action = {
			type: 'ADD_TODO',
			text
		}
		var result = actions.addTodo(text);

		expect(result).toEqual(action);
	});

	it('should generate toggle show completed action', ()=>{
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		}
		var result = actions.toggleShowCompleted();
		expect(result).toEqual(action);
	});

	it('should generate toggle todo action', ()=>{
		var id = 1;
		var action = {
			type: 'TOGGLE_TODO',
			id
		}
		var result = actions.toggleTodo(id);
		expect(result).toEqual(action);
	});

	it('should generate add todos action object', ()=>{
		var todos = [
			{
				id: 1000,
				text: 'anyhting',
				completed: false,
				completedAt: null,
				createdAt: 1111
			}
		];
		var action = {
			type: 'ADD_TODOS',
			todos
		}
		var result = actions.addTodos(todos)

		expect(result).toEqual(action);
	});
	
	
})	