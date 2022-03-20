package com.pro100user.bookstore.controller;

import com.pro100user.bookstore.dto.UserDTO;
import com.pro100user.bookstore.mapper.UserMapper;
import com.pro100user.bookstore.security.CustomUserDetails;
import com.pro100user.bookstore.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@Slf4j
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("user")
public class UserController {

    private UserService userService;
    private UserMapper userMapper;

    public UserController(UserService userService,
                          UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }

    @GetMapping("/profile")
    public ResponseEntity<UserDTO> profile() {
        CustomUserDetails user = (CustomUserDetails) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();
        return ResponseEntity.ok(userMapper.ToUserDTO(userService.findByLogin(user.getUsername())));
    }

    @PutMapping("/profile")
    public ResponseEntity<UserDTO> updateProfile(@RequestBody UserDTO user) {

        return ResponseEntity.ok(userMapper.ToUserDTO(
                userService.update(userMapper.ToUser(user))
        ));
    }

    @DeleteMapping("/profile")
    public ResponseEntity<UserDTO> delete() {
        CustomUserDetails user = (CustomUserDetails) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();
        return ResponseEntity.ok(userMapper.ToUserDTO(userService.delete(userService.findByLogin(user.getUsername()))));
    }
}
