package de.neuefische.backend.controller;

import de.neuefische.backend.model.loginregister.RegistrationData;
import de.neuefische.backend.service.UserRegistrationService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/registration")
@AllArgsConstructor
public class RegistrationController {

    private final UserRegistrationService registrationService;

    @PostMapping("/user")
    public String register(@RequestBody RegistrationData newUser) {
        return registrationService.register(newUser);
    }
}


