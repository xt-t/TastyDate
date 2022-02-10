package de.neuefische.backend.repository;

import de.neuefische.backend.model.DateSettingsItem;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DateSettingsRepository extends MongoRepository<DateSettingsItem, String> {

}
