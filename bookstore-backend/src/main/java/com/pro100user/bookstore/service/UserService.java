package com.pro100user.bookstore.service;

import com.pro100user.bookstore.dto.BookDTO;
import com.pro100user.bookstore.dto.UserEditDTO;
import com.pro100user.bookstore.model.User;
import com.pro100user.bookstore.security.CustomUserDetails;

import java.util.List;

public interface UserService extends BasicService<User, Long> {

    User findByEmail(String email);
    List<BookDTO> getWishList(String email);
    BookDTO toggleWishList(String email, Long id);
    User editUser(CustomUserDetails currentUser, UserEditDTO userDTO);
}
