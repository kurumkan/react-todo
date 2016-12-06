var React = require("react");


module.exports = React.createClass({

	render: function(){

		var {id, text} = this.props;

		return (
			<div>									
				{id} - {text}
			</div>	
		);
	}
})