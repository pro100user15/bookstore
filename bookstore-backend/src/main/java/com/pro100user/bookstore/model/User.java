package com.pro100user.bookstore.model;

import com.pro100user.bookstore.model.enums.Role;
import com.pro100user.bookstore.model.enums.Sex;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "users")
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    private Long id;

    @NotNull
    @Size(min = 2, max = 35, message = "Name must be between 2 and 35 characters long")
    @Column(length = 35, nullable = false)
    @NotEmpty(message = "Name cannot be empty")
    private String name;

    @NotNull
    @Size(min = 2, max = 35, message = "Surname must be between 2 and 35 characters long")
    @Column(length = 35, nullable = false)
    @NotEmpty(message = "Surname cannot be empty")
    private String surname;

    @NotNull
    @Email(message = "Email must match format")
    @Size(min = 5, max = 40, message = "Email must be between 5 and 40 characters long")
    @Column(unique = true, length = 40, nullable = false)
    @NotEmpty(message = "Email cannot be empty")
    private String email;

    @NotNull
    @Pattern(regexp = "^(\\+?380)(\\d{9})$", message = "Phone must match format - +380972553991")
    @Column(unique = true, length = 13, nullable = false)
    @NotEmpty(message = "Phone cannot be empty")
    private String phone;

    @NotNull
    @Column(length = 32, nullable = false, columnDefinition = "varchar(32) default 'NO'")
    @Enumerated(EnumType.STRING)
    @NotEmpty(message = "Sex cannot be empty")
    private Sex sex = Sex.NO;

    @NotNull
    @Size(min = 8, max = 64, message = "Password must be between 8 and 64 characters long")
    @Column(length = 64, nullable = false)
    @NotEmpty(message = "Password cannot be empty")
    private String password;

    @NotNull
    @Size(min = 4, max = 64, message = "Address must be between 4 and 64 characters long")
    @NotEmpty(message = "Address cannot be empty")
    private String address;

    @NotNull
    private LocalDateTime createdAt = LocalDateTime.now();

    //@ElementCollection(targetClass = Role.class, fetch = FetchType.EAGER)
    /*@CollectionTable(
           name = "user_roles"//,
            //joinColumns = @JoinColumn(name = "user_id")
    )*/
    //@Column(name = "role", length = 32, nullable = false)
    //@Enumerated(EnumType.STRING)

    /*@ElementCollection(targetClass = Role.class, fetch = FetchType.EAGER)
    @CollectionTable(
            name = "users_roles",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id")
    )
    @Enumerated(EnumType.STRING)
    @Column(name = "role")*/

    @NotNull
    @Column(length = 32, nullable = false, columnDefinition = "varchar(32) default 'ROLE_USER'")
    @Enumerated(EnumType.STRING)
    @NotEmpty(message = "Role cannot be empty")
    private Role role = Role.ROLE_USER;

    @OneToOne(mappedBy = "user", fetch = FetchType.LAZY)
    private Basket basket;

    @OneToMany(mappedBy = "user")
    private List<Order> orders;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "wish_list",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "book_id")
    )
    private List<Book> wishList;
}


