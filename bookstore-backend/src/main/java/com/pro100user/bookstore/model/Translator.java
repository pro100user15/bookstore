package com.pro100user.bookstore.model;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "translators")
public class Translator implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    private Long id;

    @NotNull
    @Size(min = 2, max = 64, message = "Name must be between 2 and 64 characters long")
    @Column(length = 64, nullable = false)
    @NotEmpty(message = "Name cannot be empty")
    private String name;

    @NotNull
    @Size(min = 2, max = 64, message = "Surname must be between 2 and 64 characters long")
    @Column(length = 64, nullable = false)
    @NotEmpty(message = "Surname cannot be empty")
    private String surname;


    @OneToMany(mappedBy = "translator")
    private Set<Book> books;
}