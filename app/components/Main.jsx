var React = require("react");
module.exports = (props)=>{
	return (
		<div>						
			<div className="row">	
			Hi there it works!				
				<div className="column small-centered medium-6 large-4">					
					{props.children}
				</div>
			</div>
		</div>	
	);
}
