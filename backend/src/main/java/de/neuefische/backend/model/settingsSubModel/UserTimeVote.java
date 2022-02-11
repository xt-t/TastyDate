package de.neuefische.backend.model.settingsSubModel;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class UserTimeVote {
    @Id
    private String displayedName;
    private boolean[] votedTimes;
}
