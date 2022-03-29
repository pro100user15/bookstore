package com.pro100user.bookstore.model.enums;

public enum Language {
    UKRAINIAN("Ukrainian"),
    ENGLISH("English"),
    OTHER("Oher");

    private String name;

    Language(String name) {
        this.name = name;
    }
}
