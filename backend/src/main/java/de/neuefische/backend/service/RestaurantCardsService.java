package de.neuefische.backend.service;

import de.neuefische.backend.model.RestaurantCard;
import de.neuefische.backend.repository.RestaurantCardsRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@Service
public class RestaurantCardsService {

    RestaurantCardsRepository restaurantCardList;

    public RestaurantCardsService(RestaurantCardsRepository restaurantCardList) {
        this.restaurantCardList = restaurantCardList;
    }

    public List<RestaurantCard> getEveryRestaurantCard() {
        return restaurantCardList.findAll();
    }

    public Optional<RestaurantCard> findProductById(String id) {return restaurantCardList.findById(id);}

    public RestaurantCard addNewRestaurant(RestaurantCard restaurantCard, Principal principal) {
        String cardCreatorName = principal.getName();
        restaurantCard.setCardCreator(cardCreatorName);
        return restaurantCardList.insert(restaurantCard);
    }

    public Optional<RestaurantCard> updateRestaurantCard(RestaurantCard restaurantCard) {
        restaurantCardList.save(restaurantCard);
        return restaurantCardList.findById(restaurantCard.getId());
    }

    public String removeRestaurantCardById(String id) {
        if (restaurantCardList.existsById(id)) {
            restaurantCardList.deleteById(id);
            return "Deleted!";
        }
        else {return "Something went wrong";}
    }

    public List<RestaurantCard> removeAllCards() {
        restaurantCardList.deleteAll();
        return restaurantCardList.findAll();
    }

}
