var React = require("react");
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var Search = require('Search');

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
			],
			showCompleted: false,
			term: ''
		}
	},

	handleAddTodo: function(text){
		alert('new todo '+ text);
	},

	handleSearch: function(showCompleted, term){
		this.setState({
			term: term.toLowerCase(),
			showCompleted: showCompleted
		});				
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
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>	
		);
	}
})
	