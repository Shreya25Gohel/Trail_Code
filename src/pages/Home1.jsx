import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Button, Container, Divider, IconButton, ListItem, ListItemText, List, Paper } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Footer from "../components/Footer/Footer";
import { SERVER_Image_URL, SERVER_URL } from "./Constant";

const logos = [
    { id: 1, src: "/images/image 19.png", alt: "Company 1" },
    { id: 2, src: "/images/image 19.png", alt: "Company 2" },
    { id: 3, src: "/images/image 19.png", alt: "Company 3" },
    { id: 4, },
    { id: 5, src: "/images/image 19.png", alt: "Company 5" },
    { id: 6, },
    { id: 7, },
    { id: 8, src: "/images/image 19.png", alt: "Company 8" },
    { id: 9, src: "/images/image 19.png", alt: "Company 9" },
    { id: 10, },
    { id: 11, },
    { id: 12, },
    { id: 13, },
    { id: 14, src: "/images/image 19.png", alt: "Company 14" },
    { id: 15, src: "/images/image 19.png", alt: "Company 15" },
    { id: 16, },
    { id: 17, src: "/images/image 19.png", alt: "Company 17" },
    { id: 18, },
    { id: 19, src: "/images/image 19.png", alt: "Company 19" },
    { id: 20, src: "/images/image 19.png", alt: "Company 20" },
    { id: 21, src: "/images/image 19.png", alt: "Company 21" },
    { id: 22, src: "/images/image 19.png", alt: "Company 22" },
    // { id: 23, src: "/images/image 19.png", alt: "Company 23" },
    // { id: 24, src: "/images/image 19.png", alt: "Company 24" },
    // { id: 25, src: "/images/image 19.png", alt: "Company 25" },
];

const testimonials = [
    {
        id: 1,
        name: "Jason Taylor",
        feedback: "They co-designed and developed our website for our photo and video work. We had very specific design requirements due to the specific kind of content, but we also needed flexibility to be able to add content to the site independently. Trail Code very patiently went through all our specific requests and created a site from scratch that proved to be a perfect tailor-made solution for us."
    },
    {
        id: 2,
        name: "Emily Johnson",
        feedback: "Trail Code provided excellent service and expertise. They understood our needs and delivered beyond expectations. Highly recommended!"
    },
    {
        id: 3,
        name: "John Deo",
        feedback: "They co-designed and developed our website for our photo and video work. We had very specific design requirements due to the specific kind of content, but we also needed flexibility to be able to add content to the site independently. Trail Code very patiently went through all our specific requests and created a site from scratch that proved to be a perfect tailor-made solution for us."
    },
];


