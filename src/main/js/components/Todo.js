import React from 'react';
import ReactDOM from 'react-dom';

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
				<td>{this.props.todo.nome}</td>
				<td>{this.props.todo.cpf}</td>
				<td>{this.props.todo.logadouro}</td>
				<td>{this.props.todo.telefone}</td>
				<td>{this.props.todo.email}</td>

				<td>
					<button onClick={this.handleDelete}>Delete</button>
				</td>
			</tr>		
		)
	}
}
// end::todo[]

export default Todo;