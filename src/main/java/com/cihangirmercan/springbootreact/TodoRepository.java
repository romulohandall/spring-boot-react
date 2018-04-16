package com.cihangirmercan.springbootreact;

import org.springframework.data.repository.PagingAndSortingRepository;

public interface TodoRepository extends PagingAndSortingRepository<Todo, Long> {

}