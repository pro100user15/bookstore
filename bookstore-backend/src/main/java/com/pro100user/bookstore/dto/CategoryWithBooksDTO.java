package com.pro100user.bookstore.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CategoryWithBooksDTO {
    private Long id;
    private String name;
    private int countBooks;

    public CategoryWithBooksDTO() {
    }

    public CategoryWithBooksDTO(Long id, String name, int countBooks) {
        this.id = id;
        this.name = name;
        this.countBooks = countBooks;
    }
}
