package com.demo.drganddrop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan({"com.demo"})
public class AppLauncher {

	public static void main(String[] args) {
		SpringApplication.run(AppLauncher.class, args);
	}

}