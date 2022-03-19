package com.pro100user.bookstore.repository;

import java.io.Serializable;
import java.util.List;

public interface BasicRepository<T extends Serializable, I extends Serializable> {
    T create(T entity);
    T readById(I id);
    T update(T entity);
    T delete(T entity);
    List<T> getAll();

    //void find();
}
