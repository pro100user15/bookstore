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

    private String SELECT_BY_NAME = "FROM Category WHERE name like :name";
    private String SELECT_COUNT_BOOKS = "SELECT books.size FROM Category WHERE id=:id";
    private String SELECT_BOOKS_BY_CATEGORY_NAME = "FROM Category.books WHERE Category.name like :name";
    //private String SELECT_CATEGORY_WITH_COUNT_BOOKS = "SELECT new com.pro100user.bookstore.entity.model.CategoryModel(id, name, books.size) from Category";

    public CategoryRepositoryImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    @Override
    public List<Category> findByName(String name) {
        return sessionFactory.getCurrentSession().createQuery(SELECT_BY_NAME, Category.class)
                .setParameter("name", name).getResultList();
    }

    @Override
    public List<Book> getListBookByCategoryName(String name) {
        return sessionFactory.getCurrentSession().createQuery(SELECT_BOOKS_BY_CATEGORY_NAME, Book.class)
                        .setParameter("name", name).getResultList();
    }

    public Integer getBookSizeByCategoryName(Long id) {
        return (Integer) sessionFactory.getCurrentSession().createQuery(SELECT_COUNT_BOOKS)
                .setParameter("id", id).getSingleResult();
    }

    /*@Override
    public List<CategoryModel> getCategoryModels() {
        return sessionFactory.getCurrentSession()
                .createQuery("SELECT new com.pro100user.bookstore.model.model.CategoryModel(id, name, books.size) from Category", CategoryModel.class)
                //.createQuery("SELECT id, name, books.size as countBooks from Category", CategoryModel.class)
                .getResultList();
    }*/
}
