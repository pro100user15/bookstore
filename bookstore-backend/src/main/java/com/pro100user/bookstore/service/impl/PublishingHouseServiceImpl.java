package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.model.PublishingHouse;
import com.pro100user.bookstore.repository.PublishingHouseRepository;
import com.pro100user.bookstore.service.PublishingHouseService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class PublishingHouseServiceImpl implements PublishingHouseService {

    private final PublishingHouseRepository publishingHouseRepository;

    public PublishingHouseServiceImpl(PublishingHouseRepository publishingHouseRepository) {
        this.publishingHouseRepository = publishingHouseRepository;
    }

    @Override
    public PublishingHouse create(PublishingHouse object) {
        return publishingHouseRepository.create(object);
    }

    @Transactional(readOnly = true)
    @Override
    public PublishingHouse readById(Long id) {
        return publishingHouseRepository.readById(id);
    }

    @Override
    public PublishingHouse update(PublishingHouse object) {
        readById(object.getId());
        return publishingHouseRepository.update(object);
    }

    @Override
    public PublishingHouse delete(PublishingHouse object) {
        return publishingHouseRepository.delete(object);
    }

    @Transactional(readOnly = true)
    @Override
    public List<PublishingHouse> getAll() {
        return publishingHouseRepository.getAll();
    }
}
