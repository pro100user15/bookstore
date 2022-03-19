package com.pro100user.bookstore.security;

import com.pro100user.bookstore.model.User;
import com.pro100user.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserService userService;

    @Override
    public CustomUserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        User user = userService.findByLogin(login);

        if(user == null) {
            throw new UsernameNotFoundException("User with login: " + login + " not found!");
        }

        return CustomUserDetails.fromUserToCustomUserDetails(user);
    }
}
