package com.pro100user.bookstore.service;

import com.pro100user.bookstore.dto.CategoryWithBooksDTO;
import com.pro100user.bookstore.model.Book;
import com.pro100user.bookstore.model.Category;

import java.util.List;

public interface CategoryService extends BasicService<Category, Long> {

    List<Category> findByName(String name);
    List<CategoryWithBooksDTO> getCategoriesWithCountBooks();
}
