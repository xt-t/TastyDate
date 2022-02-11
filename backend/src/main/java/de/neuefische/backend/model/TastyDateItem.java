package de.neuefische.backend.model;

import de.neuefische.backend.model.settingsSubModel.GeneralInfoDateItem;
import de.neuefische.backend.model.settingsSubModel.RestaurantItem;
import de.neuefische.backend.model.settingsSubModel.TimeItem;
import de.neuefische.backend.model.settingsSubModel.UserTimeVote;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

@Document("TastyDateItem")
public class TastyDateItem {

    @Id
    private String tastyDateId;

    private GeneralInfoDateItem infoDate;
    private TimeItem[] infoDateTimes;
    private RestaurantItem[] infoRestaurantData;

    private List<UserTimeVote> timeVotes;
    private int[] voteResults;
    }