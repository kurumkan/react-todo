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
					text: "Walk the dog"
				},
				{
					id: uuid(),
					text: "Clean the yard"
				},
				{
					id: uuid(),
					text: "Finish the tutorial"
				},
				{
					id: uuid(),
					text: "Apply for an internship"
				}
			],
			showCompleted: false,
			term: ''
		}
	},

	handleAddTodo: function(text){
		var {todos} = this.state;
		todos.push({text: text, id: uuid()});
		this.setState({todos: todos});
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
	