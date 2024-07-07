import { Link, Typography } from "@mui/material";

const Name = () => {
    return (
        <Typography fontSize={60}>
            <Link
                href="https://github.com/aesbube"
                sx={{
                    '@keyframes animationForwards': {
                        from: {
                            color: '#cecff5',
                            transition: 'color 0.5s',
                        },
                        to: {
                            color: '#7f7fb7',
                            transition: 'color 0.5s',
                        },
                    },
                    '@keyframes animationBackwards': {
                        from: {
                            color: '#7f7fb7',
                            transition: 'color 0.5s',
                        },
                        to: {
                            color: '#cecff5',
                            transition: 'color 0.5s',
                        },
                    },
                    '&:hover': {
                        animationName: 'animationForwards',
                        animationDuration: '1s',
                        animationFillMode: 'forwards',
                    },
                    animationName: 'animationBackwards',
                    animationDuration: '1s',
                    color: '#cecff5',
                    textDecoration: 'none',
                }}
                target='_blank'
            >
                @aesbube
            </Link>
        </Typography>
    );
};

export default Name;