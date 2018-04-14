package com.cihangirmercan.springbootreact;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Todo {

	private @Id @GeneratedValue Long id;
	private String description;
	private String endDate;
	private String isCompleted;

	public Todo() {
		super();
	}

	public Todo(String description, String endDate, String isCompleted) {
		super();
		this.description = description;
		this.endDate = endDate;
		this.isCompleted = isCompleted;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getIsCompleted() {
		return isCompleted;
	}

	public void setIsCompleted(String isCompleted) {
		this.isCompleted = isCompleted;
	}

	@Override
	public String toString() {
		return "Todo [id=" + id + ", description=" + description + ", endDate=" + endDate + ", isCompleted="
				+ isCompleted + "]";
	}

}