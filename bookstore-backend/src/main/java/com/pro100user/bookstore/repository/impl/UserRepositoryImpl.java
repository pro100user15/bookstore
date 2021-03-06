package com.pro100user.bookstore.repository.impl;

import com.pro100user.bookstore.exception.NotFoundException;
import com.pro100user.bookstore.model.User;
import com.pro100user.bookstore.repository.UserRepository;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.security.authentication.BadCredentialsException;
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
        User user = sessionFactory.getCurrentSession().createQuery(findUserByLogin, User.class)
                .setParameter("login", login).getSingleResult();
        if(user == null) {
            throw new NotFoundException("User with login " + login + " is not found");
        }
        return user;
    }
}
