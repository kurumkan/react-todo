var React = require("react");
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
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
		var {dispatch} = this.props;
		if(value){			
			this.setState({value: ''});			
			dispatch(actions.addTodo(value));
		}
	    this.refs.todoInput.focus();
	},

	render: function(){	
		return (
			<div className='container__footer'>									
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

	
export default connect()(AddTodo);
