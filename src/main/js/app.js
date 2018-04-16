'use strict';

// tag::vars[]
const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

const follow = require('./follow'); // function to hop multiple links by "rel"

const root = 'api'; // not /api, if we are not in the localhost:8080
// end::vars[]

// tag::app[]
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {todos: [], attributes: [], pageSize: 100, links: {}};
		this.onCreate = this.onCreate.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.onNavigate = this.onNavigate.bind(this);
	}
	
	// tag::follow-1[]
	componentDidMount() {
		this.loadFromServer(this.state.pageSize);
	}
	// end::follow-1[]
	
	// tag::follow-2[]
	loadFromServer(pageSize) {
		follow(client, root, [
			{rel: 'todos', params: {size: pageSize}}]
		).then(todoCollection => {
			return client({
				method: 'GET',
				path: todoCollection.entity._links.profile.href,
				headers: {'Accept': 'application/schema+json'}
			}).then(schema => {
				this.schema = schema.entity;
				return todoCollection;
			});
		}).done(todoCollection => {
			this.setState({
				todos: todoCollection.entity._embedded.todos,
				attributes: Object.keys(this.schema.properties),
				pageSize: pageSize,
				links: todoCollection.entity._links});
		});
	}
	// end::follow-2[]
	
	// tag::create[]
	onCreate(newTodo) {
		follow(client, root, ['todos']).then(todoCollection => {
			return client({
				method: 'POST',
				path: todoCollection.entity._links.self.href,
				entity: newTodo,
				headers: {'Content-Type': 'application/json'}
			})
		}).then(response => {
			return follow(client, root, [
				{rel: 'todos', params: {'size': this.state.pageSize}}]);
		}).done(response => {
			if (typeof response.entity._links.last != "undefined") {
				this.onNavigate(response.entity._links.last.href);
			} else {
				this.onNavigate(response.entity._links.self.href);
			}
		});
	}
	// end::create[]
	
	// tag::delete[]
	onDelete(todo) {
		client({method: 'DELETE', path: todo._links.self.href}).done(response => {
			this.loadFromServer(this.state.pageSize);
		});
	}
	// end::delete[]

	// tag::navigate[]
	onNavigate(navUri) {
		client({method: 'GET', path: navUri}).done(todoCollection => {
			this.setState({
				todos: todoCollection.entity._embedded.todos,
				attributes: this.state.attributes,
				pageSize: this.state.pageSize,
				links: todoCollection.entity._links
			});
		});
	}
	// end::navigate[]

	render() {
		return (
			<div>
				<CreateDialog attributes={this.state.attributes} onCreate={this.onCreate}/>
				<TodoList todos={this.state.todos}
							  links={this.state.links}
							  pageSize={this.state.pageSize}
							  onNavigate={this.onNavigate}
							  onDelete={this.onDelete}/>	
				<h2>REST: /api/todos</h2>
			</div>
		)
	}
}
// end::app[]


// tag::create-dialog[]
class CreateDialog extends React.Component {
	
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit(e) {
		e.preventDefault();
		var newTodo = {};
		this.props.attributes.forEach(attribute => {
			newTodo[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
		});
		this.props.onCreate(newTodo);
	
		// clear out the dialog's inputs
		this.props.attributes.forEach(attribute => {
			ReactDOM.findDOMNode(this.refs[attribute]).value = '';
		});
	
		// Navigate away from the dialog to hide it.
		window.location = "#";
	}
	
	render() {
		var inputs = this.props.attributes.map(attribute =>
			<p key={attribute}>
				<input type="text" placeholder={attribute} ref={attribute} className="field" />
			</p>
		);
	
		return (
			<div>
				<a href="#createTodo">Create</a>
	
				<div id="createTodo" className="modalDialog">
					<div>
						<a href="#" title="Close" className="close">X</a>
	
						<h2>Create new todo</h2>
	
						<form>
							{inputs}
							<button onClick={this.handleSubmit}>Create</button>
						</form>
					</div>
				</div>
			</div>
		)
	}	
}
// end::create-dialog[]


// tag::todo-list[]
class TodoList extends React.Component{
	
	constructor(props) {
		super(props);
	}

	// tag::todo-list-render[]
	render() {
		
		var todos = this.props.todos.map(todo =>
			<Todo key={todo._links.self.href} todo={todo} onDelete={this.props.onDelete}/>
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
	// end::todo-list-render[]
}
// end::todo-list[]

// tag::todo[]
class Todo extends React.Component{
	
	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}
	
	handleDelete() {
		this.props.onDelete(this.props.todo);
	}
	
	render() {
		return (
			<tr>
				<td>{this.props.todo.description}</td>
				<td>{this.props.todo.endDate}</td>
				<td>{this.props.todo.isCompleted}</td>
				<td>
					<button onClick={this.handleDelete}>Delete</button>
				</td>
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

