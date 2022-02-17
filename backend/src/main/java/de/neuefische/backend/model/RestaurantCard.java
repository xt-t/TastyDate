package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Document("RestaurantCard")
public class RestaurantCard {
    @Id
    private String id;

    private String cardCreator;
    private String restaurantName;
    private String category;
    private int rating;
    private int price;
    private int postcode;
    private String city;
}
