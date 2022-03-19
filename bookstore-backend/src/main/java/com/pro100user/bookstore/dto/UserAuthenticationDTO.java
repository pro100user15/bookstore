package com.pro100user.bookstore.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserAuthenticationDTO {
    private String email;
    private String password;
}
