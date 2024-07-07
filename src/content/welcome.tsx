import { Typography } from "@mui/material"

const Welcome = () => {
    return(
        <Typography fontSize={23} sx={{
            textAlign: 'center',
            marginTop: '10px',
            color: '#9393c9',
            textDecoration: 'none',
        }}>
            Hi, I'm Ljubica Damjanovikj and welcome to my space!
        </Typography>
    );
};

export default Welcome;