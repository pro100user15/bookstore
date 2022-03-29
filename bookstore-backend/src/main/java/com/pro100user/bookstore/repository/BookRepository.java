package com.pro100user.bookstore.repository;

import com.pro100user.bookstore.model.Book;

import java.util.List;

public interface BookRepository extends BasicRepository<Book, Long> {

    List<Book> getListBookByCategoryName(String name);
}
