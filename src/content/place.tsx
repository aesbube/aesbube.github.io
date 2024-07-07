import { Typography } from "@mui/material"

const Place = () => {
    return (<Typography fontSize={21} sx={{
        color: '#c4c5f5',
        textDecoration: 'none',
        '@media (max-width:900px)': {
            fontSize: '17px',
        },
        '@media (max-height:400px)': {
            fontSize: '17px',
        },
    }}>
        Skopje, North Macedonia
    </Typography>
    );
};

export default Place;