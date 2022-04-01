package com.pro100user.bookstore.service;

import com.pro100user.bookstore.dto.BookCreateDTO;
import com.pro100user.bookstore.dto.BookDetailsDTO;
import com.pro100user.bookstore.dto.BookListDTO;
import com.pro100user.bookstore.model.Book;

import java.util.List;

public interface BookService {

    BookListDTO create(BookCreateDTO dto);

    BookDetailsDTO readById(Long id);

    BookListDTO update(BookCreateDTO dto);

    BookDetailsDTO delete(Long id);

    List<BookListDTO> getAll();

    List<Book> getListBookByCategoryName(String name);
}
