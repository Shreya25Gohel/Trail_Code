import React, { useEffect, useRef } from "react";
import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import gsap from "gsap";
import { LuCrown } from "react-icons/lu";
import { IoIosTrendingUp } from "react-icons/io";
import { IoSpeedometerOutline } from "react-icons/io5";




const HeroContainer = styled(Box)({
    textAlign: "left",
    padding: "20px 5%",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    color: "#4D3F43",
    borderRadius: '10px',
    // margin: '100px 10px 10px 10px',  
});

const HighlightText = styled("span")({
    fontWeight: "500",
    color: "#171314",
    display: "inline-block",
    position: "relative",
    fontSize: "50px",
});

const StatsCard = styled(Card)(({ theme }) => ({
    textAlign: "center",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    cursor: "pointer",
    background: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0px 6px 20px rgba(0,0,0,0.2)",
    },
}));

const ImageContainer = styled(Box)({
    width: "100%",
    borderRadius: "12px",
});

const TotalProjectsCard = () => {
    return (
        <Card sx={{
            backgroundColor: "#fff7f6", // Light pinkish background
            borderRadius: "12px",
            padding: "20px",
            border: "1px solid #ffe0e0", // Light border
            boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
            color: "#4a4a4a",
            textAlign: "left"
        }}>
            <CardContent>
                <Box display="flex" alignItems="center" gap={1}>
                    <Box sx={{
                        backgroundColor: "#fff0f0", // Lightest pink
                        padding: "8px",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        {/* <EmojiEventsIcon sx={{ fontSize: 24, color: "#d50000" }} /> */}
                        <LuCrown fontSize={24} />
                    </Box>
                </Box>
                <br />
                <Typography variant="body1" fontWeight="bold">Total Projects
                    <span style={{ marginLeft: 5 }}>
                        <IoIosTrendingUp fontSize={16} /> {' '} 8%
                    </span>
                </Typography>
                <Typography variant="h4" fontWeight="bold" sx={{ marginTop: "8px" }}>380+</Typography>
                <Typography variant="body2" sx={{ marginTop: "4px" }}>
                    Increase of <span style={{ color: "#d50000", }}>133</span> this month
                </Typography>
            </CardContent>
        </Card>
    );
};

const DedicatedServiceCard = () => {
    return (
        <Card sx={{
            backgroundColor: "#FAE3E7", // Light pinkish background
            borderRadius: "12px",
            padding: "20px",
            border: "1px solid #F8D5DB", // Light border
            boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
            color: "#4a4a4a",
            textAlign: "center",
            position: "relative",
            // backgroundImage: "url('/images/Vector.png')", // Path to your SVG
            backgroundSize: "cover", // Cover the whole card
            backgroundPosition: "center", // Center the image
            backgroundRepeat: "repeat" // Prevent repeating
        }}>
            <CardContent>
                <Box display="flex" alignItems="center" justifyItems="center" justifyContent="center" flexDirection="column" gap={1}>
                    <Typography variant="h4" fontWeight="bold" sx={{ marginTop: "8px", textAlign: "center" }}>6+</Typography>
                    <Typography fontSize={16}>
                        Years of <br /> Dedicated <br /> Service
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

const BoostProjectsCard = () => {
    return (
        <Card sx={{
            backgroundColor: "#1E070C", // Light pinkish background
            borderRadius: "12px",
            padding: "20px",
            border: "1px solid #1E070C", // Light border
            boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
            color: "#fff",
            textAlign: "left"
        }}>
            <CardContent>
                <Box display="flex" alignItems="center" gap={1}>
                    <Box sx={{
                        backgroundColor: "#1E070C", // Lightest pink
                        padding: "8px",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        {/* <EmojiEventsIcon sx={{ fontSize: 24, color: "#d50000" }} /> */}
                        <IoSpeedometerOutline fontSize={24} />
                    </Box>
                </Box>
                <br />
                <Typography style={{ fontSize: "14px" }}> Achieve Optimal
                    <br /> Efficiency and Boost <br />
                    Productivity
                </Typography>
            </CardContent>
        </Card>
    );
};


// const DedicatedServiceCard = () => {
//     return (
//         <Card sx={{
//             backgroundColor: "#FAE3E7", // Light pinkish background
//             borderRadius: "12px",
//             padding: "20px",
//             border: "1px solid #F8D5DB", // Light border
//             boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
//             color: "#4a4a4a",
//             textAlign: "center"
//         }}>
//             <CardContent>
//                 <Box display="flex" alignItems="center" justifyItems="center" justifyContent="center" flexDirection="column" gap={1}>
//                     <Typography variant="h4" fontWeight="bold" sx={{ marginTop: "8px", textAlign: "center" }}>6+</Typography>
//                     <Typography fontSize={16}>
//                         Years of <br /> Dedicated <br /> Service
//                     </Typography>
//                 </Box>
//                 <br />
//             </CardContent>
//         </Card>
//     );
// };

const Home = () => {
    const textRef = useRef(null);

    useEffect(() => {
        gsap.from(textRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
        });
    }, []);

    return (
        <>
            {/* <Container> */}
            <section style={{ borderRadius: 100, marginTop: 80, marginRight: 10, marginLeft: 10 }}>
                <br />
                <HeroContainer>
                    <Typography variant="h3" gutterBottom ref={textRef} sx={{ fontWeight: "normal", fontSize: "72px", color: '#4D3F43', width: '982px' }}>
                        Our Focus is on Providing Results That Surpass Your
                        <HighlightText>Expectations.</HighlightText>
                    </Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ maxWidth: 600, margin: "20px 0", fontSize: "1.2rem", color: "#666" }}>
                        We begin by deeply understanding your unique needs and objectives, enabling us to deliver tailored solutions that go beyond the ordinary.
                    </Typography>
                    <Button variant="contained" sx={{ background: "#d50000", color: "#fff", padding: "12px 24px", fontSize: "1rem", textTransform: "none" }}>
                        Get Started Today
                    </Button>
                    <Grid container spacing={3} justifyContent="flex-start" sx={{ marginTop: "40px" }}>
                        <Grid item xs={12} sm={6} md={3}>
                            <ImageContainer>
                                <img src="/images/image 17.png" alt="Hero" style={{ width: "80%", borderRadius: "12px", height: '53vh' }} />
                            </ImageContainer>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <StatsCard sx={{ background: "#1E070C", color: "#fff" }}>
                                <CardContent>
                                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>100+</Typography>
                                    <Typography variant="body2">Our Esteemed <br /> Clients</Typography>
                                </CardContent>
                            </StatsCard>
                            <br />
                            <DedicatedServiceCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TotalProjectsCard />
                            {/* <StatsCard sx={{ background: "#ffccbc", color: "#000" }}>
                        <CardContent>
                            <Typography variant="h5" sx={{ fontWeight: "bold" }}>380+</Typography>
                            <Typography variant="body2">Total Projects</Typography>
                        </CardContent>
                    </StatsCard> */}
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            {/* <StatsCard sx={{ background: "#d1c4e9", color: "#000" }}>
                        <CardContent>
                            <Typography variant="h5" sx={{ fontWeight: "bold" }}>6+</Typography>
                            <Typography variant="body2">Years of Dedicated Service</Typography>
                        </CardContent>
                    </StatsCard> */}
                            <BoostProjectsCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            {/* <StatsCard sx={{ background: "#ffab91", color: "#000" }}>
                        <CardContent>
                            <Typography variant="body2">Achieve Optimal Efficiency and Boost Productivity</Typography>
                        </CardContent>
                    </StatsCard> */}
                        </Grid>
                    </Grid>
                </HeroContainer>
            </section>
            <section>
                <h1>
                    Services
                </h1>
            </section>
            {/* </Container> */}
        </>
    );
};

export default Home;
