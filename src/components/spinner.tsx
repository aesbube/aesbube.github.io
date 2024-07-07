import { Box, CircularProgress } from "@mui/material";

const Spinner = () => {
    return (
        <Box sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            height: '100vh',
        }}>
            <CircularProgress />
        </Box>
    );
};

export default Spinner;