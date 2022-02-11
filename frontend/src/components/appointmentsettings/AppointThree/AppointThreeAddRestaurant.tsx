import AppointThreeSearchRestaurant from "./AppointThreeSearchRestaurant";
import AddIcon from "@mui/icons-material/Add";
import {Box, Card, CardContent} from "@mui/material";
import TextField from "@mui/material/TextField";
import "../Appoint.scss"
import CategoryMenu from "./CategoryMenu";
import RestaurantRating from "./RestaurantRating";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import {AppointThreeType} from "../../../models/appointmentsettings/UseStateAppointStepTypes";

interface AppointThreeAddRestaurantProps {
    appointThree: AppointThreeType
    saveRestaurantData: Function
    resetDataInput: Function
}

export default function AppointThreeAddRestaurant(
    {
        appointThree,
        saveRestaurantData,
        resetDataInput
    }: AppointThreeAddRestaurantProps
) {


    return (
        <Box>
            <Card>
                <CardContent className="formRestaurant">

                    <h3>Add your restaurant</h3>

                    <CategoryMenu category={appointThree.category} setCategory={appointThree.setCategory}/>

                    <div>
                        <TextField
                            required
                            id="standard-required"
                            label="Postcode"
                            variant="standard"
                            className="formelements"
                            value={appointThree.postcode}
                            onChange={(event) => {
                                appointThree.setPostcode(parseInt(event.target.value));
                            }
                            }
                        />
                        <TextField
                            required
                            id="standard-required"
                            label="City"
                            variant="standard"
                            className="formelements"
                            value={appointThree.city}
                            onChange={(event) => {
                                appointThree.setCity(event.target.value);
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
                        value={appointThree.restaurantName}
                        onChange={(event) => {
                            appointThree.setRestaurantName(event.target.value);
                        }}
                    />

                    <RestaurantRating rating={appointThree.rating} setRating={appointThree.setRating} price={appointThree.price} setPrice={appointThree.setPrice}/>

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