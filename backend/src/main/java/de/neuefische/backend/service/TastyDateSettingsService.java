package de.neuefische.backend.service;

import de.neuefische.backend.model.TastyDateItem;
import de.neuefische.backend.model.settingsSubModel.vote.UserRestaurantVote;
import de.neuefische.backend.model.settingsSubModel.vote.UserTimeVote;
import de.neuefische.backend.repository.TastyDateSettingsRepository;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.security.Principal;
import java.util.*;


@Service
public class TastyDateSettingsService {

    private final TastyDateSettingsRepository dateSettingsRepo;

    public TastyDateSettingsService(TastyDateSettingsRepository dateSettingsRepo) {
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

    public List<TastyDateItem> findUsersTastyDates(Principal principal) {
        String userName = principal.getName();
        //chosenDisplayName appointsettings
        List<TastyDateItem> allTastyDateItemList = dateSettingsRepo.findAll();
        List<TastyDateItem> filteredTastyDateItemList = new ArrayList<>();
        for (TastyDateItem currentTastyDateItem:allTastyDateItemList) {
            boolean userIsCreator = currentTastyDateItem.getInfoTastyDate().getPickedChosenDisplayName().equals(userName);

            List<UserTimeVote> tempList = currentTastyDateItem.getTimeVotes();
            if (tempList.isEmpty()) {
                tempList = new ArrayList<>();
            }
            List<UserTimeVote> filteredTempList = tempList.stream().filter(userTimeVote -> userTimeVote.getDisplayedName().equals(userName)).toList();

            if (filteredTempList.size() != 0 || userIsCreator) {
                filteredTastyDateItemList.add(currentTastyDateItem);
            }
        }
        return filteredTastyDateItemList;
    }

    public Optional<TastyDateItem> findTastyDateById(String id) {
        return dateSettingsRepo.findById(id);
    }

    public Boolean checkUserHasVotedTime(Principal principal, String id) {
        if (principal==null) {
            return true;
        }
        else {
            String userName = principal.getName();
            Optional<TastyDateItem> optionalTastyDateItem = findTastyDateById(id);
            TastyDateItem availableTastyDateItem = optionalTastyDateItem.orElseThrow(() -> new NoSuchElementException("TastyDateItem with id: " + id + " does not exists!"));
            List<UserTimeVote> checkIfUserNameInList = availableTastyDateItem.getTimeVotes().stream().filter(timeVote -> timeVote.getDisplayedName().equals(userName)).toList();
            return checkIfUserNameInList.isEmpty();
        }
    }
    public boolean checkUserHasVotedRestaurant(Principal principal, String id) {
        if (principal==null) {
            return true;
        }
        else {
            String userName = principal.getName();
            Optional<TastyDateItem> optionalTastyDateItem = findTastyDateById(id);
            TastyDateItem availableTastyDateItem = optionalTastyDateItem.orElseThrow(() -> new NoSuchElementException("TastyDateItem with id: " + id + " does not exists!"));
            List<UserRestaurantVote> checkIfUserNameInList = availableTastyDateItem.getRestaurantVotes().stream().filter(restaurantVote -> restaurantVote.getDisplayedName().equals(userName)).toList();
            return checkIfUserNameInList.isEmpty();
        }
    }


    public TastyDateItem addVoteTimeItemToTastyDate(UserTimeVote timeVote, String tastyDateId) {
        //checking and updating the List of the UserVotes for the DateTimes
        Optional<TastyDateItem> optionalTastyDateItem = dateSettingsRepo.findById(tastyDateId);
        TastyDateItem availableTastyDateItem = optionalTastyDateItem.orElseThrow(() -> new NoSuchElementException("TastyDateItem with id: " + tastyDateId + " does not exists!"));
        List<UserTimeVote> tempList = availableTastyDateItem.getTimeVotes();

        if (tempList.isEmpty()) {
            tempList = new ArrayList<>();
        }
        List<UserTimeVote> checkList = tempList.stream().filter(eachVote -> eachVote.getDisplayedName().equals(timeVote.getDisplayedName())).toList();
        if (checkList.isEmpty()) {
            tempList.add(timeVote);
            availableTastyDateItem.setTimeVotes(tempList);
            dateSettingsRepo.save(availableTastyDateItem);
            //generate sums of voteResult
            boolean[] checksVoteItem = timeVote.getVotesPerDateTimeFromOneUser();
            int[] amount = new int[checksVoteItem.length];

            for (UserTimeVote item : tempList) {
                boolean[] checksItem = item.getVotesPerDateTimeFromOneUser();
                for (int i = 0; i < amount.length; i++) {
                    if (checksItem[i]) {
                        amount[i]++;
                    }
                }
            }
            availableTastyDateItem.setVotingResultsForOneDate(amount);
            return dateSettingsRepo.save(availableTastyDateItem);
        } else {
            throw new IllegalArgumentException("Eintrag bereits vorhanden");
        }
    }

    public TastyDateItem addVoteRestaurantCardToTastyDate(UserRestaurantVote restaurantVote, String tastyDateId) {

        //checking and updating the List of the UserVotes for the DateTimes
        Optional<TastyDateItem> optionalTastyDateItem = dateSettingsRepo.findById(tastyDateId);
        TastyDateItem availableTastyDateItem = optionalTastyDateItem.orElseThrow(() -> new NoSuchElementException("TastyDateItem with id: " + tastyDateId + " does not exists!"));
        List<UserRestaurantVote> tempList = availableTastyDateItem.getRestaurantVotes();

        if (tempList.isEmpty()) {
            tempList = new ArrayList<>();
        }
        List<UserRestaurantVote> checkList = tempList.stream().filter(eachVote -> eachVote.getDisplayedName().equals(restaurantVote.getDisplayedName())).toList();
        if (checkList.isEmpty()) {
            tempList.add(restaurantVote);
            availableTastyDateItem.setRestaurantVotes(tempList);
            dateSettingsRepo.save(availableTastyDateItem);

            //generate sums of voteResult
            boolean[] checksVoteItem = restaurantVote.getVotesPerRestaurantFromOneUser();
            int[] positiveAmount = new int[checksVoteItem.length];
            int[] negativeAmount = new int[checksVoteItem.length];
            for (UserRestaurantVote item : tempList) {
                boolean[] checksItem = item.getVotesPerRestaurantFromOneUser();
                for (int i = 0; i < checksVoteItem.length; i++) {
                    if (checksItem[i]) {
                        positiveAmount[i]++;
                    } else {
                        negativeAmount[i]++;
                    }
                }
            }
            availableTastyDateItem.setPositiveVotingResultsForOneRestaurant(positiveAmount);
            availableTastyDateItem.setNegativeVotingResultsForOneRestaurant(negativeAmount);

            return dateSettingsRepo.save(availableTastyDateItem);
        } else {
            throw new IllegalArgumentException("Eintrag bereits vorhanden");
        }
    }

}






