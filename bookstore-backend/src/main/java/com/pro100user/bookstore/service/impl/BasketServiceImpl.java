package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.model.Basket;
import com.pro100user.bookstore.repository.BasketRepository;
import com.pro100user.bookstore.service.BasketService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class BasketServiceImpl implements BasketService {

    private final BasketRepository basketRepository;

    public BasketServiceImpl(BasketRepository basketRepository) {
        this.basketRepository = basketRepository;
    }

    @Override
    public Basket create(Basket object) {
        return basketRepository.create(object);
    }

    @Transactional(readOnly = true)
    @Override
    public Basket readById(Long id) {
        return basketRepository.readById(id);
    }

    @Override
    public Basket update(Basket object) {
        readById(object.getId());
        return basketRepository.update(object);
    }

    @Override
    public Basket delete(Basket object) {
        return basketRepository.delete(object);
    }

    @Transactional(readOnly = true)
    @Override
    public List<Basket> getAll() {
        return basketRepository.getAll();
    }
}
