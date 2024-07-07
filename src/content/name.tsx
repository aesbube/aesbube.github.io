import { Link, Typography } from "@mui/material";

const Name = () => {
    return (
        <Typography fontSize={60}>
            <Link
                href="https://github.com/aesbube"
                sx={{
                    color: '#cecff5',
                    textDecoration: 'none',
                    transition: 'color 1s ease',
                    '&:hover': {
                        color: '#7f7fb7',
                    },
                    '@media (max-width:900px)': {
                        fontSize: '40px',
                    },
                    '@media (max-height:400px)': {
                        fontSize: '40px',
                    },
                }}
                target='_blank'
            >
                @aesbube
            </Link>
        </Typography>
    );
};

export default Name;