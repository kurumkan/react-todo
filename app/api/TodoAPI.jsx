var $ = require('jquery');

module.exports = {
	setTodos: function(todos){
		if($.isArray(todos)){
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;	
		}				
	},

	getTodos: function(){		
		var todos = [];
		try{
			todos = JSON.parse(localStorage.getItem('todos'));	
		}catch(error){
			
		}		

		return $.isArray(todos) ? todos : [];		
	},

	removeTodos: function(){
		
	}
}
