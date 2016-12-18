var redux = require('redux');
var {searchTermReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure = () => {
	var reducer = redux.combineReducers({
		showCompleted: showCompletedReducer,
		term: searchTermReducer,
		todos: todosReducer
	});

	var store = redux.createStore(reducer, redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f=>f
	));

	return store;
}
