package de.neuefische.backend.service;

import de.neuefische.backend.model.DateSettingsItem;
import de.neuefische.backend.repository.DateSettingsRepository;
import org.springframework.stereotype.Service;


@Service
public class DateSettingsService {

    private final DateSettingsRepository dateSettingsRepo;

    public DateSettingsService(DateSettingsRepository dateSettingsRepo) {
        this.dateSettingsRepo = dateSettingsRepo;
    }

    public DateSettingsItem addDateSettings(DateSettingsItem settingsItem) {
        return dateSettingsRepo.save(settingsItem);
    }


}
