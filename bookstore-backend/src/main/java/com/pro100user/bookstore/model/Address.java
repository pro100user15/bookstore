package com.pro100user.bookstore.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "addresses")
public class Address implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(nullable = false)
    @NotEmpty(message = "Country cannot be empty")
    private String country;

    @NotNull
    @Column(nullable = false)
    @NotEmpty(message = "City cannot be empty")
    private String city;

    @NotNull
    @Column(nullable = false)
    @NotEmpty(message = "Street cannot be empty")
    private String street;

    @NotNull
    @Column(nullable = false)
    @NotEmpty(message = "Number cannot be empty")
    private String number;


    @OneToOne(mappedBy = "address", fetch = FetchType.LAZY)
    private Publishing publishing;

    @OneToMany(mappedBy = "address", fetch = FetchType.LAZY)
    private Set<User> users;
}
