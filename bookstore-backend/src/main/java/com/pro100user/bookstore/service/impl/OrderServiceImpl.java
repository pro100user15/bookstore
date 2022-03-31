package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.model.Order;
import com.pro100user.bookstore.repository.OrderRepository;
import com.pro100user.bookstore.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    @Override
    public Order create(Order object) {
        return orderRepository.create(object);
    }

    @Transactional(readOnly = true)
    @Override
    public Order readById(Long id) {
        return orderRepository.readById(id);
    }

    @Override
    public Order update(Order object) {
        return orderRepository.update(object);
    }

    @Override
    public Order delete(Long id) {
        Order order = readById(id);
        return orderRepository.delete(order);
    }

    @Transactional(readOnly = true)
    @Override
    public List<Order> getAll() {
        return orderRepository.getAll();
    }
}
