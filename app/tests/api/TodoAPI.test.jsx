var expect = require('expect');
var $ = require('jQuery');
var TodoAPI = require('TodoAPI');

describe('TodoAPI', ()=>{
	//called before each test
	beforeEach(()=>localStorage.removeItem('todos'));

	it('should exist', () => {
		expect(TodoAPI).toExist();
	});

	describe('getTodos', ()=>{
		it('should return empty array', () => {
			var todos='';
			localStorage.setItem('todos', JSON.stringify(todos));
			var result = TodoAPI.getTodos();
			expect(JSON.stringify(result)).toBe(JSON.stringify([]));
		});

		it('should return non empty array', () => {
			var todo = {id:1, text: 'buy fruits', completed: true};
			var todos=[todo];

			localStorage.setItem('todos', JSON.stringify(todos));
			var result = TodoAPI.getTodos();
			expect(JSON.stringify(result)).toBe(JSON.stringify(todos));
		});
	})	

	describe('setTodos', ()=>{
		it('should set null', () => {
			var todos='';
			TodoAPI.setTodos(todos);
			
			var fromStorage = localStorage.getItem('todos');
			expect(fromStorage).toBe(null);
		});

		it('should set not null value', () => {
			var todo = {id:1, text: 'buy fruits', completed: true};
			var todos=[todo];
			TodoAPI.setTodos(todos);

			var fromStorage = localStorage.getItem('todos');
			expect(fromStorage).toBe(JSON.stringify(todos));
		});
	})	
	describe('filterTodos', ()=>{
		it('should not filter when showCompleted is true', () => {
			var todo1 = {id:1, text: 'buy fruits', completed: false};
			var todo2 = {id:2, text: 'buy milk', completed: true};
			var todos=[todo1,todo2];
			var showCompleted=true;
			var term='';
			var result = TodoAPI.filterTodos(todos, showCompleted, term);			
			
			expect(JSON.stringify(result)).toBe(JSON.stringify(todos));
		});		

		it('should filter when showCompleted is false', () => {
			var todo1 = {id:1, text: 'buy fruits', completed: true};
			var todo2 = {id:2, text: 'buy milk', completed: false};
			var todos=[todo1,todo2];
			var showCompleted=false;
			var term='';
			var result = TodoAPI.filterTodos(todos, showCompleted, term);			
			
			expect(JSON.stringify(result)).toBe(JSON.stringify([todo2]));			
		});

		it('should sort todos array - completed todos go first', () => {
			var todo1 = {id:1, text: 'buy fruits', completed: true};
			var todo2 = {id:2, text: 'buy milk', completed: false};
			var todos=[todo1,todo2];
			var showCompleted=true;
			var term='';
			var result = TodoAPI.filterTodos(todos, showCompleted, term);			
			
			expect(JSON.stringify(result)).toBe(JSON.stringify([todo2, todo1]));			
		});

		it('should NOT filter if the term is NOT provided', () => {
			var todo1 = {id:1, text: 'buy fruits', completed: false};
			var todo2 = {id:2, text: 'buy milk', completed: false};
			var todos=[todo1,todo2];
			var showCompleted=true;
			var term='';
			var result = TodoAPI.filterTodos(todos, showCompleted, term);			
			
			expect(JSON.stringify(result)).toBe(JSON.stringify(todos));			
		});

		it('should filter if the term provided', () => {
			var todo1 = {id:1, text: 'red book', completed: false};
			var todo2 = {id:2, text: 'get haircut', completed: false};
			var todo3 = {id:3, text: '1boowwwww', completed: false};
			var todos=[todo1,todo2, todo3];
			var showCompleted=true;
			var term='boo';
			var result = TodoAPI.filterTodos(todos, showCompleted, term);			
			
			expect(JSON.stringify(result)).toBe(JSON.stringify([todo1, todo3]));			
		});
	});
})	