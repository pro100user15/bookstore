package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.model.Publishing;
import com.pro100user.bookstore.repository.PublishingRepository;
import com.pro100user.bookstore.service.PublishingService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PublishingServiceImpl implements PublishingService {

    private final PublishingRepository publishingRepository;

    @Transactional
    @Override
    public Publishing create(Publishing object) {
        return publishingRepository.create(object);
    }

    @Override
    public Publishing readById(Long id) {
        return publishingRepository.readById(id);
    }

    @Transactional
    @Override
    public Publishing update(Publishing object) {
        return publishingRepository.update(object);
    }

    @Transactional
    @Override
    public Publishing delete(Long id) {
        Publishing publishing = readById(id);
        return publishingRepository.delete(publishing);
    }

    @Override
    public List<Publishing> getAll() {
        return publishingRepository.getAll();
    }
}
