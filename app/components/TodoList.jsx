var React = require("react");
var TodoListItem = require('TodoListItem');

module.exports = React.createClass({
	
	render: function(){
		var {todos}=this.props;
		var renderList = () => {

			if(todos.length===0)
				return <p className='container__message'>Nothing To Do</p>			
			else
				return todos.map((todo)=><TodoListItem {...todo} key={todo.id} onToggle={this.props.onToggle} />);			
					
		}
		return (
			<div>
				{renderList()}
			</div>
	    )	
	}	
})

	

