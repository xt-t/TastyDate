package de.neuefische.backend.service;

import de.neuefische.backend.model.TastyDateItem;
import de.neuefische.backend.repository.TastyDateSettingsRepository;
import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.mock;

class TastyDateSettingsServiceTest {
    private final TastyDateSettingsRepository tastyDateSettingsRepository = mock(TastyDateSettingsRepository.class);
    private final TastyDateSettingsService tastyDateSettingsService = new TastyDateSettingsService(tastyDateSettingsRepository);


}