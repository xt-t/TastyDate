package de.neuefische.backend.service;

import de.neuefische.backend.model.TastyDateItem;
import de.neuefische.backend.model.settingsSubModel.result.UserRestaurantVote;
import de.neuefische.backend.model.settingsSubModel.result.UserTimeVote;
import de.neuefische.backend.repository.DateSettingsRepository;
import org.springframework.stereotype.Service;

import java.util.*;


@Service
public class DateSettingsService {

    private final DateSettingsRepository dateSettingsRepo;

    public DateSettingsService(DateSettingsRepository dateSettingsRepo) {
        this.dateSettingsRepo = dateSettingsRepo;
    }

    public TastyDateItem addDateSettings(TastyDateItem settingsItem) {
        UUID uuid = UUID.randomUUID();
        settingsItem.setTastyDateId(uuid.toString());
        settingsItem.setTimeVotes(new ArrayList<>());
        settingsItem.setRestaurantVotes(new ArrayList<>());
        return dateSettingsRepo.save(settingsItem);
    }

    public List<TastyDateItem> getEveryTastyDateItem() {
        return dateSettingsRepo.findAll();
    }

    public TastyDateItem addVoteTimeItemToTastyDate(UserTimeVote timeVote, String tastyDateId) {

        //Optional - existiert das SettingsItem? Fehlermeldung

        //checking and updating the List of the UserVotes for the DateTimes
        Optional<TastyDateItem> optionalTastyDateItem = dateSettingsRepo.findById(tastyDateId);
        TastyDateItem test = optionalTastyDateItem.orElseThrow(() -> new NoSuchElementException("TastyDateItem with id: " + tastyDateId + " does not exists!"));
        List<UserTimeVote> tempList = test.getTimeVotes();
        tempList.add(timeVote);
        test.setTimeVotes(tempList);
        dateSettingsRepo.save(test);

        //generate sums of voteResult
        boolean[] checksVoteItem = timeVote.getVotesPerDateTimeFromOneUser();
        int [] amount = new int[checksVoteItem.length];

        for (UserTimeVote item:tempList) {
            boolean[] checksItem = item.getVotesPerDateTimeFromOneUser();
            for (int i=0; i < amount.length; i++) {
                if (checksItem[i]) {
                    amount[i]++;
                }
                }
            }
        test.setVotingResultsForOneDate(amount);
        return dateSettingsRepo.save(test);
    }

    public TastyDateItem addVoteRestaurantItemToTastyDate(UserRestaurantVote restaurantVote, String tastyDateId) {

        //Optional - existiert das SettingsItem? Fehlermeldung

        //checking and updating the List of the UserVotes for the DateTimes

        Optional<TastyDateItem> optionalTastyDateItem = dateSettingsRepo.findById(tastyDateId);
        TastyDateItem test = optionalTastyDateItem.orElseThrow(() -> new NoSuchElementException("TastyDateItem with id: " + tastyDateId + " does not exists!"));
        List<UserRestaurantVote> tempList = test.getRestaurantVotes();
        tempList.add(restaurantVote);
        test.setRestaurantVotes(tempList);
        dateSettingsRepo.save(test);

        //generate sums of voteResult
        boolean[] checksVoteItem = restaurantVote.getVotesPerRestaurantFromOneUser();
        int [] positiveAmount = new int[checksVoteItem.length];
        int [] negativeAmount = new int[checksVoteItem.length];
        for (UserRestaurantVote item:tempList) {
            boolean[] checksItem = item.getVotesPerRestaurantFromOneUser();
            for (int i=0; i < checksVoteItem.length; i++) {
                if (checksItem[i]) {
                    positiveAmount[i]++;
                }
                else {
                    negativeAmount[i]++;
                }
            }
        }
        test.setPositiveVotingResultsForOneRestaurant(positiveAmount);
        test.setNegativeVotingResultsForOneRestaurant(negativeAmount);

        return dateSettingsRepo.save(test);
    }

}






