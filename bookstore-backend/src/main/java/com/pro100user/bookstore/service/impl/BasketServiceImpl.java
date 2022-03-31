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
@Transactional
@RequiredArgsConstructor
public class BasketServiceImpl implements BasketService {

    private final BasketRepository basketRepository;

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
        return basketRepository.update(object);
    }

    @Override
    public Basket delete(Long id) {
        Basket basket = readById(id);
        return basketRepository.delete(basket);
    }

    @Transactional(readOnly = true)
    @Override
    public List<Basket> getAll() {
        return basketRepository.getAll();
    }
}
