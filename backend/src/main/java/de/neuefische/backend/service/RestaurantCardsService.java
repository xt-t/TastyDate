package de.neuefische.backend.service;

import de.neuefische.backend.model.RestaurantCard;
import de.neuefische.backend.model.loginregister.User;
import de.neuefische.backend.repository.MongoUserRepository;
import de.neuefische.backend.repository.RestaurantCardsRepository;
import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class RestaurantCardsService {

    final RestaurantCardsRepository restaurantCardList;
    final MongoUserRepository userRepository;
    private final static Log LOG = LogFactory.getLog(RestaurantCardsService.class);

    public RestaurantCardsService(RestaurantCardsRepository restaurantCardList, MongoUserRepository userRepository) {
        this.restaurantCardList = restaurantCardList;
        this.userRepository = userRepository;
    }

    public List<RestaurantCard> getEveryRestaurantCard() {
        return restaurantCardList.findAll();
    }

    public List<RestaurantCard> getUsersRestaurantCards(Principal principal) {
        String currentUser = principal.getName();
        Optional<User> optionalUser = userRepository.findByUsername(currentUser);
        User user = optionalUser.orElseThrow(() -> new NoSuchElementException("User " + currentUser + " does not exists!"));
        LOG.info(user.getFavouriteRestaurantsIds());
        List<RestaurantCard> userRestauarantList = new ArrayList<>();
        List<String> userIdsRestaurants = user.getFavouriteRestaurantsIds();
        for (String userIdsRestaurant : userIdsRestaurants) {
            Optional<RestaurantCard> tempRestaurant = findRestaurantCardById(userIdsRestaurant);
            tempRestaurant.ifPresent(userRestauarantList::add);
        }
        return userRestauarantList;
    }

    public Optional<RestaurantCard> findRestaurantCardById(String id) {
        return restaurantCardList.findById(id);
    }

    public RestaurantCard addNewRestaurant(RestaurantCard restaurantCard, Principal principal) {
        String cardCreatorName = principal.getName();
        restaurantCard.setCardCreator(cardCreatorName);
        Optional<User> optionalUser = userRepository.findByUsername(cardCreatorName);
        User user = optionalUser.orElseThrow(() -> new NoSuchElementException("User " + cardCreatorName + " does not exists!"));
        if (user.getFavouriteRestaurantsIds() == null) {
            List<String> tempRestaurantsListUser = new ArrayList<>();
            tempRestaurantsListUser.add(restaurantCard.getId());
            user.setFavouriteRestaurantsIds(tempRestaurantsListUser);
        } else {
            List<String> tempRestaurantsListUser = user.getFavouriteRestaurantsIds();
            tempRestaurantsListUser.add(restaurantCard.getId());
            user.setFavouriteRestaurantsIds(tempRestaurantsListUser);
        }
        userRepository.save(user);
        LOG.info(user.getFavouriteRestaurantsIds());
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
