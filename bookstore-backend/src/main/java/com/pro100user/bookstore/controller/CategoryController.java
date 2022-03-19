package com.pro100user.bookstore.controller;

import com.pro100user.bookstore.dto.CategoryDTO;
import com.pro100user.bookstore.dto.CategoryWithBooksDTO;
import com.pro100user.bookstore.model.model.CategoryModel;
import com.pro100user.bookstore.mapper.CategoryMapper;
import com.pro100user.bookstore.service.CategoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
//@CrossOrigin(origins = "http://localhost:3000")
//@CrossOrigin(origins = "*", maxAge = 5000)
//@CrossOrigin(origins = "*")
//@CrossOrigin(maxAge = 5000)
@CrossOrigin
@RestController
@RequestMapping("categories")
//@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CategoryController {

    private CategoryService categoryService;
    private CategoryMapper categoryMapper;

    public CategoryController(CategoryService categoryService,
                              CategoryMapper categoryMapper) {
        this.categoryService = categoryService;
        this.categoryMapper = categoryMapper;
    }

    @GetMapping
    public ResponseEntity<List<CategoryModel>> categories() {
        return new ResponseEntity<>(
                categoryService.CategoryWithBooksDTO(),
                //categoryMapper.toCategoryWithBooksDTOList(categoryService.getAll()),
                HttpStatus.OK
        );
    }
        /*ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        objectMapper.writeValue(outputStream, categories);
        return new String(outputStream.toByteArray());*/

    //return categories;

        /*StringWriter writer = new StringWriter();
        objectMapper.writeValue(writer, categories);
        return writer.toString();*/

        /*String json = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(categories);
        //As Array
        //Category[] array = mapper.readValue(json, Category[].class);
        //As List
        Set<Category> set = objectMapper.readValue(json, new TypeReference<Set<Category>>(){});
        //List<Category> myObjects = Arrays.asList(objectMapper.readValue(json, Category[].class))

        System.out.println(set);

        //return new ResponseEntity<>();//new ResponseEntity<>(HttpStatus.OK, categories);
        return json;
    }*/

    @GetMapping("{id}")
    public ResponseEntity<CategoryWithBooksDTO> details(@PathVariable("id") Long id) {
        return new ResponseEntity<>(
                categoryMapper.toCategoryWithBooksDTO(categoryService.readById(id)),
                HttpStatus.OK
        );
    }

    @PostMapping
    public ResponseEntity<CategoryDTO> create(@RequestBody CategoryDTO categoryDTO) {
        return new ResponseEntity<>(
                categoryMapper.toCategoryDTO(categoryService.create(categoryMapper.toCategory(categoryDTO))),
                HttpStatus.OK
        );
    }

    @PutMapping
    public ResponseEntity<CategoryDTO> update(@RequestBody CategoryDTO categoryDTO) {
        return new ResponseEntity<>(
                categoryMapper.toCategoryDTO(categoryService.update(categoryMapper.toCategory(categoryDTO))),
                HttpStatus.OK
        );
    }

    @DeleteMapping("{id}")
    public ResponseEntity<CategoryDTO> delete(@PathVariable("id") Long id) {
        return new ResponseEntity<>(
                categoryMapper.toCategoryDTO(categoryService.delete(categoryService.readById(id))),
                HttpStatus.OK
        );
    }
}
