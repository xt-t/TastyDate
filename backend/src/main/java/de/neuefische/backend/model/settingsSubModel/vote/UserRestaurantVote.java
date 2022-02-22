package de.neuefische.backend.model.settingsSubModel.vote;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class UserRestaurantVote {
    private String displayedName;

    private boolean[] votesPerRestaurantFromOneUser;
}

