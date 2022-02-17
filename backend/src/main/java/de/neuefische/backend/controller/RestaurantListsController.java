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
@RequestMapping("/api")
public class RestaurantListsController {

    private final RestaurantCardsService restaurantService;

    public RestaurantListsController(RestaurantCardsService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @GetMapping("/restaurantlists")
    private ResponseEntity<List<RestaurantCard>> getAllRestaurantCards() {
        List<RestaurantCard> allRestaurantCards = restaurantService.getEveryRestaurantCard();
        return ok(allRestaurantCards);
    }

    @GetMapping(value="/restaurantlists/{id}")
    public ResponseEntity<RestaurantCard> getRestaurantCardById  (@PathVariable String id) {
        Optional<RestaurantCard> opt = restaurantService.findProductById(id);
        return ResponseEntity.of(opt);
    }

    @PostMapping("/restaurantlists")
    private ResponseEntity <RestaurantCard> transferRestaurantCardToDB (@RequestBody RestaurantCard restaurantCard, Principal principal) {
        return ok(restaurantService.addNewRestaurant(restaurantCard, principal));
    }

    @PutMapping(value="/restaurantlists/{id}/update")
    public ResponseEntity<RestaurantCard> updateRestaurantCard (@RequestBody RestaurantCard restaurantCard) {
        Optional<RestaurantCard> opt = restaurantService.updateRestaurantCard(restaurantCard);
        return ResponseEntity.of(opt);
    }

    @DeleteMapping(value="/restaurantlists/{id}")
    public String removeRestaurantCard (@PathVariable String id) {
        return restaurantService.removeRestaurantCardById(id);
    }

    @DeleteMapping("/restaurantlists")
    public ResponseEntity<List<RestaurantCard>>  removeRestaurantList () {
        List<RestaurantCard> noItems = restaurantService.removeAllCards();
        return ok(noItems);
    }


}