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

    private static final String findUserByEmail = "FROM User WHERE email=:email";

    public UserRepositoryImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    @Override
    public User findByEmail(String email) {
        User user = sessionFactory.openSession()
                .createQuery(findUserByEmail, User.class)
                .setParameter("email", email)
                .getSingleResult();
        if(user == null) {
            throw new NotFoundException("User with email " + email + " is not found");
        }
        return user;
    }
}
