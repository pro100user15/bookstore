package com.pro100user.bookstore.repository;

import com.pro100user.bookstore.model.Book;
import com.pro100user.bookstore.model.Category;

import java.util.List;

public interface CategoryRepository extends BasicRepository<Category, Long> {

    Category findByName(String name);
    int getBookSizeByCategoryId(Long id);
}
