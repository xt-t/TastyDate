package de.neuefische.backend.repository;

import de.neuefische.backend.model.TimeVoteItem;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TimeVoteRepository extends MongoRepository<TimeVoteItem, String> {
}
