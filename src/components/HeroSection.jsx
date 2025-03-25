import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const HeroWrapper = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/hero-bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
    }
}));

const ScrollDown = styled(Box)(({ theme }) => ({
    position: 'absolute',
    bottom: theme.spacing(4),
    left: '50%',
    transform: 'translateX(-50%)',
    animation: 'bounce 2s infinite',
    cursor: 'pointer',
    '@keyframes bounce': {
        '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0) translateX(-50%)',
        },
        '40%': {
            transform: 'translateY(-30px) translateX(-50%)',
        },
        '60%': {
            transform: 'translateY(-15px) translateX(-50%)',
        },
    },
}));

const HeroContent = styled(Box)(({ theme }) => ({
    position: 'relative',
    zIndex: 1,
    '& h1': {
        fontSize: '5rem',
        fontWeight: 700,
        marginBottom: theme.spacing(3),
        lineHeight: 1.2,
        [theme.breakpoints.down('md')]: {
            fontSize: '3.5rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.5rem',
        },
    },
    '& h2': {
        fontSize: '1.5rem',
        fontWeight: 400,
        marginBottom: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem',
        },
    }
}));

const StyledButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(2, 4),
    fontSize: '1.2rem',
    borderRadius: 0,
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: '0 4px 20px rgba(255, 0, 0, 0.25)',
    }
}));

const HeroSection = () => {
    const handleScrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <HeroWrapper>
            <Container maxWidth="lg">
                <HeroContent>
                    <Typography variant="h1" component="h1">
                        GO BEYOND<br />
                        YOUR<br />
                        <Box component="span" sx={{ color: 'primary.main' }}>
                            EXPECTATIONS
                        </Box>
                    </Typography>
                    <Typography variant="h2" component="h2">
                        STRATEGIC DIGITAL SOLUTIONS FOR YOUR BUSINESS
                    </Typography>
                    <StyledButton
                        variant="contained"
                        color="primary"
                        size="large"
                    >
                        OUR SERVICES
                    </StyledButton>
                </HeroContent>
            </Container>
            <ScrollDown onClick={handleScrollDown}>
                <KeyboardArrowDownIcon
                    sx={{
                        fontSize: '3rem',
                        color: 'white',
                        opacity: 0.8
                    }}
                />
            </ScrollDown>
        </HeroWrapper>
    );
};

export default HeroSection;