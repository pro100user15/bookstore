package com.pro100user.bookstore.service;

import com.pro100user.bookstore.dto.BookListDTO;
import com.pro100user.bookstore.dto.UserEditDTO;
import com.pro100user.bookstore.model.Book;
import com.pro100user.bookstore.model.User;
import com.pro100user.bookstore.security.CustomUserDetails;

import java.util.List;

public interface UserService extends BasicService<User, Long> {

    User findByEmail(String email);
    List<BookListDTO> getWishList(String email);
    BookListDTO toggleWishList(String email, Long id);
    User editUser(CustomUserDetails currentUser, UserEditDTO userDTO);
}
