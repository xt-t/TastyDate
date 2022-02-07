import * as React from "react";
import AppointThreeAddRestaurant from "./AppointThreeAddRestaurant";
import AppointThreeDisplayRestaurant from "./AppointThreeDisplayRestaurant";
import {dataPickedRestaurant} from "../../../models/appointmentsettings/dataPickedRestaurant";

interface AppointThreeProps {
    category: string,
    setCategory: Function,
    rating: number,
    setRating: Function,
    price: number,
    setPrice: Function,
    restaurantName: string | null,
    setRestaurantName: Function,
    postcode: number | null,
    setPostcode: Function,
    city: string | null,
    setCity: Function
    idPickedRestaurant: number
    setIdPickedRestaurant: Function
    restaurantData: dataPickedRestaurant[]
    setRestaurantData: Function
}

export default function AppointThree(
    {
        category,
        setCategory,
        rating,
        setRating,
        price,
        setPrice,
        restaurantName,
        setRestaurantName,
        postcode,
        setPostcode,
        city,
        setCity,
        idPickedRestaurant,
        setIdPickedRestaurant,
        restaurantData,
        setRestaurantData
    }: AppointThreeProps) {


    const saveRestaurantData = () => {
        if ((category !== "") &&
            (postcode !== null) &&
            (city !== null) &&
            (restaurantName !== null) &&
            (rating !== 0) &&
            (price !== 0)
        ) {
            const newRestaurantData = {
                id: idPickedRestaurant,
                pickedCategory: category,
                pickedPostcode: postcode,
                pickedCity: city,
                pickedRestaurantName: restaurantName,
                pickedRating: rating,
                pickedPrice: price
            }
            setRestaurantData([...restaurantData, newRestaurantData]);
            setIdPickedRestaurant(idPickedRestaurant + 1);
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