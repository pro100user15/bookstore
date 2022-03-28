package com.pro100user.bookstore.controller;

import com.pro100user.bookstore.dto.UserAuthenticationDTO;
import com.pro100user.bookstore.mapper.UserMapper;
import com.pro100user.bookstore.model.User;
import com.pro100user.bookstore.security.CustomUserDetails;
import com.pro100user.bookstore.security.jwt.JwtProvider;
import com.pro100user.bookstore.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class AuthenticationController {

    private final UserService userService;
    private final UserMapper userMapper;
    private final JwtProvider jwtProvider;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/registration")
    public ResponseEntity<UserAuthenticationDTO> registration(@RequestBody UserAuthenticationDTO userDTO) {
        User user = userMapper.ToUser(userDTO);
        user = userService.create(user);
        return ResponseEntity.ok(userMapper.ToUserAuthenticationDTO(user));
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
