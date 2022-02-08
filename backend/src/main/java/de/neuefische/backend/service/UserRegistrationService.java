package de.neuefische.backend.service;

import de.neuefische.backend.model.loginregister.RegistrationData;
import de.neuefische.backend.model.loginregister.User;
import de.neuefische.backend.repository.MongoUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class UserRegistrationService {

    @Autowired
    MongoUserRepository repository;

    @Autowired
    PasswordEncoder encoder;

    public String register(RegistrationData registerUser) {
        String encodedPassword = encoder.encode(registerUser.getPassword());
        final User user = User.newUser(registerUser.getName(), encodedPassword,
                List.of(new SimpleGrantedAuthority(MongoUserDetailsService.AUTHORITY_API_READWRITE)));
        try {
            repository.insert(user);
            return ("Successfully inserted user");
        } catch (DuplicateKeyException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User exists already");
        }
    }
}
