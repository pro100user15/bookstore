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

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@Transactional
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public User create(User user) {
        //user.getRoles().add(Role.ROLE_USER);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.create(user);
    }

    @Transactional(readOnly = true)
    @Override
    public User readById(Long id) {
        return userRepository.readById(id);
    }

    @Override
    public User update(User user) {
        User oldUser = readById(user.getId());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.update(user);
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
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
