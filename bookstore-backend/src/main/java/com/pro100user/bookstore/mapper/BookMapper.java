package com.pro100user.bookstore.mapper;

import com.pro100user.bookstore.dto.BookCreateDTO;
import com.pro100user.bookstore.dto.BookDTO;
import com.pro100user.bookstore.dto.BookDetailsDTO;
import com.pro100user.bookstore.model.Author;
import com.pro100user.bookstore.model.Book;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.Named;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Mapper
public interface BookMapper {

    @Named("authorsIdToAuthors")
    default Set<Author> authorsIdToAuthors(Set<Long> list) {
        return list.stream().
                map(aLong -> {
                    Author author = new Author();
                    author.setId(aLong);
                    return author;
                })
                .collect(Collectors.toSet());
    }

    @Mappings({
            @Mapping(source = "authorsId", target = "authors", qualifiedByName = "authorsIdToAuthors"),
            @Mapping(source = "categoryId", target = "category.id"),
            @Mapping(source = "publishingId", target = "publishing.id"),
            @Mapping(source = "translatorId", target = "translator.id")
    })
    Book toBook(BookCreateDTO dto);

    BookDetailsDTO toBookDetailsDTO(Book book);

    List<BookDTO> toBookListDTO(List<Book> books);
    BookDTO toBookListDTO(Book book);
}
