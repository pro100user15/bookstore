package com.pro100user.bookstore.repository.impl;

import com.pro100user.bookstore.model.PublishingHouse;
import com.pro100user.bookstore.repository.PublishingHouseRepository;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

@Repository
public class PublishingHouseRepositoryImpl extends BasicRepositoryImpl<PublishingHouse, Long> implements PublishingHouseRepository {

    public PublishingHouseRepositoryImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }
}
