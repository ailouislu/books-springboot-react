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
@Schema(description = "The authors")
public class Authors {

    @Schema(description = "ID.", allowableValues = "35147118",  required = true)
	@Id
    private String id;

    @Schema(description = "fullName", allowableValues = "David walliams", required = true)
    private String fullName;

    private String type;

    private String born;

    private String yearsActive;

    private String books;

    private String description;

    public Authors() {}

}
