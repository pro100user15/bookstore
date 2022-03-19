package com.pro100user.bookstore.repository;

import com.pro100user.bookstore.model.User;

import java.util.List;

public interface UserRepository extends BasicRepository<User, Long> {

    User findByLogin(String login);
}
