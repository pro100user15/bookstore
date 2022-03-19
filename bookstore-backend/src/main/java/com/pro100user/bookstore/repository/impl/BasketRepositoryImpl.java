package com.pro100user.bookstore.repository.impl;

import com.pro100user.bookstore.model.Basket;
import com.pro100user.bookstore.repository.BasketRepository;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

@Repository
public class BasketRepositoryImpl extends BasicRepositoryImpl<Basket, Long> implements BasketRepository {

    public BasketRepositoryImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }
}
