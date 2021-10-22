package com.nzlouis.books.controllers;

import com.nzlouis.books.models.Books;
import com.nzlouis.books.repositories.IBooksRepository;
import com.nzlouis.utils.response.R;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
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
@RequestMapping("/api/books")
@Tag(name = "default")
@CrossOrigin("*")
public class BooksController {
	private static final Logger logger= LoggerFactory.getLogger(BooksController.class);

	@Autowired
	IBooksRepository booksRepository;

	@Operation(summary ="Creates a new books.")
	@PostMapping
	public R<Books> addBook(@RequestBody Books books) {
		try {
			booksRepository.save(books);
		} catch (Exception e) {
			logger.error("Creates a new books fails:" + e.getMessage());
		}

		return new R<Books>().success();
	}

	@Operation(summary ="Update an existing books.")
	@PutMapping("")
	public R<Books> updateBook(@Parameter(description="Update an existing books.")@RequestBody Books books) {
		try {
			booksRepository.save(books);
		} catch (Exception e) {
			logger.error("Update an existing books fails:" + e.getMessage());
		}

		return new R<Books>().success();
	}

	@Operation(summary ="Retrieve an existing Book.")
	@GetMapping("/{id}")
	public R<Books> findBookById(@Parameter(description="A Book's id")@PathVariable String id) {
		Books books = null;
		try {
			books = booksRepository.findById(id).orElse(new Books());
		} catch (Exception e) {
			logger.error("Retrieve an existing books fails:" + e.getMessage());
		}

		return new R<Books>().success().data(books);
	}


	@Operation(summary ="Delete an existing Book.")
	@DeleteMapping(value = "/{id}")
	public R<Books> deleteBook(@Parameter(description="Delete an existing Book.")@RequestParam(value = "id") final String id) {
		try {
			booksRepository.deleteById(id);
		} catch (Exception e) {
			logger.error("Delete an existing Book fails:" + e.getMessage());
		}

		return new R<Books>().success();
	}

	@Operation(summary ="Find the Book list")
	@GetMapping("")
	@ResponseBody
	public R<List<Books>> findBooks() {
		List<Books> booksList = null;
		try {
			booksList = booksRepository.findAll();

		} catch (Exception e) {
			logger.error("Find the Book list fails:" + e.getMessage());
		}

		return new R<List<Books>>().success().data(booksList);
	}
	
}














