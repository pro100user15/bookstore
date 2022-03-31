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
@Transactional
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;

    @Override
    public CategoryWithBooksDTO create(CategoryDTO category) {
        return categoryMapper.toCategoryWithBooksDTO(
                categoryRepository.create(
                        categoryMapper.toCategory(category)
                ));
    }

    @Transactional(readOnly = true)
    @Override
    public CategoryWithBooksDTO readById(Long id) {
        return categoryMapper.toCategoryWithBooksDTO(
                categoryRepository.readById(id)
        );
    }

    @Override
    public CategoryWithBooksDTO update(CategoryDTO category) {
        return categoryMapper.toCategoryWithBooksDTO(
                categoryRepository.update(
                        categoryMapper.toCategory(category)
                ));
    }

    @Override
    public CategoryWithBooksDTO delete(Long id) {
        Category category = categoryRepository.readById(id);
        return categoryMapper.toCategoryWithBooksDTO(
                categoryRepository.delete(category)
        );
    }

    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    @Override
    public List<Category> getAll() {
        return categoryRepository.getAll();
    }

    @Transactional(readOnly = true)
    @Override
    public Category findByName(String name) {
        return categoryRepository.findByName(name);
    }

    @Transactional(readOnly = true)
    @Override
    public List<CategoryWithBooksDTO> getCategoriesWithCountBooks() {
        return getAll().stream().map(category ->
                new CategoryWithBooksDTO(category,
                        categoryRepository.getBookSizeByCategoryName(category.getId())))
                .collect(Collectors.toList());
    }
}
