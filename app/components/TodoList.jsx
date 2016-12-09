var React = require("react");
var TodoListItem = require('TodoListItem');

module.exports = React.createClass({
	
	render: function(){
		var {todos}=this.props;
		if(todos.length===0)
			return <p className='container___message'>Nothing To Do</p>
		var renderList = ()=>{
			return todos.map((todo)=><TodoListItem {...todo} key={todo.id} onToggle={this.props.onToggle} />)
		}

		return (
			<div>									
				{renderList()}
			</div>	
		);
	}
})

	

