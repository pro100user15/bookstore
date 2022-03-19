package com.pro100user.bookstore.repository.impl;

import com.pro100user.bookstore.model.Status;
import com.pro100user.bookstore.repository.StatusRepository;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

@Repository
public class StatusRepositoryImpl extends BasicRepositoryImpl<Status, Long> implements StatusRepository {

    public StatusRepositoryImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }
}
