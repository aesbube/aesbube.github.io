import { Typography } from "@mui/material";
import Birthday from "../birthday";

const Age = () => {
    const birthDate = new Date(Birthday);
    const currDate = new Date();

    const age = Math.floor((currDate.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25));

    return (
        <Typography fontSize={21} sx={{
            textAlign: 'center',
            marginTop: '10px',
            color: '#9393c9',
            textDecoration: 'none',
        }}>
            {age} years old
        </Typography>
    );
};

export default Age;