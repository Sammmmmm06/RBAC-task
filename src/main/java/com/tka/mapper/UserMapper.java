package com.tka.mapper;

import org.mapstruct.Mapper;

import com.tka.dto.RegisterRequest;
import com.tka.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
	
	User toUser(RegisterRequest request);

}
