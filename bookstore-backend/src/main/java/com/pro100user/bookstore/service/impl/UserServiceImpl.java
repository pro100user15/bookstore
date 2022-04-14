package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.dto.BookListDTO;
import com.pro100user.bookstore.dto.UserEditDTO;
import com.pro100user.bookstore.exception.NotFoundException;
import com.pro100user.bookstore.mapper.BookMapper;
import com.pro100user.bookstore.mapper.UserMapper;
import com.pro100user.bookstore.model.Book;
import com.pro100user.bookstore.model.User;
import com.pro100user.bookstore.model.enums.Role;
import com.pro100user.bookstore.repository.BookRepository;
import com.pro100user.bookstore.repository.UserRepository;
import com.pro100user.bookstore.security.CustomUserDetails;
import com.pro100user.bookstore.service.BookService;
import com.pro100user.bookstore.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final BookRepository bookRepository;
    private final UserMapper userMapper;
    private final BookMapper bookMapper;

    @Override
    public User create(User user) {
        if (userRepository.findByEmail(user.getEmail()) != null)
            throw new IllegalArgumentException("This user email is already taken");
        user.setRoles(Set.of(Role.ROLE_USER));
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
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.update(user);
    }

    @Override
    public User delete(Long id) {
        User user = readById(id);
        return userRepository.delete(user);
    }

    @Transactional(readOnly = true)
    @Override
    public List<User> getAll() {
        return userRepository.getAll();
    }

    @Transactional(readOnly = true)
    @Override
    public User findByEmail(String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new NotFoundException("User with email " + email + " is not found");
        }
        return user;
    }

    @Override
    @Transactional(readOnly = true)
    public List<BookListDTO> getWishList(String email) {
        return bookMapper.toBookListDTO(findByEmail(email).getWishList()
                .stream().collect(Collectors.toList()));
    }

    @Transactional(readOnly = true)
    @Override
    public BookListDTO toggleWishList(String email, Long bookId) {
        Book book = bookRepository.readById(bookId);
        User user = findByEmail(email);
        if (user.getWishList().contains(book)) {
            user.getWishList().remove(book);
        } else {
            user.getWishList().add(book);
        }
        userRepository.update(user);
        return bookMapper.toBookListDTO(book);
    }

    @Override
    public User editUser(CustomUserDetails currentUser, UserEditDTO userDTO) {
        User user = findByEmail(currentUser.getEmail());
        User editUser = userMapper.ToUser(userDTO);
        editUser.setCreatedAt(user.getCreatedAt());
        editUser.setAddress(user.getAddress());
        editUser.setRoles(user.getRoles());
        editUser.setBasket(user.getBasket());
        editUser.setOrders(user.getOrders());
        editUser.setWishList(user.getWishList());
        if (editUser.getPassword().isEmpty()) {
            editUser.setPassword(user.getPassword());
        }
        else {
            if (passwordEncoder.matches(userDTO.getPassword(), user.getPassword()))
                editUser.setPassword(passwordEncoder.encode(userDTO.getNew_password()));
            else throw new IllegalArgumentException("Passwords do not match");
        }
        return userRepository.update(editUser);
    }
}
