var React = require("react");

module.exports = React.createClass({

  getInitialState: function() {    
    return {
      term: this.props.term,
      showCompleted: this.props.showCompleted
    }  
  },
 
  handleSearch: function(e){  
    var {term, showCompleted} = this.state;

    if(e.target.type=='checkbox')     
      showCompleted=!showCompleted;      
    else
      term = e.target.value;                 

    this.setState({showCompleted: showCompleted, term: term});
    
    this.props.onSearch(showCompleted, term);      
  },

  render: function(){     
    return (
      <div className='container__header'>     
        <input 
          type='search' placeholder='Search todos'
          onChange={this.handleSearch} value={this.state.term}            
        />   
        <label>       
          <input 
            type="checkbox" 
            checked={this.state.showCompleted} onChange={this.handleSearch} 
          /> 
          Show completed todos
        </label>
      </div>  
    );
  }
})

  

