package com.pro100user.bookstore.repository.impl;

import com.pro100user.bookstore.model.PeriodLiterature;
import com.pro100user.bookstore.repository.PeriodLiteratureRepository;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

@Repository
public class PeriodLiteratureRepositoryImpl extends BasicRepositoryImpl<PeriodLiterature, Long> implements PeriodLiteratureRepository {

    public PeriodLiteratureRepositoryImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }
}
