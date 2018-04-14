'use strict';

// tag::vars[]
const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');
// end::vars[]

// tag::app[]
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {todos: []};
	}

	// The common convention is to initialize state with all your attributes empty in the constructor. 
	// Then you lookup data from the server using componentDidMount and populate your attributes. 
	// From there on, updates can be driven by user action or other events.
	componentDidMount() { 
		// TODO: don't do /api/todos if the app is not in the localhost:8080  
		axios.get("api/todos").then(res => {
			console.log("Received Successful response from server!");
			console.log(res);
			this.setState({todos: res.data._embedded.todos});
		}, err => {
			console.log("Server rejected response with: " + err);
		});
	}

	render() {
		return (
			<div>
				<TodoList todos={this.state.todos}/>	
				<h2>REST: /api/todos</h2>
			</div>
		)
	}
}
// end::app[]

// tag::todo-list[]
class TodoList extends React.Component{
	render() {
		var todos = this.props.todos.map(todo =>
			<Todo key={todo._links.self.href} todo={todo}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Description</th>
						<th>End Date</th>
						<th>Is Completed?</th>
					</tr>
					{todos}
				</tbody>
			</table>
		)
	}
}
// end::todo-list[]

// tag::todo[]
class Todo extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.todo.description}</td>
				<td>{this.props.todo.endDate}</td>
				<td>{this.props.todo.isCompleted}</td>
			</tr>		
		)
	}
}
// end::todo[]

// tag::render[]
ReactDOM.render(
	<App />,
	document.getElementById('react')
)
// end::render[]

