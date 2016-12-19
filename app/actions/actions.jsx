export var setTerm = (term) => {
	return {
		type: 'SET_TERM',
		term
	}
}


export var addTodo = (text)=> {
	return {
		type: 'ADD_TODO',
		text
	}
}

export var toggleShowCompleted = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	}
}

export var toggleTodo = (id)=>{
	return {
		type: 'TOGGLE_TODO',
		id
	}
}

export var addTodos = (todos) => {
	return{
		type: 'ADD_TODOS',
		todos
	}
}
