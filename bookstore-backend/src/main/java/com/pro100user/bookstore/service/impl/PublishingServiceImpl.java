package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.model.Publishing;
import com.pro100user.bookstore.repository.PublishingRepository;
import com.pro100user.bookstore.service.PublishingService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class PublishingServiceImpl implements PublishingService {

    private final PublishingRepository publishingRepository;

    public PublishingServiceImpl(PublishingRepository publishingRepository) {
        this.publishingRepository = publishingRepository;
    }

    @Override
    public Publishing create(Publishing object) {
        return publishingRepository.create(object);
    }

    @Transactional(readOnly = true)
    @Override
    public Publishing readById(Long id) {
        return publishingRepository.readById(id);
    }

    @Override
    public Publishing update(Publishing object) {
        readById(object.getId());
        return publishingRepository.update(object);
    }

    @Override
    public Publishing delete(Publishing object) {
        return publishingRepository.delete(object);
    }

    @Transactional(readOnly = true)
    @Override
    public List<Publishing> getAll() {
        return publishingRepository.getAll();
    }
}
