var React = require("react");
var {connect} = require('react-redux');
var actions = require('actions');

export var Search = React.createClass({

  getInitialState: function() {    
    var {term, showCompleted} = this.props;
    return {
      term,
      showCompleted
    }  
  },
 
  render: function(){     
    var {dispatch} = this.props;
    return (
      <div className='container__header'>     
        <input 
          type='search' placeholder='Search todos'
          value={this.state.term}
          onChange={
            (e)=>{
              var {value} = e.target;
              this.setState({term: value});  
              dispatch(actions.setTerm(value));
            }
            
          }
        />   
        <label>       
          <input 
            type="checkbox" 
            checked={this.state.showCompleted} 
            onChange={(e)=>{
              dispatch(actions.toggleShowCompleted())
              var {showCompleted}=this.state;
              showCompleted=!showCompleted;
              this.setState({showCompleted})
            }} 
          /> 
          Show completed todos
        </label>
      </div>  
    );
  }
})

export default connect(
  (state)=>{
    return {
      showCompleted: state.showCompleted,
      term: state.term
    }
  }
)(Search);  

