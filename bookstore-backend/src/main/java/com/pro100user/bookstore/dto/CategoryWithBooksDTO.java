package com.pro100user.bookstore.dto;

import com.pro100user.bookstore.model.Category;
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

    public CategoryWithBooksDTO(CategoryDTO category, int countBooks) {
        this.id = category.getId();
        this.name = category.getName();
        this.countBooks = countBooks;
    }

    public CategoryWithBooksDTO(Long id, String name, int countBooks) {
        this.id = id;
        this.name = name;
        this.countBooks = countBooks;
    }
}
