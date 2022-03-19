package com.pro100user.bookstore.service;

import com.pro100user.bookstore.model.Book;
import com.pro100user.bookstore.model.Category;
import com.pro100user.bookstore.model.model.CategoryModel;

import java.util.List;

public interface CategoryService extends BasicService<Category, Long> {

    List<Category> findByName(String name);
    List<Book> getListBookByCategoryName(String name);
    List<CategoryModel> CategoryWithBooksDTO();
}
