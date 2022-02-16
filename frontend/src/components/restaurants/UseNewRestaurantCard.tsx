import {useState} from "react";

export default function UseNewRestaurantCard() {

    const [id, setId] = useState<string>("");
    const [cardCreator, setCardCreator] = useState<string>("");
    const [restaurantName, setRestaurantName] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [rating, setRating] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [postcode, setPostcode] = useState<number>(0);
    const [city, setCity] = useState<string>("");

    const resetRestaurantCardInput = () => {
            setRestaurantName("");
            setCategory("");
            setRating(0);
            setPrice(0);
        setPostcode(0);
            setCity("");
    }

    return {
        newRestaurantCard: {
            id, setId,
            cardCreator, setCardCreator,
            restaurantName, setRestaurantName,
            category, setCategory,
            rating, setRating,
            price, setPrice,
            postcode, setPostcode,
            city, setCity
        },
        resetRestaurantCardInput
    }
}