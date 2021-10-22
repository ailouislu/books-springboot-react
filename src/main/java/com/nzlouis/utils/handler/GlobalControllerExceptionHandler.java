package com.nzlouis.utils.handler;

import com.nzlouis.utils.exception.CustomException;
import com.nzlouis.utils.response.R;
import org.springframework.core.convert.ConversionFailedException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;


/**
 * 
 * OpenAPI parses the @RestControllerAdvice annotation class and displays the exception definition in response: 400/404/500
 * 
 *
 */
@RestControllerAdvice
public class GlobalControllerExceptionHandler {

    @ExceptionHandler(ConversionFailedException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public R handleConnversion(RuntimeException ex) {
    	R resp = new R()
    			.code(HttpStatus.BAD_REQUEST)
    			.message(ex.getMessage());

        return resp;
    }
    
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public R handleException(Exception ex) {
    	R resp = new R()
    			.code(HttpStatus.INTERNAL_SERVER_ERROR)
    			.message(ex.getMessage());

    	return resp;
    }
   
    @ExceptionHandler(CustomException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public R handleUserNotFound(RuntimeException ex) {
    	R resp = new R()
    			.code(HttpStatus.NOT_FOUND)
    			.message(ex.getMessage());

        return resp;
    }
}
