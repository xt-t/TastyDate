import AppointThreeSearchRestaurant from "./AppointThreeSearchRestaurant";
import AddIcon from "@mui/icons-material/Add";
import {Box, Card, CardContent} from "@mui/material";
import TextField from "@mui/material/TextField";
import "../Appoint.scss"
import CategoryMenu from "./CategoryMenu";
import RestaurantRating from "./RestaurantRating";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

interface AppointThreeAddRestaurantProps {
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
    saveRestaurantData: Function,
    resetDataInput: Function
}

export default function AppointThreeAddRestaurant(
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
        saveRestaurantData,
        resetDataInput
    }: AppointThreeAddRestaurantProps
) {


    return (
        <Box>
            <Card>
                <CardContent className="formRestaurant">

                    <h3>Add your restaurant</h3>

                    <CategoryMenu category={category} setCategory={setCategory}/>

                    <div>
                        <TextField
                            required
                            id="standard-required"
                            label="Postcode"
                            variant="standard"
                            className="formelements"
                            value={postcode}
                            onChange={(event) => {
                                setPostcode(parseInt(event.target.value));
                            }
                            }
                        />
                        <TextField
                            required
                            id="standard-required"
                            label="City"
                            variant="standard"
                            className="formelements"
                            value={city}
                            onChange={(event) => {
                                setCity(event.target.value);
                            }
                            }
                        />
                    </div>

                    <TextField
                        required
                        id="standard-required"
                        label="Restaurant name"
                        variant="standard"
                        className="formelements"
                        value={restaurantName}
                        onChange={(event) => {
                            setRestaurantName(event.target.value);
                        }}
                    />

                    <RestaurantRating rating={rating} setRating={setRating} price={price} setPrice={setPrice}/>

                    <Box className="menuIcons">
                        <AppointThreeSearchRestaurant/>
                        <Button variant="outlined" onClick={() => resetDataInput()}> <RestartAltIcon/> Reset
                        </Button>
                        <Button variant="contained" onClick={() => saveRestaurantData()}> <AddIcon/> Add </Button>

                    </Box>
                </CardContent>
            </Card>
        </Box>
    )

}