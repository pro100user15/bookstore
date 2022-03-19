package com.pro100user.bookstore.model.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryModel {
    private Long id;
    private String name;
    private int countBooks;

    public CategoryModel() {
    }

    public CategoryModel(Long id, String name, int countBooks) {
        this.id = id;
        this.name = name;
        this.countBooks = countBooks;
    }
}
