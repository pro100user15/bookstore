package com.pro100user.bookstore.repository.impl;

import com.pro100user.bookstore.model.Translator;
import com.pro100user.bookstore.repository.TranslatorRepository;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

@Repository
public class TranslatorRepositoryImpl extends BasicRepositoryImpl<Translator, Long> implements TranslatorRepository {

    public TranslatorRepositoryImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }
}
