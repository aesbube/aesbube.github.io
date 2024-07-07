import { Link, Typography } from "@mui/material"

const Introduction = () => {
    return (
        <Typography fontSize={21} sx={{
            textAlign: 'center',
            color: '#9393c9',
            textDecoration: 'none',
        }}>
            Software Engineering student @{' '}
            <Link
                href="https://www.finki.ukim.mk/"
                sx={{
                    '@keyframes animationForwards': {
                        from: {
                            color: '#cecff5',
                            transition: 'color 0.5s',
                        },
                        to: {
                            color: '#ffffff',
                            transition: 'color 0.5s',
                        },
                    },
                    '@keyframes animationBackwards': {
                        from: {
                            color: '#ffffff',
                            transition: 'color 0.5s',
                        },
                        to: {
                            color: '#cecff5',
                            transition: 'color 0.5s',
                        },
                    },
                    '&:hover': {
                        textDecoration: 'underline',
                        animationName: 'animationForwards',
                        animationDuration: '0.5s',
                        animationFillMode: 'forwards',
                    },
                    animationName: 'animationBackwards',
                    animationDuration: '1s',
                    color: '#cecff5',
                    textDecoration: 'none',
                }}
                target='_blank'
            >
                FINKI
            </Link>
        </Typography>
    );
};

export default Introduction;