package com.nzlouis.books.repositories;

import com.nzlouis.books.models.Books;
import org.springframework.data.jpa.repository.JpaRepository;

/***
 *  @author Louis
 *  Interface IBooksRepository
 */
public interface IBooksRepository extends JpaRepository<Books, String> {

}


