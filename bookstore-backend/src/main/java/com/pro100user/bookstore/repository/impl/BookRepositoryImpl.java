package com.pro100user.bookstore.repository.impl;

import com.pro100user.bookstore.model.Book;
import com.pro100user.bookstore.repository.BookRepository;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BookRepositoryImpl extends BasicRepositoryImpl<Book, Long> implements BookRepository {

    private static final String SELECT_BOOKS_BY_PAGE = "FROM Book";
    private static final String SELECT_BOOKS_BY_CATEGORY_NAME = "FROM Category.books WHERE Category.name like :name";

    public BookRepositoryImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    @Override
    public List<Book> getPageBooks(int page, int size) {
        if(page < 1) {
            throw new IllegalArgumentException("Page index must not be less than one!");
        }
        if (size < 1) {
            throw new IllegalArgumentException("Page size must not be less than one!");
        }
        return sessionFactory.openSession()
                .createQuery(SELECT_BOOKS_BY_PAGE, Book.class)
                .setFirstResult(--page * size)
                .setMaxResults(size)
                .getResultList();
    }

    @Override
    public List<Book> searchBooks(int page, int size, String search) {
        return getPageBooks(page, size);
    }

    @Override
    public List<Book> getListBookByCategoryName(String name) {
        return sessionFactory.openSession()
                .createQuery(SELECT_BOOKS_BY_CATEGORY_NAME, Book.class)
                .setParameter("name", name)
                .getResultList();
    }
}
