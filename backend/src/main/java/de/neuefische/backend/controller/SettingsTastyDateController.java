package de.neuefische.backend.controller;

import de.neuefische.backend.model.DateSettingsItem;
import de.neuefische.backend.model.TimeVoteItem;
import de.neuefische.backend.service.DateSettingsService;
import de.neuefische.backend.service.VoteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/api/appointment")
public class SettingsTastyDateController {

    private final DateSettingsService dateInfoService;

    private final VoteService voteService;

    public SettingsTastyDateController(DateSettingsService dateInfoService, VoteService voteService) {
        this.dateInfoService = dateInfoService;
        this.voteService = voteService;
    }

    @PostMapping("/completeSettings")
    private ResponseEntity<DateSettingsItem> postSettingsItem (@RequestBody DateSettingsItem settingsItem) {
        return ok(dateInfoService.addDateSettings(settingsItem));
    }

    @PostMapping("/timeVote")
    private ResponseEntity<TimeVoteItem> postVoteTimeItem (@RequestBody TimeVoteItem voteTime) {
        return ok(voteService.addVoteTimeItem(voteTime));
    }
}
