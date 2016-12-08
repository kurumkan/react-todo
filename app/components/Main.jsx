var React = require("react");
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var Search = require('Search');


module.exports = React.createClass({
	getInitialState: function() {
		return {
			todos: [
				{
					id: uuid(),
					text: "Walk the dog",
					completed: false
				},
				{
					id: uuid(),
					text: "Clean the yard",
					completed: false
				},
				{
					id: uuid(),
					text: "Finish the tutorial",
					completed: true				
				},
				{
					id: uuid(),
					text: "Apply for an internship",
					completed: true				
				}
			],
			showCompleted: false,
			term: ''
		}
	},
	
	handleAddTodo: function(text){
		var {todos} = this.state;
		todos.push({
			text: text, 
			id: uuid(),
			completed: false
		});
		this.setState({todos: todos});
	},

	handleSearch: function(showCompleted, term){
		this.setState({
			term: term.toLowerCase(),
			showCompleted: showCompleted
		});				
	},

	handleToggle: function(id){
		var updatedTodos = this.state.todos.map((todo)=>{
			if(todo.id===id)
				todo.completed=!todo.completed;			
			
			return todo;
		});

		this.setState({todos: updatedTodos});
	},

	render: function(){
		var {todos}=this.state;

		return (
			<div>									
				<h1>ToDo App</h1>		
				<Search 
					onSearch={this.handleSearch} 
					showCompleted={this.state.showCompleted} 
					term={this.state.term} 
				/>
				<TodoList todos={todos} onToggle={this.handleToggle} />
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>	
		);
	}
})
	