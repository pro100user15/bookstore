package com.pro100user.bookstore.service;

import java.io.Serializable;
import java.util.List;

public interface BasicService <T extends Serializable, I extends Serializable> {

    T create(T object);

    T readById(I id);

    T update(T object);

    T delete(I id);

    List<T> getAll();
}
