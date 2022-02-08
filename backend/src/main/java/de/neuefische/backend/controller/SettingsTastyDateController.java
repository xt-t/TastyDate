package de.neuefische.backend.controller;

import de.neuefische.backend.model.DateSettingsItem;
import de.neuefische.backend.service.DateSettingsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/api/appointment/completeSettings")
public class SettingsTastyDateController {

    private final DateSettingsService dateInfoService;

    public SettingsTastyDateController(DateSettingsService dateInfoService) {
        this.dateInfoService = dateInfoService;
    }

    @PostMapping
    private ResponseEntity<DateSettingsItem> postSettingsItem (@RequestBody DateSettingsItem settingsItem) {
        return ok(dateInfoService.addDateSettings(settingsItem));
    }

}
