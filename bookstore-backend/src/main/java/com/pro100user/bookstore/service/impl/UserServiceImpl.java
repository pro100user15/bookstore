package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.model.User;
import com.pro100user.bookstore.model.enums.Role;
import com.pro100user.bookstore.repository.UserRepository;
import com.pro100user.bookstore.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    @Override
    public User create(User user) {
        user.setRoles(Set.of(Role.ROLE_USER));
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.create(user);
    }

    @Override
    public User readById(Long id) {
        return userRepository.readById(id);
    }

    @Transactional
    @Override
    public User update(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.update(user);
    }

    @Transactional
    @Override
    public User delete(Long id) {
        User user = readById(id);
        return userRepository.delete(user);
    }

    @Override
    public List<User> getAll() {
        return userRepository.getAll();
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
