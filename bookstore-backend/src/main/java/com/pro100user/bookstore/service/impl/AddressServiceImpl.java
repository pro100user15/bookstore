package com.pro100user.bookstore.service.impl;

import com.pro100user.bookstore.model.Address;
import com.pro100user.bookstore.repository.AddressRepository;
import com.pro100user.bookstore.service.AddressService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class AddressServiceImpl implements AddressService {

    private final AddressRepository addressRepository;

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
