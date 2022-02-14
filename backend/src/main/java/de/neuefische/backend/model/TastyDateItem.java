package de.neuefische.backend.model;

import de.neuefische.backend.model.settingsSubModel.appointmentsettings.GeneralInfoDateItem;
import de.neuefische.backend.model.settingsSubModel.appointmentsettings.RestaurantItem;
import de.neuefische.backend.model.settingsSubModel.appointmentsettings.TimeItem;
import de.neuefische.backend.model.settingsSubModel.result.UserRestaurantVote;
import de.neuefische.backend.model.settingsSubModel.result.UserTimeVote;
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

    private GeneralInfoDateItem infoTastyDate;
    private TimeItem[] infoTastyDateTimes;
    private RestaurantItem[] infoRestaurantData;
    private List<UserTimeVote> timeVotes;
    private List<UserRestaurantVote> restaurantVotes;
    private int[] votingResultsForOneDate;
    private int[] votingResultsForOneRestaurant;
    }