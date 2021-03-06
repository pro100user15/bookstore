package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.model.Translator;
import com.pro100user.bookstore.repository.TranslatorRepository;
import com.pro100user.bookstore.service.TranslatorService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class TranslatorServiceImpl implements TranslatorService {

    private final TranslatorRepository translatorRepository;

    public TranslatorServiceImpl(TranslatorRepository translatorRepository) {
        this.translatorRepository = translatorRepository;
    }

    @Override
    public Translator create(Translator object) {
        return translatorRepository.create(object);
    }

    @Transactional(readOnly = true)
    @Override
    public Translator readById(Long id) {
        return translatorRepository.readById(id);
    }

    @Override
    public Translator update(Translator object) {
        readById(object.getId());
        return translatorRepository.update(object);
    }

    @Override
    public Translator delete(Translator object) {
        return translatorRepository.delete(object);
    }

    @Transactional(readOnly = true)
    @Override
    public List<Translator> getAll() {
        return translatorRepository.getAll();
    }
}
