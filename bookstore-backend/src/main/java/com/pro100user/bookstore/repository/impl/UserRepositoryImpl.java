package com.pro100user.bookstore.repository.impl;

import com.pro100user.bookstore.model.User;
import com.pro100user.bookstore.repository.UserRepository;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepositoryImpl extends BasicRepositoryImpl<User, Long> implements UserRepository {

    private String findUserByLogin = "FROM User WHERE email=:login";

    public UserRepositoryImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    @Override
    public User findByLogin(String login) {
        List<User> users = sessionFactory.getCurrentSession().createQuery(findUserByLogin, User.class)
                .setParameter("login", login).getResultList();
        return users.isEmpty() ? null : users.get(0);
    }
}
