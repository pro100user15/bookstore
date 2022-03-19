package com.pro100user.bookstore.repository.impl;

import com.pro100user.bookstore.model.Language;
import com.pro100user.bookstore.repository.LanguageRepository;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

@Repository
public class LanguageRepositoryImpl extends BasicRepositoryImpl<Language, Long> implements LanguageRepository {

    public LanguageRepositoryImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }
}
