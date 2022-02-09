package de.neuefische.backend.service;

import de.neuefische.backend.model.TimeVoteItem;
import de.neuefische.backend.repository.TimeVoteRepository;
import org.springframework.stereotype.Service;

@Service
public class VoteService {

    TimeVoteRepository timerepository;

    public VoteService(TimeVoteRepository timerepository) {
        this.timerepository = timerepository;
    }

    public TimeVoteItem addVoteTimeItem(TimeVoteItem voteTime) {
        return timerepository.save(voteTime);
    }
}
