var React = require("react");


module.exports = React.createClass({

	render: function(){

		var {text, completed, id} = this.props;

		return (
			<div onClick={
				()=>{
					this.props.onToggle(id);
				}
			} >									
				{text} 
				<input type='checkbox' checked={completed} />
			</div>	
		);
	}
})