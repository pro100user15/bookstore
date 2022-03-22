package com.pro100user.bookstore.model;

import com.pro100user.bookstore.model.enums.Status;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "orders")
public class Order implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    private Long id;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = User.class)
    @JoinColumn(name = "user_id")
    private User user;

    @NotNull
    @Column(length = 32, nullable = false)
    @Enumerated(EnumType.STRING)
    @NotEmpty(message = "Status cannot be empty")
    private Status status;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "order_books",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "book_id")
    )
    private List<Book> books;

    @NotNull
    @Column(nullable = false)
    @Min(value = 0, message = "Price cannot be less than 0")
    @NotEmpty(message = "Price cannot be empty")
    private double totalPrice;

    @NotNull
    private LocalDate date;
}
