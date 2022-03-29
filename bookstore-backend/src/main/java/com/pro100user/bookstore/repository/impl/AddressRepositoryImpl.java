package com.pro100user.bookstore.repository.impl;

import com.pro100user.bookstore.model.Address;
import com.pro100user.bookstore.repository.AddressRepository;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

@Repository
public class AddressRepositoryImpl extends BasicRepositoryImpl<Address, Long> implements AddressRepository {

    public AddressRepositoryImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }
}
