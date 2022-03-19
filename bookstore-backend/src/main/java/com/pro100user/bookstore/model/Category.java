package com.pro100user.bookstore.model;

import lombok.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.List;

//@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "categories")
public class Category implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min = 2, max = 32, message = "Category must be between 2 and 32 characters long")
    @Column(length = 32, nullable = false, unique = true)
    @NotEmpty(message = "Category cannot be empty")
    private String name;

    @OneToMany(mappedBy = "category")
    @Fetch(value = FetchMode.JOIN)
    private List<Book> books;
}
