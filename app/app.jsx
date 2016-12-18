var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var Main = require("Main");

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(()=>{
	console.log('STATE is ', store.getState())
})

store.dispatch(actions.addTodo('clearn the yard'));
store.dispatch(actions.setTerm('yard'));
store.dispatch(actions.toggleShowCompleted());

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();


// App css
require('style!css!sass!applicationStyles')




ReactDOM.render(
	<Main />,

	document.getElementById("app")
);


