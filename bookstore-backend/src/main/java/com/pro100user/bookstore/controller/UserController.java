package com.pro100user.bookstore.controller;

import com.pro100user.bookstore.annotation.CurrentUser;
import com.pro100user.bookstore.dto.UserDTO;
import com.pro100user.bookstore.mapper.UserMapper;
import com.pro100user.bookstore.security.CustomUserDetails;
import com.pro100user.bookstore.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    //I'll move the maps
    //TODO: move the mapper to the service level
    private final UserMapper userMapper;

    @GetMapping("/profile")
    public ResponseEntity<UserDTO> profile(@CurrentUser CustomUserDetails user) {
      return ResponseEntity.ok(userMapper.ToUserDTO(userService.findByEmail(user.getUsername())));
    }

    @PutMapping("/profile")
    public ResponseEntity<UserDTO> updateProfile(@RequestBody UserDTO user) {
        return ResponseEntity.ok(userMapper.ToUserDTO(
                userService.update(userMapper.ToUser(user))
        ));
    }
}
