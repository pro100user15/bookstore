package com.pro100user.bookstore.dto;

import com.pro100user.bookstore.model.enums.Sex;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserEditDTO {
    private String id;
    private String name;
    private String surname;
    private String email;
    private String phone;
    private Sex sex;
    private String password;
    private String new_password;
}
