package com.pro100user.bookstore.repository;

import com.pro100user.bookstore.model.Book;

import java.util.List;

public interface BookRepository extends BasicRepository<Book, Long> {

    List<Book> getPageBooks(int page, int size);
    List<Book> searchBooks(int page, int size, String search);
    List<Book> getListBookByCategoryName(String name);
}
