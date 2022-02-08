package de.neuefische.backend.service;

import de.neuefische.backend.model.DateSettingsItem;
import de.neuefische.backend.repository.DateSettingsRepository;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;


@Service
public class DateSettingsService {

    private final DateSettingsRepository dateSettingsRepo;

    public DateSettingsService(DateSettingsRepository dateSettingsRepo) {
        this.dateSettingsRepo = dateSettingsRepo;
    }

    public DateSettingsItem addDateSettings(DateSettingsItem settingsItem) {
        return dateSettingsRepo.save(settingsItem);
    }

    public String removeSettingsItemById(String id) {
        if (dateSettingsRepo.existsById(id)) {
            dateSettingsRepo.deleteById(id);
            return "Deleted!";
        }
        else {return "Something went wrong";}
    }

    public Optional<DateSettingsItem> findSettingsById(String id) {return dateSettingsRepo.findById(id);}

}
