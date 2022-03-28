package com.pro100user.bookstore.model.enums;

public enum Status {
    OPEN("Open"),
    CLOSED("Closed");

    private String name;

    Status(String name) {
        this.name = name;
    }
}
