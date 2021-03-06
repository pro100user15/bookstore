package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.model.Order;
import com.pro100user.bookstore.repository.OrderRepository;
import com.pro100user.bookstore.service.OrderService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

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
        readById(object.getId());
        return orderRepository.update(object);
    }

    @Override
    public Order delete(Order object) {
        return orderRepository.delete(object);
    }

    @Transactional(readOnly = true)
    @Override
    public List<Order> getAll() {
        return orderRepository.getAll();
    }
}
