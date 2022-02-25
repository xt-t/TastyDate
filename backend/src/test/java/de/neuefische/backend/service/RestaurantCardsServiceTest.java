package de.neuefische.backend.service;

import de.neuefische.backend.model.RestaurantCard;
import de.neuefische.backend.repository.RestaurantCardsRepository;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class RestaurantCardsServiceTest {

    private final RestaurantCardsRepository restaurantCardsRepository = mock(RestaurantCardsRepository.class);
    private final RestaurantCardsService restaurantCardsService = new RestaurantCardsService(restaurantCardsRepository);

    @Test
    void getEveryRestaurantCard() {
        //GIVEN
        //WHEN
        //THEN
    }

    @Test
    void findRestaurantCardById() {
        //GIVEN
        RestaurantCard expected = RestaurantCard.builder()
                .id("testId")
                .cardCreator("testCreator")
                .category("testCategory")
                .rating(3)
                .price(2)
                .city("testCity")
                .postcode(55555)
                .build();

        when(restaurantCardsRepository.findById("testId")).thenReturn(Optional.of(expected));
        //WHEN
        Optional<RestaurantCard> actual = restaurantCardsService.findRestaurantCardById("testId");
        //THEN
        assertThat(actual, Matchers.is(Optional.of(expected)));
    }

    @Test
    void findRestaurantCardByNotExistingId() {
        //GIVEN
        RestaurantCard expected = RestaurantCard.builder()
                .id("testId")
                .cardCreator("testCreator")
                .category("testCategory")
                .rating(3)
                .price(2)
                .city("testCity")
                .postcode(55555)
                .build();

        when(restaurantCardsRepository.findById("testId")).thenReturn(Optional.of(expected));
        when(restaurantCardsRepository.findById("wrongId")).thenReturn(Optional.empty());
        //WHEN
        Optional<RestaurantCard> actual = restaurantCardsService.findRestaurantCardById("wrongId");
        //THEN
        assertThat(actual, Matchers.is(Optional.empty()));
    }

    @Test
    void findRestaurantCardByNullId() {
        //GIVEN
        RestaurantCard expected = RestaurantCard.builder()
                .id("testId")
                .cardCreator("testCreator")
                .category("testCategory")
                .rating(3)
                .price(2)
                .city("testCity")
                .postcode(55555)
                .build();

        when(restaurantCardsRepository.findById("testId")).thenReturn(Optional.of(expected));
        when(restaurantCardsRepository.findById(null)).thenThrow(new IllegalArgumentException());
        //WHEN
        try {
            restaurantCardsService.findRestaurantCardById(null);
            fail();
        }
        //THEN
        catch (IllegalArgumentException e) {

        }
    }

}