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
})	