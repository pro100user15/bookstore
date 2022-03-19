package com.pro100user.bookstore.model;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "status")
public class Status implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    private Long id;

    @NotNull
    @Size(min = 1, max = 64, message = "Status must be between 1 and 64 characters long")
    @Column(length = 64, nullable = false)
    @NotEmpty(message = "Status cannot be empty")
    private String name;

    @OneToMany(mappedBy = "status")
    private List<Order> orders;
}
