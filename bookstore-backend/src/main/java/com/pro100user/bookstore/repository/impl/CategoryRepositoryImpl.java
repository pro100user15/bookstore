package com.pro100user.bookstore.repository.impl;

import com.pro100user.bookstore.model.Book;
import com.pro100user.bookstore.model.Category;
import com.pro100user.bookstore.repository.CategoryRepository;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.util.List;

@Slf4j
@Repository
public class CategoryRepositoryImpl extends BasicRepositoryImpl<Category, Long> implements CategoryRepository {

    private static final String SELECT_BY_NAME = "FROM Category WHERE name like :name";
    private static final String SELECT_COUNT_BOOKS = "SELECT books.size FROM Category WHERE id=:id";

    public CategoryRepositoryImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    @Override
    public Category findByName(String name) {
        return sessionFactory.openSession()
                .createQuery(SELECT_BY_NAME, Category.class)
                .setParameter("name", name)
                .getSingleResult();
    }

    public int getBookSizeByCategoryName(Long id) {
        return (int) sessionFactory.openSession()
                .createQuery(SELECT_COUNT_BOOKS)
                .setParameter("id", id)
                .getSingleResult();
    }
}
