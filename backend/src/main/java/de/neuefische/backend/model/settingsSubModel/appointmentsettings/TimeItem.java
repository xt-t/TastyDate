package de.neuefische.backend.model.settingsSubModel.appointmentsettings;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class TimeItem {
    private int id;
    private String pickedDate;
    private String pickedStart;
    private String pickedEnd;
}
