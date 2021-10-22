package com.nzlouis.books.repositories;

import com.nzlouis.books.models.Genres;
import org.springframework.data.jpa.repository.JpaRepository;

/***
 *  @author Louis
 *  Interface IGenresRepository
 */
public interface IGenresRepository extends JpaRepository<Genres, String> {

}


