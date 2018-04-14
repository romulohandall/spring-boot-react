package com.cihangirmercan.springbootreact;

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
		this.repository.save(new Todo("Learn Spring Boot", "27.05.2018", "No"));
		this.repository.save(new Todo("Learn React", "27.05.2018", "No"));
	}
}
