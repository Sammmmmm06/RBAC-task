package com.tka.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ContentController {

	@GetMapping("/public")
	public String publlicEndpoint() {
		return "Public Content";
	}
	
	@GetMapping("/user")
	public String userEndpoint() {
		return "User content";
	}
	
	@GetMapping("/admin")
	public String adminEndpoint() {
		return "Admin content";
	}
}
