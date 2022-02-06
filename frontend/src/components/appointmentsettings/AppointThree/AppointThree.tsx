import * as React from "react";
import AppointThreeAddRestaurant from "./AppointThreeAddRestaurant";
import AppointThreeDisplayRestaurant from "./AppointThreeDisplayRestaurant";
import {useState} from "react";
import {restaurantCard} from "../../../models/appointmentsettings/restaurantCard";


export default function AppointThree() {

    const [category, setCategory] = useState<string>("");
    const [postcode, setPostcode] = useState<number | null>(null);
    const [city, setCity] = useState<string | null>(null);
    const [restaurantName, setRestaurantName] = useState<string | null>(null);
    const [rating, setRating] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [id, setId] = useState<number>(1);

    const [restaurantData, setRestaurantData] = useState<restaurantCard[]>([]);

    const saveRestaurantData = () => {
        if ((category !== "") &&
            (postcode !== null) &&
            (city !== null) &&
            (restaurantName !== null) &&
            (rating !== 0) &&
            (price !== 0)
            ) {
            const newRestaurantData = {
                id: id,
                pickedCategory: category,
                pickedPostcode: postcode,
                pickedCity: city,
                pickedRestaurantName: restaurantName,
                pickedRating: rating,
                pickedPrice: price
            }
            setRestaurantData([...restaurantData, newRestaurantData]);
            setId(id + 1);
        }
    }

    const resetDataInput = () => {
        setCategory("");
        setRating(0);
        setPrice(0);
        setRestaurantName(null);
        setPostcode(null);
        setCity(null);
    }

    const deleteRestaurantCard = (id: number) => {
        setRestaurantData(restaurantData.filter(keepRestaurantCard => keepRestaurantCard.id !== id));
    }

    const deleteAllRestaurantCards = () => {
        setRestaurantData([]);
    }
        return (
            <div className="cardThree">
                <AppointThreeAddRestaurant
                    category={category}
                    setCategory={setCategory}
                    postcode={postcode}
                    setPostcode={setPostcode}
                    city={city}
                    setCity={setCity}
                    restaurantName={restaurantName}
                    setRestaurantName={setRestaurantName}
                    rating={rating}
                    setRating={setRating}
                    price={price}
                    setPrice={setPrice}
                    saveRestaurantData={saveRestaurantData}
                    resetDataInput={resetDataInput}
                />

                <AppointThreeDisplayRestaurant
                    restaurantData={restaurantData}
                    deleteRestaurantCard={deleteRestaurantCard}
                    deleteAllRestaurantCards={deleteAllRestaurantCards}
                />
            </div>
        )
}