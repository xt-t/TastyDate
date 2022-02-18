import DisplayMenus from "../../components/general/DisplayMenus";
import React, {useContext, useEffect, useState} from "react";
import {TastyDateItem} from "../../models/result/TastyDateItem";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {getAllTastyDateItems} from "../../service/tastydate-api-service";
import {AuthContext} from "../../context/AuthProvider";


export default function OverviewTastyDateItems() {

    const {token}=useContext(AuthContext);

    const [selectedTastyDateId, setSelectedTastyDateId]=useState<string>();
    const [tastyDateItems, setTastyDateItems]=useState<TastyDateItem[]>([]);

    const handleChange = (event: SelectChangeEvent) => {
            setSelectedTastyDateId(event.target.value as string);
        };

    const getEveryTastyDateId = () => {
        getAllTastyDateItems(token)
            .then(response => setTastyDateItems(response.data))
    }

    useEffect(()=>(
        getEveryTastyDateId()
        //eslint-disable-next-line
    ),[])

return (
    <div>
            <DisplayMenus/>
        <div>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        value={selectedTastyDateId}
                        label="Age"
                        onChange={handleChange}
                    >
                        {tastyDateItems.map((tastyDateItem, index) => (
                          <MenuItem value={tastyDateItem.tastyDateId}>{tastyDateItem.infoTastyDate.pickedTastyDateName}</MenuItem>
                        ))
                        }
                    </Select>
                </FormControl>
            </Box>
        </div>
    </div>
)
    }