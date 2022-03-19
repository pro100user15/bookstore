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
@Table(name = "literature_worlds")
public class WorldLiterature implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    private Long id;

    @NotNull
    @Size(min = 2, max = 35, message = "World must be between 2 and 35 characters long")
    @Column(length = 35, nullable = false)
    @NotEmpty(message = "World cannot be empty")
    private String world;

    @OneToMany(mappedBy = "worldLiterature")
    private List<Book> books;
}
