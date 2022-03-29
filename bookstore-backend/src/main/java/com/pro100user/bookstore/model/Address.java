package com.pro100user.bookstore.model;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "addresses")
public class Address implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min = 1, max = 64, message = "Country must be between 1 and 64 characters long")
    @Column(length = 64, nullable = false)
    @NotEmpty(message = "Country cannot be empty")
    public String country;

    @NotNull
    @Size(min = 1, max = 64, message = "City must be between 1 and 64 characters long")
    @Column(length = 64, nullable = false)
    @NotEmpty(message = "City cannot be empty")
    public String city;

    @NotNull
    @Size(min = 1, max = 64, message = "Street must be between 1 and 64 characters long")
    @Column(length = 64, nullable = false)
    @NotEmpty(message = "Street cannot be empty")
    public String street;

    @NotNull
    @Size(min = 1, max = 10, message = "Number must be between 1 and 10 characters long")
    @Column(length = 10, nullable = false)
    @NotEmpty(message = "Number cannot be empty")
    public String number;

    @OneToOne(mappedBy = "address")
    Publishing publishing;

    @OneToMany(mappedBy = "address")
    private List<User> users;
}
