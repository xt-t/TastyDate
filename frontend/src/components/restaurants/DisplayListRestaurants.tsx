import "./Restaurants.scss"
import {useState} from "react";
import {RestaurantCard} from "../../models/restaurants/RestaurantCard";
import RestaurantCardItem from "./RestaurantCardItem";


export default function DisplayListRestaurants() {
const [restaurantCards, setRestaurantCards] = useState<RestaurantCard[]>([{id: 1,
    restaurantName: "test",
    category: "Deutsch",
    rating: 2,
    price: 1,
    postcode: 12343,
    city: "Köln"}]);

    // const addRestaurant = ()
    // const editRestaurant = ()
    // const removeRestaurant = ()
    // const remove all = ()


    return (
        <div className="cardListBox">
            <section className="card-list">
                {restaurantCards.map((restaurantCard, index) => (
                    <RestaurantCardItem restaurantCard={restaurantCard}/>
                ))}
            </section>
        </div>
    )
}