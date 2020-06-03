import React from 'react';

import Todo from './Todo';

// tag::todo-list[]
export default class TodoList extends React.Component{
	
	constructor(props) {
		super(props);
	}

	// tag::todo-list-render[]
	render() {
		
		var todos = this.props.todos.map(todo =>
			<Todo key={todo.id} todo={todo} onDelete={this.props.onDelete} />
		);
			
		return (
			<table>
				<tbody>
					<tr>
						<th>Nome</th>
						<th>CPF</th>
						<th>Endereço</th>
						<th>Telefone</th>
						<th>E-mail</th>
					</tr>
					{todos}
				</tbody>
			</table>
		)
	}
}