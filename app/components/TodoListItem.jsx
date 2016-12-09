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
		
		return (
			<div onClick={()=>onToggle(id)} >													
				<input type='checkbox' checked={completed} />
				<p>{text}</p>
				<p>
					{renderTime()}
				</p>
			</div>	
		);
	}
})