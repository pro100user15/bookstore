package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.dto.CategoryWithBooksDTO;
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
@Transactional(propagation = Propagation.REQUIRES_NEW)
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    @Override
    public Category create(Category object) {
        return categoryRepository.create(object);
    }

    @Transactional(readOnly = true)
    @Override
    public Category readById(Long id) {
        return categoryRepository.readById(id);
    }

    @Override
    public Category update(Category object) {
        readById(object.getId());
        return categoryRepository.update(object);
    }

    @Override
    public Category delete(Category object) {
        return categoryRepository.delete(object);
    }

    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    @Override
    public List<Category> getAll() {
        return categoryRepository.getAll();
    }

    @Transactional(readOnly = true)
    @Override
    public List<Category> findByName(String name) {
        return categoryRepository.findByName(name);
    }

    @Transactional(readOnly = true)
    public List<CategoryWithBooksDTO> getCategoriesWithCountBooks() {
        return getAll().stream().map(category ->
                new CategoryWithBooksDTO(category,
                        categoryRepository.getBookSizeByCategoryName(category.getId())))
                .collect(Collectors.toList());
    }
}
