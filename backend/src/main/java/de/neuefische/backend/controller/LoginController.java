package de.neuefische.backend.controller;


import de.neuefische.backend.model.TastyDateItem;
import de.neuefische.backend.model.loginregister.LoginData;
import de.neuefische.backend.service.JWTUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/auth")
public class LoginController {

    final AuthenticationManager authenticationManager;
    final JWTUtils jwtUtils;

    public LoginController(AuthenticationManager authenticationManager, JWTUtils jwtUtils) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
    }

    @GetMapping("/username")
    private ResponseEntity<String> getLoggedUserName(Principal principal) {
       String userName = principal.getName();
        return ok(userName);
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginData loginData) {
        try {
            final UsernamePasswordAuthenticationToken token =
                    new UsernamePasswordAuthenticationToken(loginData.getName(), loginData.getPassword());
            authenticationManager.authenticate(token);
            return jwtUtils.createToken(new HashMap<>(), loginData.getName());
        } catch (AuthenticationException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid credentials!");
        }
    }


}