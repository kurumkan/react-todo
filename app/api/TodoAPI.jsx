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
		
	},

	filterTodos: function(todos, showCompleted, term){
		//filter by show Completed
		var filteredTodos = todos.filter((todo)=>{
			if(showCompleted)
				return true;			
			
			return !todo.completed;
		});

		//filter by search
		if(term!==''){			
			filteredTodos = filteredTodos.filter((todo)=>{
				return todo.text.toLowerCase().indexOf(term)>=0			
			});
		}
		
		return filteredTodos.sort((a,b)=>{
			if(a.completed&&!b.completed)
				return 1;
			else if(!a.completed&&b.completed)
				return -1;
			else
				return 0;
		});
	}
}
