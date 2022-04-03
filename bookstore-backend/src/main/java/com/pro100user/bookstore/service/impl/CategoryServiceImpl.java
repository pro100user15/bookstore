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
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;

    @Transactional
    @Override
    public CategoryDTO create(CategoryDTO category) {
        return categoryMapper.toCategoryDTO(
                categoryRepository.create(
                        categoryMapper.toCategory(category)
                ));
    }

    @Override
    public CategoryDTO readById(Long id) {
        return categoryMapper.toCategoryDTO(
                categoryRepository.readById(id)
        );
    }

    @Transactional
    @Override
    public CategoryDTO update(CategoryDTO category) {
        return categoryMapper.toCategoryDTO(
                categoryRepository.update(
                        categoryMapper.toCategory(category)
                ));
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
    public List<CategoryDTO> getAll() {
        return categoryMapper.toCategoryDTOList(
                categoryRepository.getAll()
        );
    }

    @Override
    public CategoryDTO findByName(String name) {
        return categoryMapper.toCategoryDTO(
                categoryRepository.findByName(name)
        );
    }

    @Override
    public List<CategoryWithBooksDTO> getCategoriesWithCountBooks() {
        return getAll().stream().map(category ->
                        new CategoryWithBooksDTO(category,
                                categoryRepository.getBookSizeByCategoryName(category.getId())))
                .collect(Collectors.toList());
    }
}
