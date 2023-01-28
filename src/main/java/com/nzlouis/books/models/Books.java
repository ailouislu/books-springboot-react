package com.nzlouis.books.models;


import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;


/**
 * @author Louis
 *
 */
@Entity
@Getter
@Setter
@Schema(description = "The book object")
public class Books {

    @Schema(description = "Product ID.", allowableValues = "35147118",  required = true)
	@Id
    private String id;

    @Schema(description = "title", allowableValues = "Lost and Found", required = true)
    private String title;

    private String subtitle;

    private String type;

    private String format;

    @Schema(description = "The movie publish Date.", allowableValues = "One")
    private String releaseDate;

    @Schema(description = "The movie number In Stock.", allowableValues = "One")
    private String author;

    @Schema(description = "The movie daily Rental Rate.", allowableValues = "One")
    private float price;

    private float publisherRRP;

    private int pages;

    private boolean isWishList;

    private String description;

    private String dimensions;

    private String ISBN;

    private String Publisher;

    private String Image;

    public Books() {}

}
