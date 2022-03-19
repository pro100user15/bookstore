package com.pro100user.bookstore.repository.impl;

import com.pro100user.bookstore.model.Order;
import com.pro100user.bookstore.repository.OrderRepository;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

@Repository
public class OrderRepositoryImpl extends BasicRepositoryImpl<Order, Long> implements OrderRepository {

    public OrderRepositoryImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }
}
