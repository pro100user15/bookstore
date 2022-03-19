package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.model.PeriodLiterature;
import com.pro100user.bookstore.repository.PeriodLiteratureRepository;
import com.pro100user.bookstore.service.PeriodLiteratureService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class PeriodLiteratureServiceImpl implements PeriodLiteratureService {

    private final PeriodLiteratureRepository periodLiteratureRepository;

    public PeriodLiteratureServiceImpl(PeriodLiteratureRepository periodLiteratureRepository) {
        this.periodLiteratureRepository = periodLiteratureRepository;
    }

    @Override
    public PeriodLiterature create(PeriodLiterature object) {
        return periodLiteratureRepository.create(object);
    }

    @Transactional(readOnly = true)
    @Override
    public PeriodLiterature readById(Long id) {
        return periodLiteratureRepository.readById(id);
    }

    @Override
    public PeriodLiterature update(PeriodLiterature object) {
        readById(object.getId());
        return periodLiteratureRepository.update(object);
    }

    @Override
    public PeriodLiterature delete(PeriodLiterature object) {
        return periodLiteratureRepository.delete(object);
    }

    @Transactional(readOnly = true)
    @Override
    public List<PeriodLiterature> getAll() {
        return periodLiteratureRepository.getAll();
    }
}
