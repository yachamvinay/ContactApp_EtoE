package com.greatlearning.service;

import java.util.List;

import com.greatlearning.entity.Contact;

public interface ContactService {
	
	public Contact savecontact(Contact c);
	
	public List<Contact> getContacts();
	
	public void deleteById(Long id);
}
