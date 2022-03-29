package com.pro100user.bookstore.mapper;

import com.pro100user.bookstore.dto.UserAuthenticationDTO;
import com.pro100user.bookstore.dto.UserDTO;
import com.pro100user.bookstore.model.User;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {

    User ToUser(UserAuthenticationDTO userDTO);
    UserAuthenticationDTO ToUserAuthenticationDTO(User user);

    User ToUser(UserDTO userDTO);
    UserDTO ToUserDTO(User user);
    List<UserDTO> ToUserDTOList(List<User> users);
}
