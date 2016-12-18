var React = require("react");
var {connect} = require('react-redux');
import TodoListItem from 'TodoListItem';


export var TodoList = React.createClass({
	
	render: function(){
		var {todos}=this.props;
		var renderList = () => {

			if(todos.length===0)
				return <p className='container__message'>Nothing To Do</p>			
			else
				return todos.map((todo)=><TodoListItem {...todo} key={todo.id}/>);			
					
		}
		return (
			<div>
				{renderList()}
			</div>
	    )	
	}	
})

export default connect(
	(state)=>{
		return {
			todos: state.todos
		}
	}
)(TodoList);

