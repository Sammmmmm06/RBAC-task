package com.tka.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tka.dto.LoginRequest;
import com.tka.dto.RegisterRequest;
import com.tka.service.AuthService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {
	
	private AuthService authService;
	
	public AuthController(AuthService authService) {
		this.authService=authService;
	}
	
	@PostMapping("/register")
	public String register(@RequestBody RegisterRequest request) {
		
		authService.register(request);
		return "User registered successfully";
	}
	
	@PostMapping("/login")
	public String login(@RequestBody LoginRequest request) {
		
		return authService.login(request);
	}
	

}
