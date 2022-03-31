package com.pro100user.bookstore.service;

import com.pro100user.bookstore.dto.CategoryDTO;
import com.pro100user.bookstore.dto.CategoryWithBooksDTO;
import com.pro100user.bookstore.model.Category;

import java.util.List;

public interface CategoryService {

    CategoryWithBooksDTO create(CategoryDTO category);

    CategoryWithBooksDTO readById(Long id);

    CategoryWithBooksDTO update(CategoryDTO category);

    CategoryWithBooksDTO delete(Long id);

    List<Category> getAll();


    Category findByName(String name);
    List<CategoryWithBooksDTO> getCategoriesWithCountBooks();
}
