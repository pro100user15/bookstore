package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.dto.CategoryDTO;
import com.pro100user.bookstore.dto.CategoryWithBooksDTO;
import com.pro100user.bookstore.mapper.CategoryMapper;
import com.pro100user.bookstore.model.Category;
import com.pro100user.bookstore.repository.CategoryRepository;
import com.pro100user.bookstore.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;

    @Transactional
    @Override
    public CategoryDTO create(CategoryDTO category) {
        if(categoryRepository.findByName(category.getName()) != null)
            throw new IllegalArgumentException("This category name is already taken");
        return categoryMapper.toCategoryDTO(
                categoryRepository.create(
                        categoryMapper.toCategory(category)
                ));
    }

    @Override
    public CategoryWithBooksDTO readById(Long id) {
        return new CategoryWithBooksDTO(
                categoryRepository.readById(id),
                categoryRepository.getBookSizeByCategoryId(id)
        );
    }

    @Transactional
    @Override
    public CategoryWithBooksDTO update(CategoryWithBooksDTO categoryDto) {
        Category category = categoryRepository.findByName(categoryDto.getName());
        if(category != null && category.getId() != categoryDto.getId())
            throw new IllegalArgumentException("This category name is already taken");
        return new CategoryWithBooksDTO(
                categoryRepository.update(
                        categoryMapper.toCategory(categoryDto)
                ),
                categoryRepository.getBookSizeByCategoryId(categoryDto.getId())
        );
    }

    @Transactional
    @Override
    public CategoryDTO delete(Long id) {
        Category category = categoryRepository.readById(id);
        return categoryMapper.toCategoryDTO(
                categoryRepository.delete(category)
        );
    }

    @Override
    public List<Category> getAll() {
        return categoryRepository.getAll();
    }

    @Override
    public Category findByName(String name) {
        return categoryRepository.findByName(name);
    }

    @Override
    public List<CategoryWithBooksDTO> getCategoriesWithCountBooks() {
        return getAll().stream().map(category ->
                new CategoryWithBooksDTO(category,
                        categoryRepository.getBookSizeByCategoryId(category.getId())))
                .collect(Collectors.toList());
    }
}
