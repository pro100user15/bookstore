package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.model.Status;
import com.pro100user.bookstore.repository.StatusRepository;
import com.pro100user.bookstore.service.StatusService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class StatusServiceImpl implements StatusService {

    private final StatusRepository statusRepository;

    public StatusServiceImpl(StatusRepository statusRepository) {
        this.statusRepository = statusRepository;
    }

    @Override
    public Status create(Status object) {
        return statusRepository.create(object);
    }

    @Transactional(readOnly = true)
    @Override
    public Status readById(Long id) {
        return statusRepository.readById(id);
    }

    @Override
    public Status update(Status object) {
        readById(object.getId());
        return statusRepository.update(object);
    }

    @Override
    public Status delete(Status object) {
        return statusRepository.delete(object);
    }

    @Transactional(readOnly = true)
    @Override
    public List<Status> getAll() {
        return statusRepository.getAll();
    }
}
