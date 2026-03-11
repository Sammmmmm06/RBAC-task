package com.tka.service;

import org.springframework.stereotype.Service;

import com.tka.dto.LoginRequest;
import com.tka.dto.RegisterRequest;
import com.tka.entity.User;
import com.tka.mapper.UserMapper;
import com.tka.repository.UserRepository;
import com.tka.security.JwtService;

@Service
public class AuthService {

	UserRepository repository;
	UserMapper mapper;
	
	private JwtService jwtService;
	
	public AuthService(UserRepository repository,UserMapper mapper,JwtService jwtService) {
		this.repository=repository;
		this.mapper=mapper;
		this.jwtService=jwtService;
	}
	
	
	public void register(RegisterRequest request) {
		
		User user=mapper.toUser(request);
		repository.save(user);
	}
	
	public String login(LoginRequest request) {
		User user=repository.findByEmail(request.getEmail());
		
		if(user==null) {
			return "User not found";
		}
		if(!user.getPassword().equals(request.getPassword())) {
			return "Incorrect Password";
		}
		String token=jwtService.generateToken(user.getEmail());
		return token;
	}
}
