package com.greatlearning.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Contact {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id; 
	private String conname; 
	private String phnumber;

}
