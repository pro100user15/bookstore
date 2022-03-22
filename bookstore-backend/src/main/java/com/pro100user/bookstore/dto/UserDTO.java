package com.pro100user.bookstore.dto;

import com.pro100user.bookstore.model.enums.Role;
import com.pro100user.bookstore.model.enums.Sex;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class UserDTO {
    private String id;
    private String name;
    private String surname;
    private String email;
    private String phone;
    private Sex sex;
    private String password;
}
