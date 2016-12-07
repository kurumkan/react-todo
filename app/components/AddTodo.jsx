var React = require("react");


module.exports = React.createClass({
	getInitialState: function() {
		return {
			value: ""
		}
	},

	handleChange: function(e){
		this.setState({
			value: e.target.value
		})
	},
	
	hanldeSubmit: function(e){
		e.preventDefault();
		var {value} = this.state;
		if(value){
			this.props.onAddTodo(value);
			this.setState({value: ''});
		}
	    this.refs.todoInput.focus();
	},

	render: function(){	
		return (
			<div>									
				<form onSubmit={this.hanldeSubmit} >
					<input 
						type='text' placeholder='What do you need to do?'
						onChange={this.handleChange} value={this.state.value} ref='todoInput'	
						required autoFocus   
					/>
					<button className='button expanded'>Add Todo</button>
				</form>
			</div>	
		);
	}
})

	

