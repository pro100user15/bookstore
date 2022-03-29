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
@Transactional
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class AuthorServiceImpl implements AuthorService {

    private final AuthorRepository authorRepository;

    @Override
    public Author create(Author object) {
        return authorRepository.create(object);
    }

    @Transactional(readOnly = true)
    @Override
    public Author readById(Long id) {
        return authorRepository.readById(id);
    }

    @Override
    public Author update(Author object) {
        readById(object.getId());
        return authorRepository.update(object);
    }

    @Override
    public Author delete(Author object) {
        return authorRepository.delete(object);
    }

    @Transactional(readOnly = true)
    @Override
    public List<Author> getAll() {
        return authorRepository.getAll();
    }
}
