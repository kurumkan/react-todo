var React = require("react");
var TodoListItem = require('TodoListItem');

module.exports = React.createClass({
	
	render: function(){
		var {todos}=this.props;
		var renderList = ()=>{
			return todos.map((todo)=><TodoListItem {...todo} key={todo.id} />)
		}

		return (
			<div>									
				{renderList()}
			</div>	
		);
	}
})

	

