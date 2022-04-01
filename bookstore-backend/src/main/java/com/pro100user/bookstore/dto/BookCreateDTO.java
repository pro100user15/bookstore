package com.pro100user.bookstore.dto;

import com.pro100user.bookstore.model.enums.Language;
import com.pro100user.bookstore.model.enums.Type;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class BookCreateDTO {
    private Long id;
    private String name;
    private Set<Long> authorsId;
    private double price;
    private String image;
    private Long categoryId;
    private Long publishingId;
    private String bookSeries;
    private int amount;
    private Language language;
    private int yearPublication;
    private Long translatorId;
    private int numberPages;
    private int circulation;
    private Type type;
}
