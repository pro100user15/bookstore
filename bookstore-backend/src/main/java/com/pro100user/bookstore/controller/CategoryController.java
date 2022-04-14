package com.pro100user.bookstore.controller;

import com.pro100user.bookstore.dto.CategoryDTO;
import com.pro100user.bookstore.dto.CategoryWithBooksDTO;
import com.pro100user.bookstore.service.CategoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("categories")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping
    public ResponseEntity<List<CategoryWithBooksDTO>> categories() {
        return new ResponseEntity<>(categoryService.getCategoriesWithCountBooks(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<CategoryWithBooksDTO> details(@PathVariable("id") Long id) {
        return new ResponseEntity<>(categoryService.readById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<CategoryDTO> create(@RequestBody CategoryDTO categoryDTO) {
        return new ResponseEntity<>(categoryService.create(categoryDTO), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<CategoryWithBooksDTO> update(@RequestBody CategoryWithBooksDTO categoryDTO) {
        return new ResponseEntity<>(categoryService.update(categoryDTO), HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<CategoryDTO> delete(@PathVariable("id") Long id) {
        return new ResponseEntity<>(categoryService.delete(id), HttpStatus.OK);
    }
}
