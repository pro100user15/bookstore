package com.pro100user.bookstore.service;

import com.pro100user.bookstore.dto.CategoryDTO;
import com.pro100user.bookstore.dto.CategoryWithBooksDTO;
import com.pro100user.bookstore.model.Category;

import java.util.List;

public interface CategoryService {

    CategoryDTO create(CategoryDTO category);

    CategoryDTO readById(Long id);

    CategoryDTO update(CategoryDTO category);

    CategoryDTO delete(Long id);

    List<CategoryDTO> getAll();


    CategoryDTO findByName(String name);
    List<CategoryWithBooksDTO> getCategoriesWithCountBooks();
}
