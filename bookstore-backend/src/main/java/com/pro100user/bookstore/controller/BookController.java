package com.pro100user.bookstore.controller;

import com.pro100user.bookstore.dto.BookCreateDTO;
import com.pro100user.bookstore.dto.BookDetailsDTO;
import com.pro100user.bookstore.dto.BookListDTO;
import com.pro100user.bookstore.dto.CategoryDTO;
import com.pro100user.bookstore.mapper.BookMapper;
import com.pro100user.bookstore.model.enums.Language;
import com.pro100user.bookstore.model.enums.Type;
import com.pro100user.bookstore.service.AuthorService;
import com.pro100user.bookstore.service.BookService;
import com.pro100user.bookstore.service.CategoryService;
import com.pro100user.bookstore.service.TranslatorService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping("books")
@RequiredArgsConstructor
public class BookController {

    private final BookService bookService;
    private final AuthorService authorService;
    private final CategoryService categoryService;
    private final TranslatorService translatorService;

    @GetMapping
    public ResponseEntity<List<BookListDTO>> books(@RequestParam int page,
                                                   @RequestParam int size) {
        return new ResponseEntity<>(bookService.getPageBooks(page, size), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<BookListDTO>> searchBooks(@RequestParam int page,
                                                         @RequestParam int size,
                                                         @RequestParam String search) {
        return new ResponseEntity<>(bookService.searchBooks(page, size, search), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<BookDetailsDTO> details(@PathVariable("id") Long id) {
        return new ResponseEntity<>(bookService.readById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<BookListDTO> create(@RequestBody BookCreateDTO dto) {
        return new ResponseEntity<>(bookService.create(dto), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<BookListDTO> update(@RequestBody BookCreateDTO dto) {
        return new ResponseEntity<>(bookService.update(dto), HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<BookDetailsDTO> delete(@PathVariable("id") Long id) {
        return new ResponseEntity<>(bookService.delete(id), HttpStatus.OK);
    }

    @GetMapping("categories")
    public ResponseEntity<Map<String, List<Object>>> categories() {
        Map<String, List<Object>> map = new HashMap<>();
        map.put("authors", Collections.singletonList(authorService.getAll()));
        map.put("categories", Collections.singletonList(categoryService.getAll()));
        map.put("translators", Collections.singletonList(translatorService.getAll()));
        map.put("languages", Arrays.stream(Language.values())
                .map(type -> type.name())
                .collect(Collectors.toList()));
        map.put("types", Arrays.stream(Type.values())
                .map(type -> type.name())
                .collect(Collectors.toList()));
        return new ResponseEntity<>(map, HttpStatus.OK);
    }
}
