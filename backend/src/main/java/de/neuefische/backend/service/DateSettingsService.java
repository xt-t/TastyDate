package de.neuefische.backend.service;

import de.neuefische.backend.BackendApplication;
import de.neuefische.backend.model.TastyDateItem;
import de.neuefische.backend.model.settingsSubModel.UserTimeVote;
import de.neuefische.backend.repository.DateSettingsRepository;
import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;


@Service
public class DateSettingsService {

    private final DateSettingsRepository dateSettingsRepo;
    private static final Log LOG = LogFactory.getLog(BackendApplication.class);

    public DateSettingsService(DateSettingsRepository dateSettingsRepo) {
        this.dateSettingsRepo = dateSettingsRepo;
    }

    public TastyDateItem addDateSettings(TastyDateItem settingsItem) {
        UUID uuid = UUID.randomUUID();
        settingsItem.setTastyDateId(uuid.toString());
        settingsItem.setTimeVotes(new ArrayList<>());
        return dateSettingsRepo.save(settingsItem);
    }

    public Optional<TastyDateItem> addVoteTimeItemToTastyDate(UserTimeVote timeVote, String tastyDateId) {
        if (dateSettingsRepo.findById(tastyDateId).isEmpty()) {
            return Optional.empty();
        }
        LOG.info(timeVote);
        TastyDateItem test = dateSettingsRepo.findById(tastyDateId).get();
        LOG.info(test);
        List<UserTimeVote> tempList = test.getTimeVotes();
        LOG.info(tempList);
        tempList.add(timeVote);
        LOG.info(tempList);
        test.setTimeVotes(tempList);
        LOG.info(tempList);
        dateSettingsRepo.save(test);



        boolean[] checksVoteItem = timeVote.getVotedTimes();
        int [] amount = new int[checksVoteItem.length];

        for (UserTimeVote item:tempList) {
            boolean[] checksItem = item.getVotedTimes();
            for (int i=0; i < amount.length; i++) {
                if (checksItem[i]) {
                    amount[i]++;
                }
                }
            }
        test.setVoteResults(amount);
        dateSettingsRepo.save(test);

        return dateSettingsRepo.findById(tastyDateId);
    }
}


//
//    public Optional<TastyDateItem> addVoteTimeItemToDateSettings(TimeVoteItem voteTime, String tastyDateId) {
////        if (findToDoById(changedToDo.getId()).isEmpty()) {
////            return Optional.empty();
////        }
////        return Optional.of(toDoRepo.changeToDo(changedToDo.getId(), changedToDo));
////    }
//            try {
//                TastyDateItem settingsTemp = dateSettingsRepo.findById(tastyDateId).get();
//                List<TimeVoteItem> listTemp = settingsTemp.getTimeVotes();
//                listTemp.
//                        add(voteTime);
//                settingsTemp.setTimeVotes(listTemp);
//                dateSettingsRepo.save(settingsTemp);
//
//                dateSettingsRepo.save(voteTime, tastyDateId );
//
//            public ToDo changeToDo(String id, ToDo changedToDo) {
//                toDoRepo.replace(id, changedToDo);
//                return changedToDo;
//            }
//
//        if (dateSettingsRepo.findById(tastyDateId).isEmpty()) {
//            return Optional.empty();
//        }
//        return Optional.of(dateSettingsRepo.
//                        findById(tastyDateId)
//
//
//
//                    dateSettingsRepo.save(TastyDateItem);
//        }
//        catch (IllegalArgumentException e) {
//            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "According TastyDateItem doesn't exist");
//        }
//        }
        //Optional - existiert das SettingsItem? Fehlermeldung
        //Algorithmus
        //upgedatete Settingsitem in DB abspeichern
        //ganze Settingsitem zurückgeben





