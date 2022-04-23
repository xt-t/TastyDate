package de.neuefische.backend.controller;

import de.neuefische.backend.model.TastyDateItem;
import de.neuefische.backend.model.settingsSubModel.vote.UserRestaurantVote;
import de.neuefische.backend.model.settingsSubModel.vote.UserTimeVote;
import de.neuefische.backend.service.TastyDateSettingsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/api/tastydates")
public class TastyDateController {

    private final TastyDateSettingsService dateInfoService;

    public TastyDateController(TastyDateSettingsService dateInfoService) {
        this.dateInfoService = dateInfoService;
    }


    @GetMapping
    private ResponseEntity<List<TastyDateItem>> getAllTastyDateItems() {
        List<TastyDateItem> allTastyDateItems = dateInfoService.getEveryTastyDateItem();
        return ok(allTastyDateItems);
    }

    @GetMapping(value = "/userstastydates")
    private ResponseEntity<List<TastyDateItem>> getUsersTastyDateItems(Principal principal) {
        List<TastyDateItem> usersTastyDates = dateInfoService.findUsersTastyDates(principal);
        return ok(usersTastyDates);
    }

    @GetMapping(value = "/{tastyDateId}")
    public ResponseEntity<TastyDateItem> getTastyDateById(@PathVariable String tastyDateId) {
        Optional<TastyDateItem> opt = dateInfoService.findTastyDateById(tastyDateId);
        return ResponseEntity.of(opt);
    }

    @PostMapping
    private ResponseEntity<TastyDateItem> transferSettingsToDB(@RequestBody TastyDateItem settingsItem) {
        return ok(dateInfoService.addDateSettings(settingsItem));
    }

    @PutMapping("/{tastyDateId}/timevotes")
    private ResponseEntity<TastyDateItem> updateTastyDateWithVoteTimeItem(@RequestBody UserTimeVote timeVote, @PathVariable String tastyDateId) {
        TastyDateItem optTastyDate = dateInfoService.addVoteTimeItemToTastyDate(timeVote, tastyDateId);
        return ok(optTastyDate);
    }

    @GetMapping("/{tastyDateId}/checkifuserhasvotedfortime")
    private ResponseEntity<Boolean> checkIfUserHasVotedTime(@PathVariable String tastyDateId, Principal principal) {
        Boolean optTastyDate = dateInfoService.checkUserHasVotedTime(principal, tastyDateId);
        return ok(optTastyDate);
    }

    @GetMapping("/{tastyDateId}/checkifuserhasvotedforrestaurant")
    private ResponseEntity<Boolean> checkIfUserHasVotedRestaurant(@PathVariable String tastyDateId, Principal principal) {
        Boolean optTastyDate = dateInfoService.checkUserHasVotedRestaurant(principal, tastyDateId);
        return ok(optTastyDate);
    }

    @PutMapping("/{tastyDateId}/restaurantvotes")
    private ResponseEntity<TastyDateItem> updateTastyDateWithVoteRestaurantCard(@RequestBody UserRestaurantVote restaurantVote, @PathVariable String tastyDateId) {
        TastyDateItem optTastyDate = dateInfoService.addVoteRestaurantCardToTastyDate(restaurantVote, tastyDateId);
        return ok(optTastyDate);
    }
}
