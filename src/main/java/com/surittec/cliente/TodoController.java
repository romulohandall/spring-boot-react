package com.surittec.cliente;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoController {

	@Autowired
	TodoRepository todoRepo;
	
	@GetMapping("/api/todos")
	public List<Todo> getTodos() {
		return todoRepo.findAll();
	}
	
	@PostMapping(value = "/api/todos")
	@ResponseStatus(value = HttpStatus.OK)
	public void addTodo(@RequestBody Todo todo) {
		todoRepo.save(todo);
	}
	
	@DeleteMapping(value = "/api/todos/{id}")
	@ResponseStatus(value = HttpStatus.OK)
	public void addTodo(@PathVariable Long id) {
		todoRepo.delete(id);
	}
}
