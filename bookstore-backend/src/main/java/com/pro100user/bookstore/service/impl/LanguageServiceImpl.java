package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.model.Language;
import com.pro100user.bookstore.repository.LanguageRepository;
import com.pro100user.bookstore.service.LanguageService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class LanguageServiceImpl implements LanguageService {

    private final LanguageRepository languageRepository;

    public LanguageServiceImpl(LanguageRepository languageRepository) {
        this.languageRepository = languageRepository;
    }

    @Override
    public Language create(Language object) {
        return languageRepository.create(object);
    }

    @Transactional(readOnly = true)
    @Override
    public Language readById(Long id) {
        return languageRepository.readById(id);
    }

    @Override
    public Language update(Language object) {
        readById(object.getId());
        return languageRepository.update(object);
    }

    @Override
    public Language delete(Language object) {
        return languageRepository.delete(object);
    }

    @Transactional(readOnly = true)
    @Override
    public List<Language> getAll() {
        return languageRepository.getAll();
    }
}
