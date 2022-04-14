package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.model.Translator;
import com.pro100user.bookstore.repository.TranslatorRepository;
import com.pro100user.bookstore.service.TranslatorService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TranslatorServiceImpl implements TranslatorService {

    private final TranslatorRepository translatorRepository;

    @Transactional
    @Override
    public Translator create(Translator object) {
        return translatorRepository.create(object);
    }

    @Override
    public Translator readById(Long id) {
        return translatorRepository.readById(id);
    }

    @Transactional
    @Override
    public Translator update(Translator object) {
        return translatorRepository.update(object);
    }

    @Transactional
    @Override
    public Translator delete(Long id) {
        Translator translator = readById(id);
        return translatorRepository.delete(translator);
    }

    @Override
    public List<Translator> getAll() {
        return translatorRepository.getAll();
    }
}
