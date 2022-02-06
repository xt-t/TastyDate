import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import * as React from "react";

interface CategoryMenuProps {
    category: string
    setCategory: Function
}

export default function CategoryMenu({category, setCategory} : CategoryMenuProps) {

    return (
        <Box sx={{minWidth: 120}}>
            <FormControl fullWidth>
                <InputLabel className="inputCategoryRestaurant">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Category"
                    onChange={(event) => setCategory(event.target.value)}
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
    )
}