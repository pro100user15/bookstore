package com.pro100user.bookstore.repository.impl;

import com.pro100user.bookstore.model.WorldLiterature;
import com.pro100user.bookstore.repository.WorldLiteratureRepository;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

@Repository
public class WorldLiteratureRepositoryImpl extends BasicRepositoryImpl<WorldLiterature, Long> implements WorldLiteratureRepository {

    public WorldLiteratureRepositoryImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }
}
