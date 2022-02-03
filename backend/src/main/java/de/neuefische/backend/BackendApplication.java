package de.neuefische.backend;

import de.neuefische.backend.model.User;
import de.neuefische.backend.repository.MongoUserRepository;
import de.neuefische.backend.service.MongoUserDetailsService;
import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

	private static final Log LOG = LogFactory.getLog(BackendApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Autowired
	MongoUserRepository repository;

	@Autowired
	PasswordEncoder encoder;

	@Override
	public void run(String... args) throws Exception {
		repository.deleteAll();
	String encodedPassword = encoder.encode("test123");
	final User user = User.newUser("test", encodedPassword,
			List.of(new SimpleGrantedAuthority(MongoUserDetailsService.AUTHORITY_API_READWRITE)));
	try
	{
		repository.insert(user);
	} catch(
	DuplicateKeyException e)

	{
		LOG.info("User '" + user.getUsername() + "' already exists.");
	}

	}
}
