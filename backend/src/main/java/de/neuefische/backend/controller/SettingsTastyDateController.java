package de.neuefische.backend.controller;

import de.neuefische.backend.model.DateSettingsItem;
import de.neuefische.backend.model.settingsSubModel.UserTimeVote;
import de.neuefische.backend.service.DateSettingsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/api/appointment")
public class SettingsTastyDateController {

    private final DateSettingsService dateInfoService;

    public SettingsTastyDateController(DateSettingsService dateInfoService) {
        this.dateInfoService = dateInfoService;
    }

    @PostMapping("/completeSettings")
    private ResponseEntity<DateSettingsItem> postSettingsItem (@RequestBody DateSettingsItem settingsItem) {
        return ok(dateInfoService.addDateSettings(settingsItem));
    }


    @PostMapping("/{tastyDateId}/timeVote")
    private ResponseEntity<DateSettingsItem> updateDateSettingsWithVoteTimeItem (@RequestBody UserTimeVote timeVote, @PathVariable String tastyDateId) {
        return ok(dateInfoService.addVoteTimeItemToDateSettings(timeVote, tastyDateId));
    }
}
