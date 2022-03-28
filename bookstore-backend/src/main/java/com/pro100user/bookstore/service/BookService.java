package com.pro100user.bookstore.service;

import com.pro100user.bookstore.model.Book;

import java.util.List;

public interface BookService extends BasicService<Book, Long> {

    List<Book> getListBookByCategoryName(String name);
}
