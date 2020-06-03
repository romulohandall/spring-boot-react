package com.surittec.cliente;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Todo {

	private @Id @GeneratedValue Long id;
	private String nome;
	private String cpf;
	private String logadouro;
	private String telefone;
	private String email;


	public Todo() {
		super();
	}

	public Todo(String nome, String cpf, String logadouro, String telefone, String email) {
		this.nome = nome;
		this.cpf = cpf;
		this.logadouro = logadouro;
		this.telefone = telefone;
		this.email = email;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getLogadouro() {
		return logadouro;
	}

	public void setLogadouro(String logadouro) {
		this.logadouro = logadouro;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "Todo [cpf=" + cpf + ", email=" + email + ", id=" + id + ", logadouro=" + logadouro + ", nome=" + nome
				+ ", telefone=" + telefone + "]";
	}



}