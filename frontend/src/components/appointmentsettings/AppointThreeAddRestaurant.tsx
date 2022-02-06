import AppointThreeSearchRestaurant from "./AppointThreeSearchRestaurant";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import {
    Box,
    Card,
    CardContent,
    Fab,
    FormControl,
    InputLabel,
    MenuItem,
    Rating,
    Select, SelectChangeEvent,
    styled,
    Typography
} from "@mui/material";
import TextField from "@mui/material/TextField";
import "./Appoint.scss"
import EuroIcon from '@mui/icons-material/Euro';

export default function AppointThreeAddRestaurant() {
    const [category, setCategory] = React.useState('');
    const [rating, setRating] = React.useState(0);

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value);
    };

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: 'hsl(222, 100%, 50%)',
        },
        '& .MuiRating-iconHover': {
            color: 'hsl(222, 100%, 41%)',
        },
    });

    return (
        <Box >
        <Card>
            <CardContent className="formRestaurant">
                <h2>Choose your restaurant</h2>
                <TextField
                    required
                    id="standard-required"
                    label="Restaurant name"
                    variant="standard"
                    className="formelements"
                />
                <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel className="inputCategoryRestaurant">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Category"
                        onChange={handleChange}
                    >
                        <MenuItem value="Burger">Burger</MenuItem>
                        <MenuItem value="Chinesisch">Chinesisch</MenuItem>
                        <MenuItem value="Deutsch">Deutsch</MenuItem>
                        <MenuItem value="Griechisch">Griechisch</MenuItem>
                        <MenuItem value="Italienisch">Italienisch</MenuItem>
                        <MenuItem value="Japanisch">Japanisch</MenuItem>
                        <MenuItem value="Mexikanisch">Mexikanisch</MenuItem>
                        <MenuItem value="Türkisch">Türkisch</MenuItem>
                        <MenuItem value="Vegan">Vegan</MenuItem>
                        <MenuItem value="Vietnamesisch">Vietnamesisch</MenuItem>

                    </Select>
                </FormControl>
                </Box>

                <div>
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                >
                <Typography component="legend">Your rating</Typography>
                <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newRating) => {
                        if (typeof newRating === "number") {
                        setRating(newRating);
                        }
                    }}
                />
                </Box>

                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                >
                <Typography component="legend">Price</Typography>
                <StyledRating
                    name="customized-color"
                    defaultValue={0}
                    getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    precision={0.5}
                    max={3}
                    icon={<EuroIcon fontSize="inherit" />}
                    emptyIcon={<EuroIcon fontSize="inherit" />}
                />
                </Box>
                </div>

                <div>
                    <TextField
                        required
                        id="standard-required"
                        label="Postcode"
                        variant="standard"
                        className="formelements"
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="City"
                        variant="standard"
                        className="formelements"
                    />
                </div>

                <div className="menuIcons">
        <AppointThreeSearchRestaurant/>
        <Fab color="primary" aria-label="add">
            <AddIcon/>
        </Fab>
                </div>
            </CardContent>
        </Card>
    </Box>
)

}