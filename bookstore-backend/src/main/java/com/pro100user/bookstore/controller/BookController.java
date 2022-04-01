package com.pro100user.bookstore.controller;

import com.pro100user.bookstore.dto.BookCreateDTO;
import com.pro100user.bookstore.dto.BookDetailsDTO;
import com.pro100user.bookstore.dto.BookListDTO;
import com.pro100user.bookstore.dto.CategoryDTO;
import com.pro100user.bookstore.mapper.BookMapper;
import com.pro100user.bookstore.model.enums.Language;
import com.pro100user.bookstore.service.BookService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Slf4j
@RestController
@RequestMapping("books")
@RequiredArgsConstructor
public class BookController {

    private final BookService bookService;

    @GetMapping
    public ResponseEntity<List<BookListDTO>> books() {
        return new ResponseEntity<>(bookService.getAll(), HttpStatus.OK);
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
}
