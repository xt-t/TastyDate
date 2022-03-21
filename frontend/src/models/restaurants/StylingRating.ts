import {Rating, styled} from "@mui/material";

export const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: 'hsl(222, 100%, 50%)',
    },
    '& .MuiRating-iconHover': {
        color: 'hsl(222, 100%, 41%)',
    },
});