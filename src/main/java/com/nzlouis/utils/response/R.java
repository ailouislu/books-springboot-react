package com.nzlouis.utils.response;

import lombok.Getter;
import lombok.Setter;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpStatus;

import java.io.Serializable;

@Getter
@Setter
public class R<T> implements Serializable {

	private static final long serialVersionUID = 1L;
    private int code;
    private String message;
    private T data;
    
    public void code(int code) {
    	this.code = code;
    }
    
    public R<T> code(HttpStatus status) {
    	this.code = status.value();

        return this;
    }

    public R<T> message(String message) {
    	this.message = message;

        return this;
    }


    public R<T> success() {
        this.code(0);
        this.message(HttpStatus.OK.getReasonPhrase());

        return this;
    }


    /**
     * Results not authorized to return
     */
    public R<T> forbidden(String message) {
    	this.code(HttpStatus.FORBIDDEN);
    	if(StringUtils.isNotBlank(message))
    		this.message(message);
        else
    		this.message(HttpStatus.FORBIDDEN.getReasonPhrase());

    	return this;
    }
    
    /**
     * Unauthorized user returns the result
     */
    public R<T> unauthorized(String message) {
    	this.code(HttpStatus.UNAUTHORIZED);
    	this.message(HttpStatus.UNAUTHORIZED.getReasonPhrase());

    	return this;
    }
    
    /**
     * The validators fail
     * 
     * @param message
     * @return
     */
    public R<T> validateFailed(String message) {
    	this.code(HttpStatus.NOT_FOUND);
    	this.message(message);

    	return this;
    }

    public R<T> data(T data) {
        this.data = data;

        return this;
    }
}
