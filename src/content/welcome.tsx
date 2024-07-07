import { Typography } from "@mui/material"

const Welcome = () => {
    return(
        <Typography fontSize={23} sx={{
            textAlign: 'center',
            marginTop: '10px',
            color: '#c4c5f5',
            textDecoration: 'none',
            '@media (max-width:900px)': {
                fontSize: '19px',
            },
            '@media (max-height:400px)': {
                fontSize: '19px',
            },
        }}>
            Hi, I'm Ljubica Damjanovikj and welcome to my space!
        </Typography>
    );
};

export default Welcome;