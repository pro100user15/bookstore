package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.model.WorldLiterature;
import com.pro100user.bookstore.repository.WorldLiteratureRepository;
import com.pro100user.bookstore.service.WorldLiteratureService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class WorldLiteratureServiceImpl implements WorldLiteratureService {

    private final WorldLiteratureRepository worldLiteratureRepository;

    public WorldLiteratureServiceImpl(WorldLiteratureRepository worldLiteratureRepository) {
        this.worldLiteratureRepository = worldLiteratureRepository;
    }

    @Override
    public WorldLiterature create(WorldLiterature object) {
        return worldLiteratureRepository.create(object);
    }

    @Transactional(readOnly = true)
    @Override
    public WorldLiterature readById(Long id) {
        return worldLiteratureRepository.readById(id);
    }

    @Override
    public WorldLiterature update(WorldLiterature object) {
        readById(object.getId());
        return worldLiteratureRepository.update(object);
    }

    @Override
    public WorldLiterature delete(WorldLiterature object) {
        return worldLiteratureRepository.delete(object);
    }

    @Transactional(readOnly = true)
    @Override
    public List<WorldLiterature> getAll() {
        return worldLiteratureRepository.getAll();
    }
}
