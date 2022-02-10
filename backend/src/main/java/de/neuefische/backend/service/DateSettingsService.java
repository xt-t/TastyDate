package de.neuefische.backend.service;

import de.neuefische.backend.model.DateSettingsItem;
import de.neuefische.backend.model.settingsSubModel.TimeVoteItem;
import de.neuefische.backend.repository.DateSettingsRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;


@Service
public class DateSettingsService {

    private final DateSettingsRepository dateSettingsRepo;

    public DateSettingsService(DateSettingsRepository dateSettingsRepo) {
        this.dateSettingsRepo = dateSettingsRepo;
    }

    public DateSettingsItem addDateSettings(DateSettingsItem settingsItem) {
        return dateSettingsRepo.save(settingsItem);
    }

    public DateSettingsItem changeVoteTimeInDateSettings(String tastyDateId, TimeVoteItem voteTime) {
        settingsRepo.
                replace(id, changedToDo);
        return changedToDo;
    }

    public Optional<DateSettingsItem> addVoteTimeItemToDateSettings(TimeVoteItem voteTime, String tastyDateId) {
//        if (findToDoById(changedToDo.getId()).isEmpty()) {
//            return Optional.empty();
//        }
//        return Optional.of(toDoRepo.changeToDo(changedToDo.getId(), changedToDo));
//    }
            try {
                DateSettingsItem settingsTemp = dateSettingsRepo.findById(tastyDateId).get();
                List<TimeVoteItem> listTemp = settingsTemp.getTimeVotes();
                listTemp.
                        add(voteTime);
                settingsTemp.setTimeVotes(listTemp);
                dateSettingsRepo.save(settingsTemp);

                dateSettingsRepo.save(voteTime, tastyDateId );

            public ToDo changeToDo(String id, ToDo changedToDo) {
                toDoRepo.replace(id, changedToDo);
                return changedToDo;
            }

        if (dateSettingsRepo.findById(tastyDateId).isEmpty()) {
            return Optional.empty();
        }
        return Optional.of(dateSettingsRepo.
                        findById(tastyDateId)



                    dateSettingsRepo.save(DateSettingsItem);
        }
        catch (IllegalArgumentException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "According DateSettingsItem doesn't exist");
        }
        }
        //Optional - existiert das SettingsItem? Fehlermeldung
        //zum Settingsitem das neue TimveVoteItem hinzufügen
        //Algorithmus
        //upgedatete Settingsitem in DB abspeichern
        //ganze Settingsitem zurückgeben

//        boolean[] checksVoteItem = voteTime.getVotedTimes();
//        int [] amount = new int[checksVoteItem.length];
//
//        List<TimeVoteItem> items = timerepository.findAll();
//
//        for (TimeVoteItem item:items) {
//            boolean[] checksItem = item.getVotedTimes();
//            for (int i=0; i < amount.length; i++) {
//                if (checksItem[i]) {
//                    amount[i]++;
//                }
//                }
//            }
//        voteTime.setSumIfVotedPerTime(amount);
    }

