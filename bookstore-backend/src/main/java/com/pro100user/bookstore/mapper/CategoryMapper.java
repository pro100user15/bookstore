package com.pro100user.bookstore.mapper;

import com.pro100user.bookstore.dto.CategoryDTO;
import com.pro100user.bookstore.dto.CategoryWithBooksDTO;
import com.pro100user.bookstore.model.Book;
import com.pro100user.bookstore.model.Category;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.List;

@Mapper
public interface CategoryMapper {


    Category toCategory(CategoryDTO categoryDTO);

    CategoryDTO toCategoryDTO(Category category);

    List<CategoryDTO> toCategoryDTOList(List<Category> categories);

    CategoryWithBooksDTO toCategoryWithBooksDTO(Category category);

    List<CategoryWithBooksDTO> toCategoryWithBooksDTOList(List<Category> categories);
}
