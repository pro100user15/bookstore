package com.pro100user.bookstore.repository.impl;

import com.pro100user.bookstore.exception.NotFoundException;
import com.pro100user.bookstore.repository.BasicRepository;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.List;

@Slf4j
public abstract class BasicRepositoryImpl<T extends Serializable, I extends Serializable> implements BasicRepository<T, I> {

    protected final SessionFactory sessionFactory;
    private final Class<T> basicClass;
    
    public BasicRepositoryImpl(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
        this.basicClass = (Class<T>) ((ParameterizedType) getClass()
                .getGenericSuperclass())
                .getActualTypeArguments()[0];
    }

    @Override
    public T create(T entity) {
        sessionFactory.getCurrentSession().save(entity);
        return entity;
    }

    @Override
    public T readById(I id) {
        T entity = sessionFactory.openSession().get(basicClass, id);
        if(entity == null) {
            throw new NotFoundException(basicClass.getName() + " with id " + id + " not found!");
        }
        return entity;
    }

    @Override
    public T update(T entity) {
        sessionFactory.getCurrentSession().update(entity);
        return entity;
    }

    @Override
    public T delete(T entity) {
        sessionFactory.getCurrentSession().remove(entity);
        return entity;
    }

    @Override
    public List<T> getAll() {
        return sessionFactory.openSession()
                .createQuery("FROM " + basicClass.getName())
                .getResultList();
    }
}
