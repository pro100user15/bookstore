package com.pro100user.bookstore.service;

import com.pro100user.bookstore.model.User;

public interface UserService extends BasicService<User, Long> {

    User findByLogin(String login);
    User findByLoginAndPassword(String login, String password);
}
