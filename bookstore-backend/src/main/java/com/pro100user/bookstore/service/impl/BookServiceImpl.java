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
@Transactional
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;

    @Override
    public Book create(Book object) {
        return bookRepository.create(object);
    }

    @Transactional(readOnly = true)
    @Override
    public Book readById(Long id) {
        return bookRepository.readById(id);
    }

    @Override
    public Book update(Book object) {
        readById(object.getId());
        return bookRepository.update(object);
    }

    @Override
    public Book delete(Book object) {
        return bookRepository.delete(object);
    }

    @Transactional(readOnly = true)
    @Override
    public List<Book> getAll() {
        return bookRepository.getAll();
    }

    @Transactional(readOnly = true)
    @Override
    public List<Book> getListBookByCategoryName(String name) {
        return bookRepository.getListBookByCategoryName(name);
    }
}
