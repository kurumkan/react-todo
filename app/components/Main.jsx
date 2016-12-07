var React = require("react");
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			todos: [
				{
					id: 1,
					text: "Walk the dog"
				},
				{
					id: 2,
					text: "Clean the yard"
				},
				{
					id: 3,
					text: "Finish the tutorial"
				},
				{
					id: 4,
					text: "Apply for an internship"
				}
			]
		}
	},

	handleAddTodo: function(text){
		alert('new todo '+ text);
	},

	render: function(){
		var {todos}=this.state;

		return (
			<div>									
				<h1>ToDo App</h1>						
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>	
		);
	}
})
	