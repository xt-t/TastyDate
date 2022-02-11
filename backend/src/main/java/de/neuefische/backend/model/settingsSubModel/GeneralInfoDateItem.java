package de.neuefische.backend.model.settingsSubModel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class GeneralInfoDateItem {

    private String pickedTastyDateName;
    private String pickedLocation;
    private String pickedNotes;
    private String pickedChosenDisplayName;

}
