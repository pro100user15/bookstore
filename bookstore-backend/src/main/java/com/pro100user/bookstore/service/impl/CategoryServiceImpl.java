package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.model.Book;
import com.pro100user.bookstore.model.Category;
import com.pro100user.bookstore.model.model.CategoryModel;
import com.pro100user.bookstore.repository.CategoryRepository;
import com.pro100user.bookstore.service.CategoryService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

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
        readById(object.getId());
        return categoryRepository.delete(object);
    }

    @Transactional(readOnly = true)
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
    @Override
    public List<Book> getListBookByCategoryName(String name) {
        return categoryRepository.getListBookByCategoryName(name);
    }

    @Transactional(readOnly = true)
    @Override
    public List<CategoryModel> CategoryWithBooksDTO() {
        return categoryRepository.getCategoryModels();
    }
}
