var React = require("react");
var {connect} = require('react-redux');
var moment = require('moment');

var actions = require('actions');

export var TodoListItem = React.createClass({

	render: function(){		
		var {text, completed, id, createdAt, completedAt, dispatch} = this.props;
		
		var renderTime = () => {
			var message='Created ';
			var timeStamp=createdAt;

			if(completed){
				message='Completed ';
				timeStamp=completedAt;
			}		

			return message+moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a');
		};

		var todoClassName=completed ? 'todo todo-completed' : 'todo';		
		return (
			<div onClick={()=>dispatch(actions.toggleTodo(id))} className={todoClassName}>
				<div>
					<input type='checkbox' checked={completed} />
				</div>
				<div>
					<p>{text}</p>
					<p className='todo__subtext'>{renderTime()}</p>
				</div>
			</div>	
		);
	}
});


export default connect()(TodoListItem);


