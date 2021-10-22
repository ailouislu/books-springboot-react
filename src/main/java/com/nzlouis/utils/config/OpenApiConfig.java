package com.nzlouis.utils.config;

import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.models.OpenAPI;
import org.springdoc.core.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;


/**
 * @author Louis
 *
 */
@OpenAPIDefinition(
		// OpenAPI definition description
        info = @Info(
                title = "Books Service",
                version = "0.1.0",
                description = "A service for creating, retrieving, updating, and deleting books."
        		),
        // Request service address configuration, which can be configured for different environments
        servers = {
        		@Server(
		        		url = "/",
		        		description = "Default Server URL"
		        		)
        }
)
@Configuration
public class OpenApiConfig {

	// Group configuration: Books
	@Bean
	public GroupedOpenApi genresOpenApi() {
		String[] packagesToscan = {"com.nzlouis.books"};
		return GroupedOpenApi.builder().group("Genres")
				.packagesToScan(packagesToscan)
				.pathsToExclude("/api/books/**", "/books/**")
				.pathsToMatch("/api/genres/**", "/genres/**")
				.build();
	}

	@Bean
	public GroupedOpenApi authorsOpenApi() {
		String[] packagesToscan = {"com.nzlouis.books"};
		return GroupedOpenApi.builder().group("Authors")
				.packagesToScan(packagesToscan)
				.pathsToExclude("/api/books/**", "/books/**")
				.pathsToMatch("/api/authors/**", "/authors/**")
				.build();
	}

	@Bean
	public GroupedOpenApi userOpenApi() {
		String[] packagesToscan = {"com.nzlouis.users"};
		return GroupedOpenApi.builder().group("Users")
				.packagesToScan(packagesToscan)
				.build();
	}

	// Group configuration: Books
	@Bean
	public GroupedOpenApi booksOpenApi() {
		String[] packagesToscan = {"com.nzlouis.books"};
		return GroupedOpenApi.builder().group("Books")
				.packagesToScan(packagesToscan)
				.pathsToExclude("/api/genres/**", "/genres/**")
				.pathsToMatch("/api/books/**", "/books/**")
				.build();
	}

}
