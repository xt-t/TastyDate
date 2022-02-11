package de.neuefische.backend.controller;

import de.neuefische.backend.model.TastyDateItem;
import de.neuefische.backend.model.settingsSubModel.UserTimeVote;
import de.neuefische.backend.service.DateSettingsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/api/appointment")
public class SettingsTastyDateController {

    private final DateSettingsService dateInfoService;

    public SettingsTastyDateController(DateSettingsService dateInfoService) {
        this.dateInfoService = dateInfoService;
    }

    @PostMapping("/completesettings")
    private ResponseEntity<TastyDateItem> postSettingsItem (@RequestBody TastyDateItem settingsItem) {
        return ok(dateInfoService.addDateSettings(settingsItem));
    }


    @PutMapping("/{tastyDateId}/timevote")
    private ResponseEntity<TastyDateItem> updateTastyDateWithVoteTimeItem (@RequestBody UserTimeVote timeVote, @PathVariable String tastyDateId) {
        Optional<TastyDateItem> optTastyDate = dateInfoService.addVoteTimeItemToTastyDate(timeVote, tastyDateId);
        return ResponseEntity.of(optTastyDate);
    }
}
