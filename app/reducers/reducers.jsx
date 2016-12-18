export var searchTermReducer = (state='', action) => {

	switch(action.type){
		case 'SET_TERM':
			return action.term;		
		default:
			return state;
	}
}

export var showCompletedReducer = (state=false, action) => {

	switch(action.type){
		case 'TOGGLE_SHOW_COMPLETED':
			return !state;		
		default:
			return state;
	}
}

