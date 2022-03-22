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
@Table(name = "publishing")
public class Publishing implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min = 1, max = 64, message = "Publishing house must be between 1 and 64 characters long")
    @Column(length = 64, nullable = false)
    @NotEmpty(message = "Publishing house cannot be empty")
    private String publishing_name;

    @NotNull
    @OneToOne(targetEntity = Address.class)
    @JoinColumn(name = "address_id")
    private Address address;

    @OneToMany(mappedBy = "publishing")
    private List<Book> books;
}
