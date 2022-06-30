package com.enim.CRUD.repository;

import org.springframework.data.repository.CrudRepository;

import com.enim.CRUD.model.Books;  
//repository that extends CrudRepository  
public interface BooksRepository extends CrudRepository<Books, Integer>  
{  
}  