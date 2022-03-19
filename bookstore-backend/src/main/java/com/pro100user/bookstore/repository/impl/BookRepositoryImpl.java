package com.pro100user.bookstore.repository.impl;

import com.pro100user.bookstore.model.Book;
import com.pro100user.bookstore.repository.BookRepository;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

@Repository
public class BookRepositoryImpl extends BasicRepositoryImpl<Book, Long> implements BookRepository {

    public BookRepositoryImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }
}
