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
@Transactional
@RequiredArgsConstructor
public class PublishingServiceImpl implements PublishingService {

    private final PublishingRepository publishingRepository;

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
        return publishingRepository.update(object);
    }

    @Override
    public Publishing delete(Long id) {
        Publishing publishing = readById(id);
        return publishingRepository.delete(publishing);
    }

    @Transactional(readOnly = true)
    @Override
    public List<Publishing> getAll() {
        return publishingRepository.getAll();
    }
}