const Home1 = () => {

    const sectionRef = useRef(null);

    const [services, setServices] = useState([]);
    // const [products, setProducts] = useState([]);
    const [about, setAbout] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [products, setProducts] = useState([]);
    const [activeProduct, setActiveProduct] = useState(null);
    const [clients, setClients] = useState([]);
    const [activeClient, setActiveClient] = useState(null);


    const isMobile = window.innerWidth < 768;


    useEffect(() => {
        fetch(`${SERVER_URL}/services.php`) // Append the endpoint dynamically
            .then((response) => response.json())
            .then((data) => setServices(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    useEffect(() => {
        fetch(`${SERVER_URL}/products.php`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                if (data.length > 0) setActiveProduct(data[0]);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    useEffect(() => {
        fetch(`${SERVER_URL}/about.php`) // Append the endpoint dynamically
            .then((response) => response.json())
            .then((data) => setAbout(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    useEffect(() => {
        fetch(`${SERVER_URL}/testimonials.php`) // Append the endpoint dynamically
            .then((response) => response.json())
            .then((data) => setTestimonials(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    useEffect(() => {
        fetch(`${SERVER_URL}/clients.php`)
            .then((response) => response.json())
            .then((data) => {
                setClients(data);
                if (data.length > 0) setActiveClient(data[0]);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    useEffect(() => {
        gsap.from(sectionRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
        });
    }, []);

    return (
        <>

            {/* Hero Section */}
            {/* <section className="section">
                <Container>
                    <Box sx={{ paddingTop: "20px" }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexWrap: "wrap", // Ensures proper wrapping on smaller screens
                            }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: "300",
                                    color: "#4D3F43",
                                    fontSize: { xs: "32px", sm: "60px", md: "160px" },
                                    textAlign: { xs: "center", md: "left" }, // Center align on small screens
                                    width: { xs: "100%", md: "auto" }, // Full width on mobile
                                }}
                            >
                                GO <span style={{ color: "#4D3F43", fontWeight: "600" }}>BEYOND</span>
                            </Typography>
                            <Box
                                component="img"
                                src="images/hero_1.png"
                                alt="Office Interior"
                                sx={{
                                    width: { xs: 80, sm: 120, md: 160 },
                                    height: { xs: 60, sm: 100, md: 160 },
                                    borderRadius: 2,
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: { xs: "20px", md: "40px" },
                                flexWrap: "wrap",
                                mt: 2,
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: "medium",
                                    color: "#4D3F43",
                                    fontSize: { xs: "28px", sm: "60px", md: "160px" },
                                    textAlign: "center",
                                }}
                            >
                                YOUR
                            </Typography>
                            <Box
                                component="img"
                                src="images/hero_2.png"
                                alt="Workspace"
                                sx={{
                                    width: { xs: 80, sm: 200, md: 452 },
                                    height: { xs: 80, sm: 150, md: 210 },
                                    borderRadius: 2,
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                mt: 2,
                            }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: "bold",
                                    color: "#D71635",
                                    fontSize: { xs: "32px", sm: "60px", md: "160px" },
                                }}
                            >
                                EXPECTATIONS
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mt: 3,
                                flexWrap: "wrap",
                                justifyContent: "center",
                                gap: 2,
                            }}
                        >
                            <Button
                                variant="outlined"
                                sx={{
                                    borderRadius: 8,
                                    px: { xs: 2, sm: 3, md: 4 },
                                    py: 1,
                                    color: "#D71635",
                                    fontWeight: "bold",
                                    borderColor: "#D71635",
                                    textTransform: "inherit",
                                    transition: "all 0.3s ease-in-out",
                                    "&:hover": {
                                        backgroundColor: "#D71635",
                                        color: "#fff",
                                        borderColor: "#D71635",
                                    },
                                }}
                            >
                                Let’s Connect
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderRadius: "50%",
                                    width: { xs: 36, sm: 40, md: 50 },
                                    height: { xs: 36, sm: 40, md: 50 },
                                    minWidth: { xs: 36, sm: 40, md: 50 },
                                    p: 1,
                                    color: "#D71635",
                                    borderColor: "#D71635",
                                    transition: "all 0.3s ease-in-out",
                                    "&:hover": {
                                        backgroundColor: "#D71635",
                                        color: "#fff",
                                        borderColor: "#D71635",
                                    },
                                }}
                            >
                                <ArrowOutwardIcon />
                            </Button>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
                            <Box
                                sx={{
                                    width: "100%",
                                    height: "2px",
                                    backgroundColor: "#CFC4C9",
                                }}
                            />
                        </Box>
                    </Box>
                </Container>
            </section> */}
            <section className="section">
                <Container>
                    <Box sx={{ pt: 3, px: { xs: 2, sm: 4, md: 6 } }}>
                        {/* First Line */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexWrap: "wrap",
                                gap: { xs: 2, md: 4 },
                                textAlign: "center",
                            }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 300,
                                    color: "#4D3F43",
                                    fontSize: { xs: "40px", sm: "80px", md: "120px" },
                                    textAlign: "center",
                                }}
                            >
                                GO <span style={{ fontWeight: 600 }}>BEYOND</span>
                            </Typography>
                            <Box
                                component="img"
                                src="images/hero_1.png"
                                alt="Office Interior"
                                sx={{
                                    width: { xs: 80, sm: 120, md: 160 },
                                    height: "auto",
                                    borderRadius: 2,
                                }}
                            />
                        </Box>

                        {/* Second Line */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", sm: "row" },
                                alignItems: "center",
                                justifyContent: "center",
                                gap: { xs: 2, md: 4 },
                                mt: 3,
                                textAlign: "center",
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: "medium",
                                    color: "#4D3F43",
                                    fontSize: { xs: "32px", sm: "80px", md: "120px" },
                                }}
                            >
                                YOUR
                            </Typography>
                            <Box
                                component="img"
                                src="images/hero_2.png"
                                alt="Workspace"
                                sx={{
                                    width: { xs: "80%", sm: "50%", md: "40%" },
                                    maxWidth: 452,
                                    height: "auto",
                                    borderRadius: 2,
                                }}
                            />
                        </Box>

                        {/* Third Line */}
                        <Box sx={{ textAlign: "center", mt: 3 }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: "bold",
                                    color: "#D71635",
                                    fontSize: { xs: "34px", sm: "80px", md: "105px", lg: "120px" },
                                }}
                            >
                                EXPECTATIONS
                            </Typography>
                        </Box>

                        {/* Buttons */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexWrap: "wrap",
                                gap: 2,
                                mt: 4,
                            }}
                        >
                            <Button
                                variant="outlined"
                                sx={{
                                    borderRadius: 8,
                                    px: { xs: 3, sm: 4, md: 6 },
                                    py: 1.5,
                                    color: "#D71635",
                                    fontWeight: "bold",
                                    borderColor: "#D71635",
                                    textTransform: "inherit",
                                    fontSize: { xs: "14px", md: "18px" },
                                    transition: "all 0.3s ease-in-out",
                                    "&:hover": {
                                        backgroundColor: "#D71635",
                                        color: "#fff",
                                    },
                                }}
                            >
                                Let’s Connect
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderRadius: "50%",
                                    width: { xs: 40, sm: 48, md: 56 },
                                    height: { xs: 40, sm: 48, md: 56 },
                                    minWidth: { xs: 40, sm: 48, md: 56 },
                                    p: 1,
                                    color: "#D71635",
                                    borderColor: "#D71635",
                                    transition: "all 0.3s ease-in-out",
                                    "&:hover": {
                                        backgroundColor: "#D71635",
                                        color: "#fff",
                                    },
                                }}
                            >
                                <ArrowOutwardIcon sx={{ fontSize: { xs: "18px", md: "24px" } }} />
                            </Button>
                        </Box>

                        {/* Divider */}
                        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
                            <Box
                                sx={{
                                    width: "100%",
                                    height: "2px",
                                    backgroundColor: "#CFC4C9",
                                }}
                            />
                        </Box>
                    </Box>
                </Container>
            </section>


            {/* Our Services Section */}
            <section className="section">
                <Container>
                    <Box>
                        {/* Text Section */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: { xs: 2, md: 3 },
                                alignItems: { xs: "center", md: "flex-start" },
                                textAlign: { xs: "center", md: "left" },
                            }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: "300",
                                    color: "#4D3F43",
                                    fontSize: { xs: "28px", sm: "40px", md: "80px" },
                                    textTransform: "uppercase",
                                }}
                            >
                                Strategic Digital
                                <br />
                                Solutions for Your
                            </Typography>

                        </Box>
                        {/* Last Line with Button */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexDirection: { xs: "column", md: "row" },
                                textAlign: { xs: "center", md: "left" },
                            }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: "300",
                                    color: "#4D3F43",
                                    fontSize: { xs: "28px", sm: "40px", md: "80px" },
                                    textTransform: "uppercase",
                                }}
                            >
                                Business
                            </Typography>

                            <Box
                                variant="contained"
                                sx={{
                                    borderRadius: "90px",
                                    px: { xs: 3, md: 4 },
                                    py: { xs: 1.5, md: 2 },
                                    fontSize: { xs: "16px", sm: "20px", md: "28px" },
                                    fontWeight: "500",
                                    color: "#D71635",
                                    borderColor: "#D71635",
                                    backgroundColor: "#fbe8eb",
                                    textTransform: "uppercase",
                                }}
                            >
                                Our Services
                            </Box>
                        </Box>

                        {/* Swiper Section */}
                        <Box sx={{ width: "100%", maxWidth: "1200px", margin: "auto", py: 5 }}>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={20}
                                loop={true}
                                autoplay={{ delay: 3000, disableOnInteraction: true }}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                            >
                                {services.map((service) => (
                                    <SwiperSlide key={service.id}>
                                        <Box
                                            sx={{
                                                backgroundColor: "#fff",
                                                paddingBottom: 3,
                                                paddingLeft: 3,
                                                borderRadius: 5,
                                                border: "1px solid #E0E0E0",
                                                height: "368px",
                                                width: "100%",
                                                maxWidth: "357px",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "space-between",
                                                alignItems: "flex-start",
                                                position: "relative",
                                                margin: "auto",
                                            }}
                                        >
                                            {/* Icon and Line */}
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    left: 75,
                                                    top: 38,
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                {/* Icon Box */}
                                                <Box
                                                    sx={{
                                                        background: "#f5d6d9",
                                                        borderRadius: "50%",
                                                        height: 50,
                                                        width: 50,
                                                        border: "2px #DFD8DB solid",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                    }}
                                                >
                                                    <img src={`/images/${service.service_icon}`} alt="icon" style={{ width: 30, height: 30 }} />
                                                </Box>

                                                {/* Line Image */}
                                                <Box sx={{ flexGrow: 1 }}>
                                                    <img src="images/Rectangle 28.png" alt="line" />
                                                </Box>
                                            </Box>

                                            {/* Service Title */}
                                            <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "auto", color: "#4D3F43", }}>
                                                {service.service_name}
                                            </Typography>

                                            {/* Service Description */}
                                            <Typography variant="body2" sx={{ color: "#4D3F43", mt: 2, }}>
                                                {service.service_desc.split("\n").map((line, index) => (
                                                    <span key={index}>
                                                        {line} <br />
                                                    </span>
                                                ))}
                                            </Typography>
                                        </Box>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Box>
                    </Box>
                </Container>
            </section>

            {/* Digital growth section */}
            <section className="section" style={{ backgroundColor: "#000", borderRadius: "24px", padding: "40px 0" }}>
                <Container>
                    <Box sx={{ py: { xs: 5, md: 10 }, textAlign: { xs: "center", md: "left" } }}>
                        {about?.length > 0 && (
                            <>
                                {/* <Typography
                                    variant="h2"
                                    sx={{
                                        fontWeight: 500,
                                        color: "#fff",
                                        fontSize: { xs: "32px", md: "80px" },
                                        textTransform: "uppercase",
                                        lineHeight: 1.2
                                    }}
                                >
                                    Empowering <br /> Digital Growth
                                </Typography> */}
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontWeight: 500,
                                        color: "#fff",
                                        fontSize: { xs: "32px", md: "80px" },
                                        textTransform: "uppercase",
                                        lineHeight: 1.2
                                    }}
                                    component="div"
                                    dangerouslySetInnerHTML={{ __html: about[0].tc_footer }}
                                />


                                {/* <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                            <img
                                src="images/Rectangle_11.png"
                                alt="border_bottom"
                                style={{ width: "100%", maxWidth: "600px" }}
                            />
                        </Box> */}
                                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                                    <Box
                                        sx={{
                                            width: "100%",
                                            height: "2px",
                                            backgroundColor: "#CFC4C9",
                                        }}
                                    />
                                </Box>


                                <Box sx={{ margin: { xs: "0 auto", md: "0 0 0 50%" }, maxWidth: { xs: "100%", md: "50%" } }}>
                                    {/* <Typography
                                variant="h6"
                                sx={{
                                    color: "#fff",
                                    fontSize: { xs: "20px", md: "32px" },
                                    fontWeight: 500,
                                    mt: 4
                                }}
                            >
                                <span style={{ color: "red" }}>Trail Code i</span>s a leading, creative, and result-driven digital solutions provider. We integrate branding, style-guide, design, and content to manage and monitor your digital marketing strategy. Strategy is too often the missing link, and our clients get a strategically implemented product with the best usability, user experience, and design. We take a bottom-line approach to each project.
                            </Typography> */}
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: "#fff",
                                            fontSize: { xs: "20px", md: "32px" },
                                            fontWeight: 500,
                                            mt: 4
                                        }}
                                        component="div"
                                        dangerouslySetInnerHTML={{ __html: about[0].tc_about }}
                                    />

                                </Box>
                            </>
                        )}
                    </Box>
                </Container>
            </section>
            {/* Our products section */}
            {/* <section className="section">
                <Container>
                    <Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexDirection: { xs: "column", md: "row" },
                                textAlign: { xs: "center", md: "left" },
                                mt: 2,
                            }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: "300",
                                    color: "#4D3F43",
                                    fontSize: { xs: "32px", md: "80px" },
                                    textTransform: "uppercase",
                                }}
                            >
                                Excellence
                                <br />
                                in Action
                            </Typography>

                            <Box
                                variant="contained"
                                sx={{
                                    borderRadius: "90px",
                                    px: { xs: 3, md: 4 },
                                    py: 1.5,
                                    fontSize: { xs: "18px", md: "28px" },
                                    fontWeight: "500",
                                    color: "#D71635",
                                    borderColor: "#D71635",
                                    backgroundColor: "#fbe8eb",
                                    textTransform: "uppercase",
                                    mt: { xs: 2, md: 0 },
                                }}
                            >
                                Our Products
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                alignItems: "center",
                                gap: { xs: "30px", md: "40px" },
                                marginTop: "50px",
                                justifyContent: "space-between",
                            }}
                        >
                            <Box
                                sx={{
                                    width: { xs: "100%", md: "50%" }, // Fixed width for larger screens
                                    maxWidth: "500px", // Prevents excessive widening
                                    flexShrink: 0, // Prevents shrinking when text is short
                                }}
                            >
                                {products.map((product, index) => (
                                    <Box key={index} sx={{ mb: 3 }}>
                                        <Typography
                                            variant="h2"
                                            sx={{
                                                color: product.color,
                                                fontSize: { xs: "22px", md: "32px" },
                                                fontWeight: 500,
                                                maxWidth: "500px", // Fixed width to maintain spacing
                                                minWidth: "250px", // Ensures text does not collapse
                                            }}
                                        >
                                            {product.product_name}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: product.color,
                                                fontSize: { xs: "18px", md: "20px" },
                                                mt: 2,
                                                maxWidth: "500px", // Keeps width fixed for consistency
                                                minWidth: "250px",
                                            }}
                                        >
                                            {product.product_desc}
                                        </Typography>
                                        <Box sx={{ mt: 3 }}>
                                            <Divider />
                                        </Box>
                                    </Box>
                                ))}
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        flexWrap: "wrap",
                                        justifyContent: { xs: "center", md: "start" },
                                        gap: 1,
                                        mt: 4,
                                    }}
                                >
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderRadius: 8,
                                            px: { xs: 3, md: 4 },
                                            py: 1.5,
                                            fontWeight: 'bold',
                                            color: "#D71635",
                                            borderColor: "#D71635",
                                            textTransform: "inherit",
                                            transition: "all 0.3s ease-in-out",
                                            "&:hover": {
                                                backgroundColor: "#D71635",
                                                color: "#fff",
                                                borderColor: "#D71635",
                                            },
                                        }}
                                    >
                                        View All Products
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderRadius: "50%",
                                            width: { xs: 40, md: 50 },
                                            height: { xs: 40, md: 50 },
                                            minWidth: { xs: 40, md: 50 },
                                            p: 1,
                                            color: "#D71635",
                                            borderColor: "#D71635",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: "all 0.3s ease-in-out",
                                            "&:hover": {
                                                backgroundColor: "#D71635",
                                                color: "#fff",
                                                borderColor: "#D71635",
                                            },
                                        }}
                                    >
                                        <ArrowOutwardIcon sx={{ fontSize: { xs: "20px", md: "28px" } }} />
                                    </Button>
                                </Box>

                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-end", // Ensures image aligns to the right
                                    alignItems: "center",
                                    width: { xs: "100%", md: "50%" }, // Fixed width for consistency
                                    maxWidth: "500px", // Prevents image from getting too large
                                }}
                            >
                                <img
                                    src="images/Rectangle 29.png"
                                    alt="Saral Billing"
                                    style={{
                                        width: "100%", // Makes it responsive
                                        maxWidth: "453px", // Prevents excessive scaling
                                        height: "auto",
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </section> */}
            <section className="section">
                <Container>
                    <Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexDirection: { xs: "column", md: "row" },
                                textAlign: { xs: "center", md: "left" },
                                mt: 2,
                            }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: "300",
                                    color: "#4D3F43",
                                    fontSize: { xs: "32px", md: "80px" },
                                    textTransform: "uppercase",
                                }}
                            >
                                Excellence
                                <br />
                                in Action
                            </Typography>

                            <Box
                                variant="contained"
                                sx={{
                                    borderRadius: "90px",
                                    px: { xs: 3, md: 4 },
                                    py: 1.5,
                                    fontSize: { xs: "18px", md: "28px" },
                                    fontWeight: "500",
                                    color: "#D71635",
                                    borderColor: "#D71635",
                                    backgroundColor: "#fbe8eb",
                                    textTransform: "uppercase",
                                    mt: { xs: 2, md: 0 },
                                }}
                            >
                                Our Products
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                alignItems: "center",
                                gap: { xs: "30px", md: "40px" },
                                marginTop: "50px",
                                justifyContent: "space-between",
                            }}
                        >
                            {/* Left Section - Product List */}
                            <Box sx={{ width: { xs: "100%", md: "50%" }, maxWidth: "500px" }}>
                                {products.map((product) => (
                                    <Box key={product.id} sx={{ mb: 3, cursor: "pointer" }} onClick={() => setActiveProduct(product)}>
                                        <Typography
                                            variant="h2"
                                            sx={{
                                                color: activeProduct?.id === product.id ? "#4D3F43" : "#D3CFD0",
                                                fontSize: { xs: "22px", md: "32px" },
                                                fontWeight: 500,
                                            }}
                                        >
                                            {product.product_name}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: activeProduct?.id === product.id ? "#4D3F43" : "#D3CFD0",
                                                fontSize: { xs: "18px", md: "20px" }, mt: 2
                                            }}
                                        >
                                            {product.product_desc}
                                        </Typography>
                                        <Box sx={{ mt: 3 }}>
                                            <Divider />
                                        </Box>
                                    </Box>
                                ))}
                            </Box>

                            {/* Right Section - Product Image */}
                            <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", width: { xs: "100%", md: "50%" }, maxWidth: "500px", backgroundColor: '#FBE8EB', padding: '20px', borderRadius: '24px' }}>
                                {activeProduct && (
                                    <img
                                        src={`${SERVER_Image_URL}/${activeProduct.product_image}`}
                                        alt={activeProduct.product_name}
                                        style={{ width: "100%", maxWidth: "453px", height: "auto" }}
                                    />
                                )}
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "wrap",
                                justifyContent: { xs: "center", md: "start" },
                                gap: 1,
                                mt: 4,
                            }}
                        >
                            <Button
                                variant="outlined"
                                sx={{
                                    borderRadius: 8,
                                    px: { xs: 3, md: 4 },
                                    py: 1.5,
                                    fontWeight: "bold",
                                    color: "#D71635",
                                    borderColor: "#D71635",
                                    textTransform: "inherit",
                                    transition: "all 0.3s ease-in-out",
                                    "&:hover": {
                                        backgroundColor: "#D71635",
                                        color: "#fff",
                                        borderColor: "#D71635",
                                    },
                                }}
                            >
                                View All Products
                            </Button>

                            <Button
                                variant="outlined"
                                sx={{
                                    borderRadius: "50%",
                                    width: { xs: 40, md: 50 },
                                    height: { xs: 40, md: 50 },
                                    minWidth: { xs: 40, md: 50 },
                                    p: 1,
                                    color: "#D71635",
                                    borderColor: "#D71635",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "all 0.3s ease-in-out",
                                    "&:hover": {
                                        backgroundColor: "#D71635",
                                        color: "#fff",
                                        borderColor: "#D71635",
                                    },
                                }}
                            >
                                <ArrowOutwardIcon sx={{ fontSize: { xs: "20px", md: "28px" } }} />
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </section>
            {/* <section className="section">
                <Container>
                    <Box display="flex" flexDirection={{ xs: "column", md: "row" }} p={3}>
                        <Box flex={1}>
                            <List>
                                {products.map((product) => (
                                    <ListItem
                                        key={product.id}
                                        button
                                        selected={activeProduct?.id === product.id}
                                        onClick={() => setActiveProduct(product)}
                                    >
                                        <ListItemText
                                            primary={<Typography variant="h6">{product.product_name}</Typography>}
                                            secondary={product.product_desc}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                        <Box flex={1} display="flex" justifyContent="center" alignItems="center" p={3}>
                            {activeProduct && (
                                <Paper elevation={3}>
                                    <img
                                        src={`${SERVER_Image_URL}/${activeProduct.product_image}`}
                                        alt={activeProduct.product_name}
                                        style={{ width: "100%", maxWidth: 300, height: "auto" }}
                                    />
                                </Paper>
                            )}
                        </Box>
                    </Box>
                </Container>
            </section> */}
            {/* Company view section */}
            {/* <section className="section">
                <Container>
                    <Box
                        sx={{
                            backgroundColor: "#F1EEEE",
                            borderRadius: "24px",
                            padding: { xs: "32px", md: "56px" },
                            textAlign: "center",
                        }}
                    >
                        <Typography
                            fontSize={{ xs: 28, md: 80 }}
                            fontWeight="500"
                            color="#4D3F43"
                            textAlign="center"
                            mb={4}
                        >
                            WHO TRUSTS US?
                        </Typography>

                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "repeat(2, 1fr)",  // 2 columns on small screens
                                    sm: "repeat(3, 1fr)",  // 3 columns on medium screens
                                    md: "repeat(4, 1fr)",  // 4 columns on larger screens
                                    lg: "repeat(5, 1fr)",  // 5 columns on extra-large screens
                                },
                                gap: { xs: 2, md: 4 },
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                                maxWidth: "1100px",
                                margin: "0 auto",
                            }}
                        >
                            {logos.map((logo, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        backgroundColor: "#FFFFFF",
                                        width: "100%",
                                        maxWidth: { xs: "120px", md: "200px" },
                                        height: { xs: "90px", md: "120px" },
                                        borderRadius: "10px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        margin: "auto",
                                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        style={{
                                            maxWidth: "80%",
                                            maxHeight: "80%",
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                gap: 1,
                                mt: 4,
                            }}
                        >
                            <Button
                                variant="outlined"
                                sx={{
                                    borderRadius: 8,
                                    px: { xs: 3, md: 4 },
                                    py: 1.5,
                                    fontWeight: 'bold',
                                    color: "#D71635",
                                    borderColor: "#D71635",
                                    textTransform: "inherit",
                                    transition: "all 0.3s ease-in-out",
                                    "&:hover": {
                                        backgroundColor: "#D71635",
                                        color: "#fff",
                                        borderColor: "#D71635",
                                    },
                                }}
                            >
                                Load More
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderRadius: "50%",
                                    width: { xs: 40, md: 50 },
                                    height: { xs: 40, md: 50 },
                                    minWidth: { xs: 40, md: 50 },
                                    p: 1,
                                    color: "#D71635",
                                    borderColor: "#D71635",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "all 0.3s ease-in-out",
                                    "&:hover": {
                                        backgroundColor: "#D71635",
                                        color: "#fff",
                                        borderColor: "#D71635",
                                    },
                                }}
                            >
                                <ArrowOutwardIcon sx={{ fontSize: { xs: "20px", md: "28px" } }} />
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </section> */}
            {/* <section className="section">
                <Container>
                    <Box
                        sx={{
                            backgroundColor: "#F1EEEE",
                            borderRadius: "24px",
                            padding: { xs: "32px", md: "56px" },
                            textAlign: "center",
                        }}
                    >
                        <Typography fontSize={{ xs: 28, md: 80 }} fontWeight="500" color="#4D3F43" mb={4}>
                            WHO TRUSTS US?
                        </Typography>

                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "repeat(2, 1fr)",
                                    sm: "repeat(3, 1fr)",
                                    md: "repeat(4, 1fr)",
                                    lg: "repeat(5, 1fr)",
                                },
                                gap: { xs: 2, md: 4 },
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                                maxWidth: "1100px",
                                margin: "0 auto",
                            }}
                        >
                            {clients.map((client) => (
                                <Box
                                    key={client.id}
                                    sx={{
                                        backgroundColor: activeClient?.id === client.id ? "#FFFFFF" : "#D3D3D3",
                                        width: "100%",
                                        maxWidth: { xs: "120px", md: "200px" },
                                        height: { xs: "90px", md: "120px" },
                                        borderRadius: "10px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        margin: "auto",
                                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => setActiveClient(client)}
                                >
                                    <img
                                        src={`${SERVER_Image_URL}/${client.client_logo}`}
                                        alt={client.client_name}
                                        style={{ maxWidth: "80%", maxHeight: "80%" }}
                                    />
                                </Box>
                            ))}
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center", gap: 1, mt: 4 }}>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderRadius: 8,
                                    px: { xs: 3, md: 4 },
                                    py: 1.5,
                                    fontWeight: "bold",
                                    color: "#D71635",
                                    borderColor: "#D71635",
                                    textTransform: "inherit",
                                    transition: "all 0.3s ease-in-out",
                                    "&:hover": {
                                        backgroundColor: "#D71635",
                                        color: "#fff",
                                        borderColor: "#D71635",
                                    },
                                }}
                            >
                                Load More
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderRadius: "50%",
                                    width: { xs: 40, md: 50 },
                                    height: { xs: 40, md: 50 },
                                    minWidth: { xs: 40, md: 50 },
                                    p: 1,
                                    color: "#D71635",
                                    borderColor: "#D71635",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "all 0.3s ease-in-out",
                                    "&:hover": {
                                        backgroundColor: "#D71635",
                                        color: "#fff",
                                        borderColor: "#D71635",
                                    },
                                }}
                            >
                                <ArrowOutwardIcon sx={{ fontSize: { xs: "20px", md: "28px" } }} />
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </section> */}
            <section className="section">
                <Container>
                    <Box
                        sx={{
                            backgroundColor: "#F1EEEE",
                            borderRadius: "24px",
                            padding: { xs: "32px", md: "56px" },
                            textAlign: "center",
                        }}
                    >
                        <Typography fontSize={{ xs: 28, md: 80 }} fontWeight="500" color="#4D3F43" mb={4}>
                            WHO TRUSTS US?
                        </Typography>

                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "repeat(2, 1fr)",
                                    sm: "repeat(3, 1fr)",
                                    md: "repeat(4, 1fr)",
                                    lg: "repeat(5, 1fr)",
                                },
                                gap: { xs: 2, md: 4 },
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                                maxWidth: "1100px",
                                margin: "0 auto",
                            }}
                        >
                            {clients.map((client, index) => (
                                <Box
                                    key={client.id}
                                    sx={{
                                        backgroundColor: "#FEF9FA",
                                        width: "100%",
                                        maxWidth: { xs: "120px", md: "200px" },
                                        height: { xs: "90px", md: "120px" },
                                        borderRadius: "10px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        margin: "auto",
                                        // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease-in-out",
                                        filter: activeClient?.id === client.id || index === 0 ? "none" : "grayscale(100%)",
                                        "&:hover": {
                                            filter: "none", // Remove grayscale on hover
                                        },
                                    }}
                                    onClick={() => setActiveClient(client)}
                                >
                                    <img
                                        src={`${SERVER_Image_URL}/${client.client_logo}`}
                                        alt={client.client_name}
                                        style={{ maxWidth: "80%", maxHeight: "80%" }}
                                    />
                                </Box>
                            ))}
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center", gap: 1, mt: 4 }}>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderRadius: 8,
                                    px: { xs: 3, md: 4 },
                                    py: 1.5,
                                    fontWeight: "bold",
                                    color: "#D71635",
                                    borderColor: "#D71635",
                                    textTransform: "inherit",
                                    transition: "all 0.3s ease-in-out",
                                    "&:hover": {
                                        backgroundColor: "#D71635",
                                        color: "#fff",
                                        borderColor: "#D71635",
                                    },
                                }}
                            >
                                Load More
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderRadius: "50%",
                                    width: { xs: 40, md: 50 },
                                    height: { xs: 40, md: 50 },
                                    minWidth: { xs: 40, md: 50 },
                                    p: 1,
                                    color: "#D71635",
                                    borderColor: "#D71635",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "all 0.3s ease-in-out",
                                    "&:hover": {
                                        backgroundColor: "#D71635",
                                        color: "#fff",
                                        borderColor: "#D71635",
                                    },
                                }}
                            >
                                <ArrowOutwardIcon sx={{ fontSize: { xs: "20px", md: "28px" } }} />
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </section>
            {/* Testimonial section */}
            <section className="section">
                <Container>
                    <Box sx={{ py: { xs: "30px", md: "50px" } }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                gap: { xs: 5, md: 20 },
                                alignItems: "center",
                                textAlign: { xs: "center", md: "left" },
                            }}
                        >
                            {/* Title Section */}
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: "500",
                                    color: "#4D3F43",
                                    fontSize: { xs: "28px", md: "80px" },
                                    textAlign: { xs: "center", md: "left" },
                                    textTransform: "uppercase",
                                }}
                            >
                                Hear it from <br /> our clients
                            </Typography>

                            {/* Swiper Section */}
                            <Box sx={{ width: "100%", maxWidth: "400px", mx: "auto" }}>
                                <Swiper
                                    effect="cards"
                                    grabCursor={true}
                                    loop={true}
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
                                    }}
                                    initialSlide={1} // Show the second slide first
                                    modules={[EffectCards, Navigation]}
                                    className="testimonial-swiper"
                                >
                                    {testimonials.map((testimonial) => (
                                        <SwiperSlide key={testimonial.id}>
                                            <Box
                                                sx={{
                                                    backgroundColor: "#FDF7F8",
                                                    padding: { xs: 3, md: 4 },
                                                    borderRadius: 3,
                                                    border: "1px solid #E0E0E0",
                                                    minHeight: "300px",
                                                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-between",
                                                    textAlign: "center",
                                                    maxWidth: "90%",
                                                    mx: "auto",
                                                }}
                                            >
                                                {/* Feedback Text */}
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: "#666", fontSize: { xs: "14px", md: "16px" } }}
                                                    component="div"
                                                    dangerouslySetInnerHTML={{ __html: testimonial.client_comment }}
                                                />

                                                {/* Client Name */}
                                                <Typography
                                                    variant="h6"
                                                    fontWeight="bold"
                                                    sx={{ color: "#4D3F43", mt: 2, fontSize: { xs: "16px", md: "18px" } }}
                                                >
                                                    {testimonial.client_name}
                                                </Typography>
                                            </Box>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>


                                {/* Custom Navigation Buttons for Non-Mobile Screens */}
                                {!isMobile && (
                                    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
                                        <IconButton
                                            className="swiper-button-prev"
                                            sx={{
                                                border: "1px solid #D71635",
                                                color: "#D71635",
                                                width: { xs: "35px", md: "50px" },
                                                height: { xs: "35px", md: "50px" },
                                                transition: "all 0.3s ease-in-out",
                                                "&:hover": {
                                                    backgroundColor: "#D71635",
                                                    color: "#fff",
                                                    borderColor: "#D71635",
                                                },
                                            }}
                                        >
                                            <ArrowBack />
                                        </IconButton>
                                        <IconButton
                                            className="swiper-button-next"
                                            sx={{
                                                border: "1px solid #D71635",
                                                color: "#D71635",
                                                width: { xs: "35px", md: "50px" },
                                                height: { xs: "35px", md: "50px" },
                                                transition: "all 0.3s ease-in-out",
                                                "&:hover": {
                                                    backgroundColor: "#D71635",
                                                    color: "#fff",
                                                    borderColor: "#D71635",
                                                },
                                            }}
                                        >
                                            <ArrowForward />
                                        </IconButton>
                                    </Box>
                                )}
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </section>

            {/* Special offers section */}
            <section className="section">
                <Container>
                    <Box
                        sx={{
                            my: { xs: "20px", md: "40px" },
                            py: { xs: "40px", md: "60px" },
                            backgroundColor: "#4E0314",
                            borderRadius: "24px",
                            px: { xs: "20px", md: "84px" }
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                gap: { xs: 5, md: '18px' },
                                alignItems: "center",
                                justifyContent: "space-between",
                                textAlign: { xs: "center", md: "left" }
                            }}
                        >
                            {/* Title Section */}
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: "500",
                                    color: "#fff",
                                    fontSize: { xs: "32px", md: "80px" },
                                    textAlign: { xs: "center", md: "left" },
                                    textTransform: "uppercase"
                                }}
                            >
                                Special <br /> Offer
                            </Typography>

                            {/* Offer Details */}
                            <Box sx={{ maxWidth: "600px" }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: "400",
                                        color: "#fff",
                                        fontSize: { xs: "14px", md: "24px" },
                                        textAlign: { xs: "center", md: "left" },
                                        mb: 1,
                                    }}
                                >
                                    We understand how important it is to build your
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: "600",
                                        color: "#fff",
                                        fontSize: { xs: "16px", md: "32px" },
                                        textAlign: { xs: "center", md: "left" },
                                        mb: 4,
                                        textTransform: 'uppercase'
                                    }}
                                >
                                    online identity.
                                </Typography>

                                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, alignItems: { xs: "center", md: "flex-start" } }}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontWeight: "400",
                                            color: "#fff",
                                            fontSize: { xs: "14px", md: "24px" },
                                            textAlign: { xs: "center", md: "left" },
                                        }}
                                    >
                                        We offer our service
                                        <br />
                                        to get you the best website hosting for
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontWeight: "600",
                                            color: "#fff",
                                            fontSize: { xs: "28px", md: "48px" },
                                            textAlign: "center",
                                            textTransform: "uppercase",
                                            mt: 2.5
                                        }}
                                    >
                                        free*
                                    </Typography>
                                </Box>

                                <Typography
                                    variant="caption"
                                    sx={{
                                        fontWeight: "400",
                                        color: "#B69AA1",
                                        fontSize: { xs: "10px", md: "12px" },
                                        textAlign: { xs: "center", md: "left" },
                                        mt: 2
                                    }}
                                >
                                    *Free website hosting for one year. Domain registration charges & other conditions may apply.
                                </Typography>

                                {/* Buttons */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: { xs: "column", md: "row" },
                                        alignItems: "center",
                                        justifyContent: { xs: "center", md: "left" },
                                        gap: 1,
                                        mt: 4,
                                    }}
                                >
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderRadius: 8,
                                            px: { xs: 3, md: 4 },
                                            py: 1,
                                            fontWeight: 'bold',
                                            color: "#fff",
                                            borderColor: "#fff",
                                            textTransform: "inherit",
                                            transition: "all 0.3s ease-in-out",
                                            "&:hover": {
                                                backgroundColor: "#fff",
                                                color: "#D71635",
                                                borderColor: "#fff",
                                            },
                                        }}
                                    >
                                        Get It Now
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderRadius: "50%",
                                            width: { xs: 40, md: 50 },
                                            height: { xs: 40, md: 50 },
                                            minWidth: { xs: 40, md: 50 },
                                            p: 1,
                                            color: "#fff",
                                            borderColor: "#fff",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: "all 0.3s ease-in-out",
                                            "&:hover": {
                                                backgroundColor: "#fff",
                                                color: "#D71635",
                                                borderColor: "#fff",
                                            },
                                        }}
                                    >
                                        <ArrowOutwardIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
                                    </Button>
                                </Box>

                            </Box>
                        </Box>
                    </Box>
                </Container>
            </section>
            {/* Footer section */}
            <Footer />





        </>
    );
};

export default Home1;
