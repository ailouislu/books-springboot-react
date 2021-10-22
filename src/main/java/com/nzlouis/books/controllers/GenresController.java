package com.nzlouis.books.controllers;

import com.nzlouis.books.models.Genres;
import com.nzlouis.books.repositories.IGenresRepository;
import com.nzlouis.utils.response.R;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Louis
 *
 */
@RestController
@RequestMapping("/api/genres")
@Tag(name = "default")
@CrossOrigin("*")
public class GenresController {
	private static final Logger logger= LoggerFactory.getLogger(GenresController.class);

	@Autowired
	IGenresRepository genresRepository;

	@Operation(summary ="Find the genres list")
	@GetMapping("")
	@ResponseBody
	public R<List<Genres>> findGenres() {
	List<Genres> genresList = null;
		try {
			genresList = genresRepository.findAll();

		} catch (Exception e) {
			logger.error("Find the genres list fails:" + e.getMessage());
		}

		return new R<List<Genres>>().success().data(genresList);
	}
	
}














