package de.neuefische.backend.model;

import de.neuefische.backend.model.settingsSubModel.*;
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
    private List<UserRestaurantVote> restaurantVotes;
    private int[] votingResultsForOneDate;
    private int[] votingResultsForOneRestaurant;
    }