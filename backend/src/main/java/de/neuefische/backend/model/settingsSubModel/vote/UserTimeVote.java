package de.neuefische.backend.model.settingsSubModel.vote;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class UserTimeVote {
    @Id
    private String displayedName;

    private boolean[] votesPerDateTimeFromOneUser;
}
