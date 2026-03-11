package com.tka.dto;

import com.tka.entity.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class RegisterRequest {
	
	private String name;
	private String email;
	private String password;
	private Role role;
	
	

}
