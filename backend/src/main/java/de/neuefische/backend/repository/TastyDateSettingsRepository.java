package de.neuefische.backend.repository;

import de.neuefische.backend.model.TastyDateItem;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TastyDateSettingsRepository extends MongoRepository<TastyDateItem, String> {

}
