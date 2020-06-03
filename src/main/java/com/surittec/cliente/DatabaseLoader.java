package com.surittec.cliente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final TodoRepository repository;

	@Autowired
	public DatabaseLoader(TodoRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {
		
	this.repository.save(new Todo("Fabiana Lima", "909.090.098-00", "Rua 10 casa 20 Lago sul", "55619898888", "fabianalima@teste.com"));
		
	}
}
