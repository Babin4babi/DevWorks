package com.demo.drganddrop.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {

	@RequestMapping("/login.do")
	public String loadDefaultPage() {
		return "index";
	}
}
