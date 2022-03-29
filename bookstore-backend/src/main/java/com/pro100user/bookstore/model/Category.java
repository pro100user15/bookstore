package com.pro100user.bookstore.model;

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
@Table(name = "categories")
public class Category implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min = 2, max = 64, message = "Category must be between 2 and 64 characters long")
    @Column(length = 64, nullable = false, unique = true)
    @NotEmpty(message = "Category cannot be empty")
    private String name;


    @OneToMany(mappedBy = "category")
    private Set<Book> books;
}
