import DisplayMenus from "../../components/general/DisplayMenus";
import DisplayRestaurants from "../../components/restaurants/DisplayRestaurants";

export default function OverviewRestaurants() {

    return (
        <div>
            <div>
                <DisplayMenus/>
                <DisplayRestaurants/>
            </div>
        </div>
    )
}