package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.model.Basket;
import com.pro100user.bookstore.repository.BasketRepository;
import com.pro100user.bookstore.service.BasketService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BasketServiceImpl implements BasketService {

    private final BasketRepository basketRepository;

    @Transactional
    @Override
    public Basket create(Basket object) {
        return basketRepository.create(object);
    }

    @Override
    public Basket readById(Long id) {
        return basketRepository.readById(id);
    }

    @Transactional
    @Override
    public Basket update(Basket object) {
        return basketRepository.update(object);
    }

    @Transactional
    @Override
    public Basket delete(Long id) {
        Basket basket = readById(id);
        return basketRepository.delete(basket);
    }

    @Override
    public List<Basket> getAll() {
        return basketRepository.getAll();
    }
}
