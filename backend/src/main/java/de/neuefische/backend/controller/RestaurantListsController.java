package de.neuefische.backend.controller;

import de.neuefische.backend.model.RestaurantCard;
import de.neuefische.backend.service.RestaurantCardsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/api/restaurants")
public class RestaurantListsController {

    private final RestaurantCardsService restaurantService;

    public RestaurantListsController(RestaurantCardsService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @GetMapping
    private ResponseEntity<List<RestaurantCard>> getAllRestaurantCards() {
        List<RestaurantCard> allRestaurantCards = restaurantService.getEveryRestaurantCard();
        return ok(allRestaurantCards);
    }

    @GetMapping(value="/userlist")
    private ResponseEntity<List<RestaurantCard>> getUsersRestaurantList(Principal principal) {
        List<RestaurantCard> allUsersRestaurants = restaurantService.getUsersRestaurantCards(principal);
        return ok(allUsersRestaurants);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<RestaurantCard> getRestaurantCardById(@PathVariable String id) {
        Optional<RestaurantCard> opt = restaurantService.findRestaurantCardById(id);
        return ResponseEntity.of(opt);
    }

    @PostMapping
    private ResponseEntity<RestaurantCard> transferRestaurantCardToDB(@RequestBody RestaurantCard restaurantCard, Principal principal) {
        return ok(restaurantService.addNewRestaurant(restaurantCard, principal));
    }

    @PutMapping(value = "/{id}/update")
    public ResponseEntity<RestaurantCard> updateRestaurantCard(@RequestBody RestaurantCard restaurantCard) {
        Optional<RestaurantCard> opt = restaurantService.updateRestaurantCard(restaurantCard);
        return ResponseEntity.of(opt);
    }

    @DeleteMapping(value = "/userlist/{id}")
    public String removeUsersRestaurantCard(@PathVariable String id, Principal principal) {
        return restaurantService.removeUsersRestaurantCardById(id, principal);
    }

    @DeleteMapping(value = "/userlist")
    public ResponseEntity<String> removeUsersRestaurantList(Principal principal) {
        String noItems = restaurantService.removeUsersRestaurantCards(principal);
        return ok(noItems);
    }

    @DeleteMapping(value = "/{id}")
    public String removeRestaurantCard(@PathVariable String id) {
        return restaurantService.removeRestaurantCardById(id);
    }

    @DeleteMapping
    public ResponseEntity<String> removeRestaurantList() {
        String noItems = restaurantService.removeRestaurantCards();
        return ok(noItems);
    }
}