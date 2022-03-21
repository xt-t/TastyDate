package de.neuefische.backend.service;

import de.neuefische.backend.model.RestaurantCard;
import de.neuefische.backend.model.loginregister.User;
import de.neuefische.backend.repository.MongoUserRepository;
import de.neuefische.backend.repository.RestaurantCardsRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RestaurantCardsService {

    RestaurantCardsRepository restaurantCardList;
    MongoUserRepository userRepository;

    public RestaurantCardsService(RestaurantCardsRepository restaurantCardList) {
        this.restaurantCardList = restaurantCardList;
    }

    public List<RestaurantCard> getEveryRestaurantCard() {
        return restaurantCardList.findAll();
    }

    public List<RestaurantCard> getUsersRestaurantCards(Principal principal) {
        String currentUser = principal.getName();
        Optional<User> user = userRepository.findByUsername(currentUser);
        List<RestaurantCard> userRestauarantList = new ArrayList<RestaurantCard>();
        if (user.isPresent()) {
            List<String> userIdsRestaurants = user.get().getFavouriteRestaurantsIds();
            for (String userIdsRestaurant:userIdsRestaurants) {
                Optional<RestaurantCard> tempRestaurant = findRestaurantCardById(userIdsRestaurant);
                tempRestaurant.ifPresent(userRestauarantList::add);
            }
        }
        return userRestauarantList;
    }

    public Optional<RestaurantCard> findRestaurantCardById(String id) {
        return restaurantCardList.findById(id);
    }

    public RestaurantCard addNewRestaurant(RestaurantCard restaurantCard, Principal principal) {
        String cardCreatorName = principal.getName();
        restaurantCard.setCardCreator(cardCreatorName);
        Optional<User> user = userRepository.findByUsername(cardCreatorName);
        if (user.isPresent()) {
            List<String> tempRestaurantsListUser = user.get().getFavouriteRestaurantsIds();
            tempRestaurantsListUser.add(restaurantCard.getId());
            user.get().setFavouriteRestaurantsIds(tempRestaurantsListUser);
            userRepository.save(user.get());
        }
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
        } else {
            return "Something went wrong";
        }
    }

    public List<RestaurantCard> removeAllCards() {
        restaurantCardList.deleteAll();
        return restaurantCardList.findAll();
    }

}
