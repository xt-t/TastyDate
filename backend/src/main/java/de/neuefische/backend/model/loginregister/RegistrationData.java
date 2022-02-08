package de.neuefische.backend.model.loginregister;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegistrationData {
    String name;
    String password;
}
