import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const DarkWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.dark,
    color: '#fff',
    padding: theme.spacing(12, 0),
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(45deg, rgba(255,0,0,0.05) 0%, rgba(0,0,0,0) 100%)',
    }
}));

const ContentWrapper = styled(motion.div)(({ theme }) => ({
    position: 'relative',
    zIndex: 1,
}));

const AccentText = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 600,
    marginBottom: theme.spacing(2),
}));

const DarkSection = () => {
    return (
        <DarkWrapper>
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <ContentWrapper
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <AccentText variant="h6">
                                DIGITAL TRANSFORMATION
                            </AccentText>
                            <Typography variant="h2" gutterBottom sx={{
                                fontWeight: 700,
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                                lineHeight: 1.2,
                            }}>
                                EMPOWERING<br />
                                DIGITAL GROWTH
                            </Typography>
                        </ContentWrapper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ContentWrapper
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Typography variant="body1" sx={{
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                                opacity: 0.9,
                            }}>
                                We are a leading creative company that delivers customized digital solutions.
                                We create content to encourage and nurture your digital presence, helping you
                                achieve your business goals.
                            </Typography>
                            <Box sx={{ mt: 4, display: 'flex', gap: 4 }}>
                                <Box>
                                    <Typography variant="h3" color="primary.main" fontWeight="bold">
                                        250+
                                    </Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                        Projects Completed
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h3" color="primary.main" fontWeight="bold">
                                        95%
                                    </Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                        Client Satisfaction
                                    </Typography>
                                </Box>
                            </Box>
                        </ContentWrapper>
                    </Grid>
                </Grid>
            </Container>
        </DarkWrapper>
    );
};

export default DarkSection;