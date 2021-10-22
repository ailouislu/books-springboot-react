package com.nzlouis.books.repositories;

import com.nzlouis.books.models.Authors;
import com.nzlouis.books.models.Books;
import org.springframework.data.jpa.repository.JpaRepository;

/***
 *  @author Louis
 *  Interface IAuthorsRepository
 */
public interface IAuthorsRepository extends JpaRepository<Authors, String> {

}


