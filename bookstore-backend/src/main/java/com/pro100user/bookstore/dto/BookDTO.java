package com.pro100user.bookstore.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class BookDTO {
    private Long id;
    private String name;
    private Set<AuthorDTO> authors;
    private String image;
    private double price;
    private CategoryDTO category;
    //private boolean isLike;
}
