package com.pro100user.bookstore.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

@Slf4j
@ControllerAdvice
public class ApplicationExceptionHandler {

    @ExceptionHandler(NotFoundException.class)
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    public ResponseEntity<String> entityNotFoundExceptionHandler(NotFoundException exception) {
        return getModelAndView(HttpStatus.NOT_FOUND, exception);
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<String> internalServerErrorHandler(Exception exception) {
        return getModelAndView(HttpStatus.INTERNAL_SERVER_ERROR, exception);
    }

    private ResponseEntity<String> getModelAndView(HttpStatus httpStatus, Exception exception) {
        //log.error("Exception raised = {} :: URL = {}", exception.getMessage(), request.getRequestURL());
        return new ResponseEntity<>(exception.getMessage(), httpStatus);
    }
}