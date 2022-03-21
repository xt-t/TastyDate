import DisplayMenus from "../../components/general/DisplayMenus";
import DisplayListRestaurants from "../../components/restaurants/DisplayListRestaurants";

export default function OverviewRestaurants() {

    return (
        <div>
            <div>
                <DisplayMenus/>
                <DisplayListRestaurants/>
            </div>
        </div>
    )
}