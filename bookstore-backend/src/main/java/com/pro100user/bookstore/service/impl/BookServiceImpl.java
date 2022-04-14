package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.model.Book;
import com.pro100user.bookstore.repository.BookRepository;
import com.pro100user.bookstore.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;

    @Transactional
    @Override
    public Book create(Book object) {
        return bookRepository.create(object);
    }

    @Override
    public Book readById(Long id) {
        return bookRepository.readById(id);
    }

    @Transactional
    @Override
    public Book update(Book object) {
        return bookRepository.update(object);
    }

    @Transactional
    @Override
    public Book delete(Long id) {
        Book book = readById(id);
        return bookRepository.delete(book);
    }

    @Override
    public List<Book> getAll() {
        return bookRepository.getAll();
    }

    @Override
    public List<Book> getListBookByCategoryName(String name) {
        return bookRepository.getListBookByCategoryName(name);
    }
}
