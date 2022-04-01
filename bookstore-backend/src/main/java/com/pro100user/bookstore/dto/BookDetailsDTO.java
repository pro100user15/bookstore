package com.pro100user.bookstore.dto;

import com.pro100user.bookstore.model.enums.Language;
import com.pro100user.bookstore.model.enums.Type;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class BookDetailsDTO {
    private Long id;
    private String name;
    private Set<AuthorDTO> authors;
    private double price;
    private String image;
    private CategoryDTO category;
    private PublishingDTO publishing;
    private String bookSeries;
    private int amount;
    private Language language;
    private int yearPublication;
    private TranslatorDTO translator;
    private int numberPages;
    private int circulation;
    private Type type;
}
