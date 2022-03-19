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
@Table(name = "literature_periods")
public class PeriodLiterature implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    private Long id;

    @NotNull
    @Size(min = 2, max = 64, message = "Period must be between 2 and 64 characters long")
    @Column(length = 64, nullable = false)
    @NotEmpty(message = "Period cannot be empty")
    private String period;

    @OneToMany(mappedBy = "periodLiterature")
    private List<Book> books;
}