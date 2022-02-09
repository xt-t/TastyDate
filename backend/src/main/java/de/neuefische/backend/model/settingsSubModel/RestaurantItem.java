package de.neuefische.backend.model.settingsSubModel;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor

    public class RestaurantItem {

        private int id;
        private String pickedCategory;
        private int pickedPostcode;
        private String pickedCity;
        private String pickedRestaurantName;
        private int pickedRating;
        private int pickedPrice;

    }
