package com.pro100user.bookstore.controller;

import com.pro100user.bookstore.dto.BookCreateDTO;
import com.pro100user.bookstore.dto.BookDetailsDTO;
import com.pro100user.bookstore.dto.BookListDTO;
import com.pro100user.bookstore.model.enums.Language;
import com.pro100user.bookstore.model.enums.Type;
import com.pro100user.bookstore.service.BookService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping("books")
@RequiredArgsConstructor
public class BookController {

    private final BookService bookService;

    @GetMapping
    public ResponseEntity<List<BookListDTO>> books(@RequestParam(defaultValue = "1") int page,
                                                   @RequestParam(defaultValue = "25") int size,
                                                   @RequestParam(required = false) String search) {
        return new ResponseEntity<>(bookService.getPageBooks(page, size), HttpStatus.OK);
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

    @GetMapping("count")
    public ResponseEntity<Map<String, Long>> getCount() {
        return new ResponseEntity<>(Map.of("count", bookService.getCount()), HttpStatus.OK);
    }

    @GetMapping("languages")
    public ResponseEntity<List<String>> languages() {
        return new ResponseEntity<>(Arrays.stream(Language.values())
                .map(type -> type.name())
                .collect(Collectors.toList()), HttpStatus.OK);
    }

    @GetMapping("types")
    public ResponseEntity<List<String>> types() {
        return new ResponseEntity<>(Arrays.stream(Type.values())
                .map(type -> type.name())
                .collect(Collectors.toList()), HttpStatus.OK);
    }
}
