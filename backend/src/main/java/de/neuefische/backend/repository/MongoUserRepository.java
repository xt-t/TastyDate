package de.neuefische.backend.repository;


import de.neuefische.backend.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface MongoUserRepository extends MongoRepository<User,String> {

    Optional<User> findByUsername(String username);

}