var React = require("react");
var moment = require('moment');

module.exports = React.createClass({

	render: function(){		
		var {text, completed, id, createdAt, completedAt,onToggle} = this.props;
		
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
			<div onClick={()=>onToggle(id)} className={todoClassName}>
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
})