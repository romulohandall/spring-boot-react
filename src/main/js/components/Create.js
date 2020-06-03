import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Create extends React.Component {

    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
		e.preventDefault(); // prevent enter key
    
        var newTodo = {
            nome: ReactDOM.findDOMNode(this.refs['nome']).value.trim(),
            cpf: ReactDOM.findDOMNode(this.refs['cpf']).value.trim(),
            logadouro: ReactDOM.findDOMNode(this.refs['logadouro']).value.trim(),
            telefone: ReactDOM.findDOMNode(this.refs['telefone']).value.trim(),
            email: ReactDOM.findDOMNode(this.refs['email']).value.trim(),
        };
    
        axios.post('api/todos', newTodo).then((result) => {
            this.props.history.push("/");
        });	
    }
    
    render() {
		return (
            <div>
                <h4><Link to="/">Lista de Clientest</Link></h4>
                <div>
                    <h4>Adicionar Cliente</h4>
                    <form onSubmit={this.handleSubmit}>
                        <p>
                            <input type="text" placeholder='nome' ref='nome' />
                        </p>
                        <p>
                            <input type="text" placeholder='cpf' ref='cpf' />
                        </p>
                        <p>
                            <input type="text" placeholder='logadouro' ref='logadouro' />
                        </p>
                        <p>
                            <input type="text" placeholder='telefone' ref='telefone' />
                        </p>
                        <p>
                            <input type="text" placeholder='email' ref='email' />
                        </p>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>      
		)
    }
}

