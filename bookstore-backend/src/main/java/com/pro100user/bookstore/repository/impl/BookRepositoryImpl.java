package com.pro100user.bookstore.repository.impl;

import com.pro100user.bookstore.model.Book;
import com.pro100user.bookstore.repository.BookRepository;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BookRepositoryImpl extends BasicRepositoryImpl<Book, Long> implements BookRepository {

    private String SELECT_BOOKS_BY_CATEGORY_NAME = "FROM Category.books WHERE Category.name like :name";

    public BookRepositoryImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    @Override
    public List<Book> getListBookByCategoryName(String name) {
        return sessionFactory.getCurrentSession().createQuery(SELECT_BOOKS_BY_CATEGORY_NAME, Book.class)
                .setParameter("name", name).getResultList();
    }
}
