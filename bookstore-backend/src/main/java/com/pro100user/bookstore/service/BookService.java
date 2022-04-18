package com.pro100user.bookstore.service;

import com.pro100user.bookstore.dto.BookCreateDTO;
import com.pro100user.bookstore.dto.BookDTO;
import com.pro100user.bookstore.dto.BookDetailsDTO;
import com.pro100user.bookstore.model.Book;

import java.util.List;

public interface BookService {

    BookDTO create(BookCreateDTO dto);

    BookDetailsDTO readById(Long id);

    BookDTO update(BookCreateDTO dto);

    BookDetailsDTO delete(Long id);

    List<BookDTO> getAll();


    List<BookDTO> getPageBooks(int page, int size);
    List<BookDTO> searchBooks(int page, int size, String search);
    long getCount();
    List<Book> getListBookByCategoryName(String name);
}
