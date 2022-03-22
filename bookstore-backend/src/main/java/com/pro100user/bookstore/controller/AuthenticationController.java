package com.pro100user.bookstore.controller;

import com.pro100user.bookstore.dto.UserAuthenticationDTO;
import com.pro100user.bookstore.dto.UserDTO;
import com.pro100user.bookstore.exception.NotFoundException;
import com.pro100user.bookstore.mapper.UserMapper;
import com.pro100user.bookstore.model.User;
import com.pro100user.bookstore.security.CustomUserDetails;
import com.pro100user.bookstore.security.jwt.JwtProvider;
import com.pro100user.bookstore.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
//@CrossOrigin(maxAge = 5000)
@RestController
public class AuthenticationController {

    private final UserService userService;
    private final UserMapper userMapper;
    private final JwtProvider jwtProvider;
    private final AuthenticationManager authenticationManager;

    public AuthenticationController(UserService userService,
                                    UserMapper userMapper,
                                    JwtProvider jwtProvider,
                                    AuthenticationManager authenticationManager) {
        this.userService = userService;
        this.userMapper = userMapper;
        this.jwtProvider = jwtProvider;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/registration")
    public ResponseEntity<UserDTO> registration(@RequestBody UserDTO userDTO) {
        User user = userMapper.ToUser(userDTO);
        user = userService.create(user);
        return ResponseEntity.ok(userMapper.ToUserDTO(user));
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserAuthenticationDTO authenticationUser) {
        CustomUserDetails user = (CustomUserDetails) authenticationManager.
                authenticate(new UsernamePasswordAuthenticationToken(authenticationUser.getEmail(),
                        authenticationUser.getPassword()))
                .getPrincipal();

        String token = jwtProvider.generateToken(user);
        return ResponseEntity.ok(token);
    }
}
