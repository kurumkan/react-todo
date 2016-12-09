var React = require("react");
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var Search = require('Search');
var TodoAPI = require('TodoAPI');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			todos: TodoAPI.getTodos(),
			showCompleted: false,
			term: ''
		}
	},

	componentDidUpdate: function(prevProps, prevState) {
		TodoAPI.setTodos(this.state.todos);
	},

	handleAddTodo: function(text){
		var {todos} = this.state;
		todos.push({
			text: text, 
			id: uuid(),
			completed: false,
			createdAt: moment().unix(),
			completedAt: null
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
			if(todo.id===id){
				todo.completed=!todo.completed;			
				todo.completedAt = todo.completed ? moment().unix() : null;
			}
			
			return todo;
		});		

		this.setState({todos: updatedTodos});
	},

	render: function(){
		var {todos, term, showCompleted}=this.state;		
		var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, term);

		return (
			<div>									
				<h1 className='page-title'>Todo App</h1>
				<div className='row'>
					<div className='column small-centered small-11 medium-6 large-5'>
						<div className='container'>
							<Search 
								onSearch={this.handleSearch} 
								showCompleted={this.state.showCompleted} 
								term={this.state.term} 
							/>
							<TodoList todos={filteredTodos} onToggle={this.handleToggle} />
							<AddTodo onAddTodo={this.handleAddTodo} />
						</div>
					</div>
				</div>
			</div>	
		);
	}
})
	