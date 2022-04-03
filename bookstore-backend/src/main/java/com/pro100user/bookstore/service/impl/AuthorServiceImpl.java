package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.model.Author;
import com.pro100user.bookstore.repository.AuthorRepository;
import com.pro100user.bookstore.service.AuthorService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthorServiceImpl implements AuthorService {

    private final AuthorRepository authorRepository;

    @Transactional
    @Override
    public Author create(Author object) {
        return authorRepository.create(object);
    }

    @Override
    public Author readById(Long id) {
        return authorRepository.readById(id);
    }

    @Transactional
    @Override
    public Author update(Author object) {
        return authorRepository.update(object);
    }

    @Transactional
    @Override
    public Author delete(Long id) {
        Author author = readById(id);
        return authorRepository.delete(author);
    }

    @Override
    public List<Author> getAll() {
        return authorRepository.getAll();
    }
}
