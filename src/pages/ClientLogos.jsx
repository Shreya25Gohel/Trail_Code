import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const LogoImage = styled('img')({
    maxWidth: '100%',
    height: 'auto',
    filter: 'grayscale(100%)',
    transition: 'filter 0.3s ease',
    '&:hover': {
        filter: 'grayscale(0%)',
    },
});

const ClientLogos = () => {
    const logos = [
        // Add your logo URLs here
        '/logo1.png',
        '/logo2.png',
        // ...more logos
    ];

    return (
        <Grid container spacing={4} justifyContent="center">
            {logos.map((logo, index) => (
                <Grid item xs={6} sm={4} md={2} key={index}>
                    <LogoImage src={logo} alt={`Client ${index + 1}`} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ClientLogos;