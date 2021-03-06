package com.pro100user.bookstore.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/")
public class MainController {

    public MainController() {
        System.out.println("======================================");
    }

    @GetMapping
    public String home() {
        return "Hello, pro100user!";
    }
}
