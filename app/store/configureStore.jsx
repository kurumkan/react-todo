var redux = require('redux');
var {searchTermReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure = (initialState={}) => {
	var reducer = redux.combineReducers({
		showCompleted: showCompletedReducer,
		term: searchTermReducer,
		todos: todosReducer
	});

	var store = redux.createStore(reducer, initialState, redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f=>f
	));

	return store;
}
