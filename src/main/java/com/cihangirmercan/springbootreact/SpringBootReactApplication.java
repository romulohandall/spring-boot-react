package com.cihangirmercan.springbootreact;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication // servlet initializer is needed for deploying this at some URL other than ROOT.war
public class SpringBootReactApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(SpringBootReactApplication.class);
    }

    public static void main(String[] args) throws Exception {
        SpringApplication.run(SpringBootReactApplication.class, args);
    }
}
