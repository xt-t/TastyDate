package de.neuefische.backend.repository;

import de.neuefische.backend.model.RestaurantCard;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface RestaurantCardsRepository extends MongoRepository<RestaurantCard, String> {
}