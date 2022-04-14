package com.pro100user.bookstore.model;


import com.pro100user.bookstore.model.enums.Language;
import com.pro100user.bookstore.model.enums.Type;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "books")
public class Book implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min = 2, max = 64, message = "Name must be between 2 and 64 characters long")
    @Column(length = 64, nullable = false)
    @NotEmpty(message = "Name cannot be empty")
    private String name;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "author_books",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "author_id")
    )
    private Set<Author> authors;

    @NotNull
    @Column(nullable = false)
    @Min(value = 0, message = "Price cannot be less than 0")
    @NotEmpty(message = "Price cannot be empty")
    private double price;

    private String image;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Category.class)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Publishing.class)
    @JoinColumn(name = "publishing_id", nullable = false)
    private Publishing publishing;

    private String bookSeries;

    @NotNull
    @Column(nullable = false)
    @Min(value = 0, message = "Amount cannot be less than 0")
    @NotEmpty(message = "Amount cannot be empty")
    private int amount;

    @NotNull
    @Column(length = 32, nullable = false)
    @Enumerated(EnumType.STRING)
    @NotEmpty(message = "Language cannot be empty")
    private Language language;

    @NotNull
    @Column(nullable = false)
    @NotEmpty(message = "Publication year cannot be empty")
    private int yearPublication;

    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Translator.class)
    @JoinColumn(name = "translator_id")
    private Translator translator;

    @NotNull
    @Column(nullable = false)
    @Min(value = 0, message = "Number of pages cannot be less than 0")
    @NotEmpty(message = "Number of pages cannot be empty")
    private int numberPages;

    @Min(value = 0, message = "Circulation of pages cannot be less than 0")
    private int circulation;

    @NotNull
    @Column(length = 32, nullable = false)
    @Enumerated(EnumType.STRING)
    @NotEmpty(message = "Type cannot be empty")
    private Type type;


    @ManyToMany(mappedBy = "books", fetch = FetchType.LAZY)
    private Set<Basket> baskets;

    @ManyToMany(mappedBy = "books", fetch = FetchType.LAZY)
    private Set<Order> orders;

    @ManyToMany(mappedBy = "wishList", fetch = FetchType.LAZY)
    private Set<User> users;
}
