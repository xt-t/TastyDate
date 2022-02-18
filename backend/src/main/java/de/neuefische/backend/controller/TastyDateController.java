package de.neuefische.backend.controller;

import de.neuefische.backend.model.TastyDateItem;
import de.neuefische.backend.model.settingsSubModel.result.UserRestaurantVote;
import de.neuefische.backend.model.settingsSubModel.result.UserTimeVote;
import de.neuefische.backend.service.DateSettingsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/api/appointment")
public class TastyDateController {

    private final DateSettingsService dateInfoService;

    public TastyDateController(DateSettingsService dateInfoService) {
        this.dateInfoService = dateInfoService;
    }


    @GetMapping("/getAllTastyDateItems")
    private ResponseEntity<List<TastyDateItem>> getAllTastyDateItems() {
        List<TastyDateItem> allTastyDateItems = dateInfoService.getEveryTastyDateItem();
        return ok(allTastyDateItems);
    }

    @PostMapping("/completesettings")
    private ResponseEntity<TastyDateItem> transferSettingsToDB (@RequestBody TastyDateItem settingsItem) {
        return ok(dateInfoService.addDateSettings(settingsItem));
    }

    @PutMapping("/{tastyDateId}/timevote")
    private ResponseEntity<TastyDateItem> updateTastyDateWithVoteTimeItem (@RequestBody UserTimeVote timeVote, @PathVariable String tastyDateId) {
        TastyDateItem optTastyDate = dateInfoService.addVoteTimeItemToTastyDate(timeVote, tastyDateId);
        return ok(optTastyDate);
    }

    @PutMapping("/{tastyDateId}/restaurantvote")
    private ResponseEntity<TastyDateItem> updateTastyDateWithVoteRestaurantItem (@RequestBody UserRestaurantVote restaurantVote, @PathVariable String tastyDateId) {
        TastyDateItem optTastyDate = dateInfoService.addVoteRestaurantItemToTastyDate(restaurantVote, tastyDateId);
        return ok(optTastyDate);
    }
}
