package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.model.Address;
import com.pro100user.bookstore.repository.AddressRepository;
import com.pro100user.bookstore.service.AddressService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class AddressServiceImpl implements AddressService {

    private final AddressRepository addressRepository;

    public AddressServiceImpl(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    @Override
    public Address create(Address object) {
        return addressRepository.create(object);
    }

    @Transactional(readOnly = true)
    @Override
    public Address readById(Long id) {
        return addressRepository.readById(id);
    }

    @Override
    public Address update(Address object) {
        readById(object.getId());
        return addressRepository.update(object);
    }

    @Override
    public Address delete(Address object) {
        return addressRepository.delete(object);
    }

    @Transactional(readOnly = true)
    @Override
    public List<Address> getAll() {
        return addressRepository.getAll();
    }
}
