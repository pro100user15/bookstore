package com.pro100user.bookstore.repository.impl;

import com.pro100user.bookstore.model.Publishing;
import com.pro100user.bookstore.repository.PublishingRepository;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

@Repository
public class PublishingRepositoryImpl extends BasicRepositoryImpl<Publishing, Long> implements PublishingRepository {

    public PublishingRepositoryImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }
}
