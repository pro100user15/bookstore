package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.model.User;
import com.pro100user.bookstore.model.enums.Role;
import com.pro100user.bookstore.repository.UserRepository;
import com.pro100user.bookstore.service.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Transactional
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository,
                           PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User create(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        //user.getRoles().add(Role.ROLE_USER);
        //user.setCreatedAt(LocalDateTime.now());
        return userRepository.create(user);
    }

    @Transactional(readOnly = true)
    @Override
    public User readById(Long id) {
        return userRepository.readById(id);
    }

    @Override
    public User update(User object) {
        readById(object.getId());
        return userRepository.update(object);
    }

    @Override
    public User delete(User object) {
        return userRepository.delete(object);
    }

    @Transactional(readOnly = true)
    @Override
    public List<User> getAll() {
        return userRepository.getAll();
    }

    @Transactional(readOnly = true)
    @Override
    public User findByLogin(String login) {
        return userRepository.findByLogin(login);
    }

    @Transactional(readOnly = true)
    @Override
    public User findByLoginAndPassword(String login, String password) {
        User user = findByLogin(login);
        if(user != null) {
            if(passwordEncoder.matches(password, user.getPassword())) {
                return user;
            }
        }
        return null;
    }
}
