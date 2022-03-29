package com.pro100user.bookstore.controller;

import com.pro100user.bookstore.annotation.CurrentUser;
import com.pro100user.bookstore.dto.UserDTO;
import com.pro100user.bookstore.mapper.UserMapper;
import com.pro100user.bookstore.security.CustomUserDetails;
import com.pro100user.bookstore.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("user")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;

    @GetMapping("/profile")
    public ResponseEntity<UserDTO> profile(@CurrentUser CustomUserDetails user) {
        /*CustomUserDetails user = (CustomUserDetails) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();*/
        return ResponseEntity.ok(userMapper.ToUserDTO(userService.findByEmail(user.getUsername())));
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
        return ResponseEntity.ok(userMapper.ToUserDTO(userService.delete(userService.findByEmail(user.getUsername()))));
    }
}
