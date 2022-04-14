package com.pro100user.bookstore.controller;

import com.pro100user.bookstore.annotation.CurrentUser;
import com.pro100user.bookstore.dto.BookListDTO;
import com.pro100user.bookstore.dto.UserDTO;
import com.pro100user.bookstore.dto.UserEditDTO;
import com.pro100user.bookstore.mapper.BookMapper;
import com.pro100user.bookstore.mapper.UserMapper;
import com.pro100user.bookstore.model.User;
import com.pro100user.bookstore.security.CustomUserDetails;
import com.pro100user.bookstore.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;
    private final BookMapper bookMapper;

    @GetMapping("/profile")
    public ResponseEntity<UserDTO> profile(@CurrentUser CustomUserDetails user) {
        return ResponseEntity.ok(userMapper.ToUserDTO(userService.findByEmail(user.getUsername())));
    }

    @PutMapping("/profile")
    public ResponseEntity<UserDTO> updateProfile(@CurrentUser CustomUserDetails currentUser,
                                                 @RequestBody UserEditDTO userDto) {
        return ResponseEntity.ok(userMapper.ToUserDTO(
                userService.editUser(currentUser, userDto)
        ));
    }

    @GetMapping("/wish-list")
    public ResponseEntity<List<BookListDTO>> wishList(@CurrentUser CustomUserDetails user) {
        return ResponseEntity.ok(userService.getWishList(user.getUsername()));
    }

    @PostMapping("/wish-list")
    public ResponseEntity<BookListDTO> wishList(@CurrentUser CustomUserDetails user,
                                                @RequestBody Long id) {
        return ResponseEntity.ok(userService.toggleWishList(user.getUsername(), id));
    }
}
