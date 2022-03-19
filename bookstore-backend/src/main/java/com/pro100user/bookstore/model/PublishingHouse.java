package com.pro100user.bookstore.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "publishing_houses")
public class PublishingHouse implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    private Long id;

    @NotNull
    @Size(min = 1, max = 64, message = "Publishing house must be between 1 and 64 characters long")
    @Column(length = 64, nullable = false)
    @NotEmpty(message = "Publishing house cannot be empty")
    private String name;

    @OneToMany(mappedBy = "publishingHouse")
    private List<Book> books;
}
