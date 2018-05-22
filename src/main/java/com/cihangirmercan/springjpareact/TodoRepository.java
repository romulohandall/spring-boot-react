package com.cihangirmercan.springjpareact;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface TodoRepository extends CrudRepository<Todo, Long> {
	List<Todo> findAll();
}