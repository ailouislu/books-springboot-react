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
@Schema(description = "A genre object")
public class Genres {


    @Id
    private String id;

    private String name;

    public Genres(String id, String name) {
        this.id = id;

        this.name = name;
    }

    public Genres() {}

}
