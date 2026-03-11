package com.tka.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.tka.repository.UserRepository;
import com.tka.security.JwtAuthenticationFilter;
import com.tka.security.JwtService;

@Configuration
public class SecurityConfig {

    private UserRepository userRepository;
	private JwtService jwtService;
	
	public SecurityConfig(JwtService jwtService,UserRepository userRepository) {
		this.jwtService=jwtService;
		this.userRepository = userRepository;
	}
	

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    	JwtAuthenticationFilter filter=new JwtAuthenticationFilter(jwtService,userRepository);
    	http        
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**",
                		"/swagger-ui/**",
                		 "/v3/api-docs/**",
                         "/swagger-ui.html").permitAll()
                .requestMatchers("/api/public").permitAll()
                .requestMatchers("/api/user").hasRole("USER")
                .requestMatchers("/api/admin").hasRole("ADMIN")
                .anyRequest().authenticated()
            ).addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);


        return http.build();
    }
}
