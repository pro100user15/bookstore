package com.pro100user.bookstore.repository.impl;

import com.pro100user.bookstore.model.Author;
import com.pro100user.bookstore.repository.AuthorRepository;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

@Repository
public class AuthorRepositoryImpl extends BasicRepositoryImpl<Author, Long> implements AuthorRepository {

    public AuthorRepositoryImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }
}
