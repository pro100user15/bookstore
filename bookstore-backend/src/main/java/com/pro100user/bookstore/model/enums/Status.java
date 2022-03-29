package com.pro100user.bookstore.model.enums;

public enum Status {
    PAPER("Paper"),
    ELECTRONIC("Electronic");

    private String name;

    Status(String name) {
        this.name = name;
    }
}
