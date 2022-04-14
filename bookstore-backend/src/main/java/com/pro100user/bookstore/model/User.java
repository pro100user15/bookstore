package com.pro100user.bookstore.model;

import com.pro100user.bookstore.model.enums.Role;
import com.pro100user.bookstore.model.enums.Sex;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(min = 2, max = 64, message = "Name must be between 2 and 64 characters long")
    @Column(length = 64)
    @NotEmpty(message = "Name cannot be empty")
    private String name;

    @Size(min = 2, max = 64, message = "Surname must be between 2 and 64 characters long")
    @Column(length = 64)
    @NotEmpty(message = "Surname cannot be empty")
    private String surname;

    @NotNull
    @Email(message = "Email must match format")
    @Size(min = 3, max = 320, message = "Email must be between 3 and 320 characters long")
    @Column(unique = true, length = 320, nullable = false)
    @NotEmpty(message = "Email cannot be empty")
    private String email;

    @Column(unique = true, length = 20)
    @NotEmpty(message = "Phone cannot be empty")
    private String phone;

    @Column(length = 32, columnDefinition = "varchar(32) default 'NO'")
    @Enumerated(EnumType.STRING)
    @NotEmpty(message = "Sex cannot be empty")
    private Sex sex = Sex.NO;

    @NotNull
    @Size(min = 8, max = 64, message = "Password must be between 8 and 64 characters long")
    @Column(length = 64, nullable = false)
    @NotEmpty(message = "Password cannot be empty")
    private String password;

    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Address.class)
    @JoinColumn(name = "address_id")
    private Address address;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private boolean enabled = true;

    @ElementCollection(targetClass = Role.class, fetch = FetchType.EAGER)
    @CollectionTable(
            name = "users_roles",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id")
    )
    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private Set<Role> roles = new HashSet<>();


    @OneToOne(mappedBy = "user", fetch = FetchType.LAZY)
    private Basket basket;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private Set<Order> orders;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "wish_list",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "book_id")
    )
    private Set<Book> wishList;
}


