package com.nzlouis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;

@Controller
@SpringBootApplication
public class BooksSpringbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(BooksSpringbootApplication.class, args);
	}

}
