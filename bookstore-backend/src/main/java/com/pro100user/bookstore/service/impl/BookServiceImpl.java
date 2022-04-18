package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.dto.BookCreateDTO;
import com.pro100user.bookstore.dto.BookDTO;
import com.pro100user.bookstore.dto.BookDetailsDTO;
import com.pro100user.bookstore.mapper.BookMapper;
import com.pro100user.bookstore.model.Book;
import com.pro100user.bookstore.repository.BookRepository;
import com.pro100user.bookstore.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;
    private final BookMapper bookMapper;

    @Override
    public BookDTO create(BookCreateDTO dto) {
        return bookMapper.toBookListDTO(
                bookRepository.create(
                        bookMapper.toBook(dto)
                )
        );
    }

    @Override
    @Transactional(readOnly = true)
    public BookDetailsDTO readById(Long id) {
        return bookMapper.toBookDetailsDTO(
                bookRepository.readById(id)
        );
    }

    @Override
    public BookDTO update(BookCreateDTO dto) {
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

    @Override
    @Transactional(readOnly = true)
    public List<BookDTO> getAll() {
        return bookMapper.toBookListDTO(
                bookRepository.getAll()
        );
    }

    @Override
    @Transactional(readOnly = true)
    public List<BookDTO> getPageBooks(int page, int size) {
        return bookMapper.toBookListDTO(
                bookRepository.getPageBooks(page, size)
        );
    }

    @Override
    @Transactional(readOnly = true)
    public List<BookDTO> searchBooks(int page, int size, String search) {
        return bookMapper.toBookListDTO(
                bookRepository.searchBooks(page, size, search)
        );
    }

    @Override
    @Transactional(readOnly = true)
    public long getCount() {
        return bookRepository.getCount();
    }

    @Override
    @Transactional(readOnly = true)
    public List<Book> getListBookByCategoryName(String name) {
        return bookRepository.getListBookByCategoryName(name);
    }
}
