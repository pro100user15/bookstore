package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.dto.BookCreateDTO;
import com.pro100user.bookstore.dto.BookDetailsDTO;
import com.pro100user.bookstore.dto.BookListDTO;
import com.pro100user.bookstore.mapper.BookMapper;
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
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;
    private final BookMapper bookMapper;

    @Override
    public BookListDTO create(BookCreateDTO dto) {
        return bookMapper.toBookListDTO(
                bookRepository.create(
                        bookMapper.toBook(dto)
                )
        );
    }

    @Transactional(readOnly = true)
    @Override
    public BookDetailsDTO readById(Long id) {
        return bookMapper.toBookDetailsDTO(
                bookRepository.readById(id)
        );
    }

    @Override
    public BookListDTO update(BookCreateDTO dto) {
        return bookMapper.toBookListDTO(
                bookRepository.update(
                        bookMapper.toBook(dto)
                )
        );
    }

    @Override
    public BookDetailsDTO delete(Long id) {
        return bookMapper.toBookDetailsDTO(
                bookRepository.delete(bookRepository.readById(id))
        );
    }

    @Transactional(readOnly = true)
    @Override
    public List<BookListDTO> getAll() {
        return bookMapper.toBookListDTO(
                bookRepository.getAll()
        );
    }

    @Transactional(readOnly = true)
    @Override
    public List<Book> getListBookByCategoryName(String name) {
        return bookRepository.getListBookByCategoryName(name);
    }
}
