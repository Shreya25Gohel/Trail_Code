import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { Box, Typography, Button, Container, Divider, IconButton, ListItem, ListItemText, List, Paper } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Footer from "../components/Footer/Footer";
import { SERVER_Image_URL, SERVER_URL } from "./Constant";
import DOMPurify from 'dompurify';
// import 'swiper/swiper-bundle.css';

// gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);


const Home1 = () => {

    const sectionRef = useRef(null);
    const textRef = useRef(null);

    const [services, setServices] = useState([]);
    // const [products, setProducts] = useState([]);
    const [about, setAbout] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [products, setProducts] = useState([]);
    const [activeProduct, setActiveProduct] = useState(null);
    const [clients, setClients] = useState([]);
    const [activeClient, setActiveClient] = useState(null);
    const imageRef = useRef(null);
    const productSectionRef = useRef(null);
    const swiperRef = useRef(null);

    const swiperInstance = useRef(null);
    const [testimonialSwiper, setTestimonialSwiper] = useState(null);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);


    const totalSlides = testimonials.length;


    const isMobile = window.innerWidth < 768;

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [titleVisibleIndex, setTitleVisibleIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
        setTitleVisibleIndex(null);
    };

    const handleMouseLeave = (index) => {
        setHoveredIndex(null);
        setTimeout(() => {
            setTitleVisibleIndex(index); // show title after delay
        }, 500);
    };

    useEffect(() => {
        fetch(`${SERVER_URL}/services.php`)
            .then(response => response.json())
            .then(data => setServices([...data])) // Duplicate array
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    // useEffect(() => {
    //     const section = productSectionRef.current;
    //     const swiperContainer = swiperRef.current;

    //     // Use ScrollTrigger to handle the stickiness and animation
    //     ScrollTrigger.create({
    //         trigger: section,
    //         start: "top top", // When the top of the section hits the top of the viewport
    //         end: "+=2200", // Adjust based on total height of the slides
    //         pin: true, // Make the section sticky
    //         scrub: true, // Allow the animation to be scrubbed back and forth
    //         onEnter: () => {
    //             // Play animation
    //             const slides = swiperContainer.querySelectorAll('.swiper-slide');

    //             let index = 0;
    //             gsap.to(slides, {
    //                 xPercent: -100 * (slides.length - 1), // Translate entire slide group to left
    //                 duration: 0.5,
    //                 ease: 'none',
    //                 scrollTrigger: {
    //                     trigger: section,
    //                     start: "top top",
    //                     end: "+=4000", // Adjust based on total height of the slides
    //                     scrub: 0.5, // Smooth synchronization with scroll
    //                 },
    //                 onStart: () => {
    //                     // Reset position if they scroll back
    //                     gsap.set(slides, { xPercent: 0 });
    //                 }
    //             });
    //         }
    //     });

    //     return () => {
    //         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    //     };
    // }, []);

    useEffect(() => {
        const section = productSectionRef.current;
        const swiperContainer = swiperRef.current;

        // Use ScrollTrigger to handle the stickiness and animation
        ScrollTrigger.create({
            trigger: section,
            start: "50px top", // When the top of the section hits the top of the viewport
            end: "+=4000", // Adjust based on total height of the slides
            pin: true, // Make the section sticky
            scrub: true, // Allow the animation to be scrubbed back and forth
            onEnter: () => {
                // Play animation
                const slides = swiperContainer.querySelectorAll('.swiper-slide');

                let index = 0;
                gsap.to(slides, {
                    xPercent: -100 * (slides.length - 1), // Translate entire slide group to left
                    duration: 0.5,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: "+=4000", // Adjust based on total height of the slides
                        scrub: 0.5, // Smooth synchronization with scroll
                    },
                    onStart: () => {
                        // Reset position if they scroll back
                        gsap.set(slides, { xPercent: 0 });
                    }
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
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
                // if (data.length > 0) setActiveClient(data[0]);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    useEffect(() => {
        gsap.from(sectionRef.current, {
            opacity: 1,
            y: 50,
            duration: 1,
            // ease: "power3.out",
        });
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const numProducts = products.length;
            const totalScroll = window.innerHeight * 0.20 * numProducts;

            // Pin the section
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: `+=${totalScroll}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
            });

            // Animate each product entry and background image change
            products.forEach((product, index) => {
                const productTrigger = `#product-${product.id}`;
                const imageUrl = `${SERVER_Image_URL}/${product.product_image}`;

                // Animate right side image switch
                gsap.to(imageRef.current, {
                    scrollTrigger: {
                        trigger: productTrigger,
                        start: "top 20%",
                        end: "end 60%",
                        scrub: true,
                        onEnter: () => setActiveProduct(product),
                        onEnterBack: () => setActiveProduct(product),
                    },
                });

                // Animate product fade-in
                gsap.fromTo(
                    productTrigger,
                    { y: 50 },
                    {
                        // autoAlpha: 1,
                        y: 0,
                        scrollTrigger: {
                            trigger: productTrigger,
                            start: "top 80%",
                            end: "top top",
                            scrub: true,
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert(); // Cleanup
    }, [products, SERVER_Image_URL]);

    useLayoutEffect(() => {
        if (textRef.current) {
            const lines = textRef.current.querySelectorAll(".line");

            lines.forEach((line, index) => {
                gsap.fromTo(
                    line,
                    { color: "#afb0b0" }, // Start color (white)
                    {
                        color: "#333", // End color (red)
                        scrollTrigger: {
                            trigger: line,
                            start: "top 65%",
                            end: "center",
                            scrub: true,
                        },
                    }
                );
            });
        }
    }, [about]);

    // Function to split HTML text into individual lines without <br> tags
    const splitHtmlIntoLines = (html, wordsPerLine = 10) => {
        if (!html) return [];

        // Use DOMParser to parse HTML and convert it into a structure we can work with
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const textNodes = [...doc.body.childNodes];

        const lines = [];
        let currentLine = [];
        let currentWordCount = 0;

        textNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
                const words = node.textContent.split(' ');
                words.forEach((word) => {
                    if (currentWordCount < wordsPerLine) {
                        currentLine.push(word);
                        currentWordCount++;
                    } else {
                        lines.push(currentLine.join(' '));
                        currentLine = [word];
                        currentWordCount = 1;
                    }
                });
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                // Handle inline elements without breaking the line
                if (['B', 'I', 'SPAN', 'A'].includes(node.nodeName)) {
                    currentLine.push(node.outerHTML); // Keep the HTML intact
                    currentWordCount += node.textContent.split(' ').length;
                }
                else if (node.nodeName === 'BR') {
                    // Handle line break, treating it as a new line
                    if (currentLine.length > 0) {
                        lines.push(currentLine.join(' '));
                        currentLine = [];
                        currentWordCount = 0;
                    }
                } else {
                    // For any other block elements, push the current line and start a new line
                    if (currentLine.length > 0) {
                        lines.push(currentLine.join(' '));
                        currentLine = [];
                        currentWordCount = 0;
                    }
                    lines.push(node.outerHTML);  // Keep non-inline elements intact (if needed)
                }
            }
        });

        // Push the last line if there are any remaining words
        if (currentLine.length > 0) {
            lines.push(currentLine.join(' '));
        }

        return lines.map((line, index) => (
            <div
                key={index}
                className="line"
                style={{ marginBottom: "10px" }}
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(line) }}
            />
        ));
    };

    const navButtonStyle = {
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
        "&.Mui-disabled": {
            borderColor: "#ccc",
            color: "#ccc",
            backgroundColor: "#f0f0f0",
            cursor: "not-allowed",
        },
    };

    return (
        <>

            {/* Hero Section */}
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
                                    fontWeight: 600,
                                    color: "#4D3F43",
                                    fontSize: { xs: "40px", sm: "80px", md: "120px" },
                                    textAlign: "center",
                                    textTransform: 'uppercase'
                                }}
                            >
                                Design <span style={{ fontWeight: 300 }}>that</span>
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
                                    textTransform: 'uppercase'
                                }}
                            >
                                Drives
                            </Typography>
                            <Box
                                component="img"
                                src="images/Group 4.png"
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
                                    textTransform: 'uppercase'
                                }}
                            >
                                Results
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
                                id="letsconnect"
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
                                id="hero_icon_btn"
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
            {/* Desktop version - hidden on tablet and mobile */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <section ref={productSectionRef} className="section">
                    <Container>
                        <Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 3,
                                    alignItems: "flex-start",
                                    textAlign: "left",
                                }}
                            >
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontWeight: "300",
                                        color: "#4D3F43",
                                        fontSize: "80px",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Strategic Digital
                                    <br />
                                    Solutions for Your
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    flexDirection: "row",
                                    textAlign: "left",
                                }}
                            >
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontWeight: "300",
                                        color: "#4D3F43",
                                        fontSize: "80px",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Business
                                </Typography>

                                <Box
                                    variant="contained"
                                    sx={{
                                        borderRadius: "90px",
                                        px: 4,
                                        py: 2,
                                        fontSize: "28px",
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
                            <Box ref={swiperRef} sx={{ overflow: "hidden", width: "100%", maxWidth: "1200px", margin: "auto", py: 5 }}>
                                <Swiper
                                    ref={swiperInstance}
                                    spaceBetween={20}
                                    loop={false}
                                    autoplay={{ delay: 3000, disableOnInteraction: true }}
                                    className="mySwiper"
                                    breakpoints={{
                                        // When window width is <= 1020px
                                        0: {  // This covers all sizes from 0px
                                            slidesPerView: 2
                                        },
                                        // When window width is > 1020px
                                        1020: {
                                            slidesPerView: 3
                                        }
                                    }}
                                >
                                    {services.map((service, index) => (
                                        <SwiperSlide >
                                            <Box
                                                key={index}
                                                onMouseEnter={() => handleMouseEnter(index)}
                                                onMouseLeave={() => handleMouseLeave(index)}
                                                sx={{
                                                    backgroundColor: "#fff",
                                                    paddingBottom: 1,
                                                    borderRadius: 5,
                                                    border: "1px solid #E0E0E0",
                                                    height: "300px",
                                                    width: "100%",
                                                    maxWidth: '365px',
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-between",
                                                    alignItems: "flex-start",
                                                    position: "relative",
                                                    margin: "auto",
                                                    transition: "all 0.3s ease",
                                                    '&:hover': {
                                                        backgroundColor: "#fdf7f8",
                                                    },
                                                    '& .service-description': {
                                                        opacity: hoveredIndex === index ? 1 : 0,
                                                        visibility: hoveredIndex === index ? 'visible' : 'hidden',
                                                        transition: "opacity 0.4s ease, visibility 0.4s ease",
                                                        transitionDelay: hoveredIndex === index ? "0.4s" : "0s",
                                                    },

                                                    '& .service-title': {
                                                        position: hoveredIndex === index ? "absolute" : "relative",  // move only on hover
                                                        top: hoveredIndex === index ? "30%" : "80%",                 // only adjust top when hovered
                                                        left: "10%",
                                                        opacity: 1,                       // always visible
                                                        visibility: 'visible',           // always visible
                                                        transition: "top 0.4s ease, left 0.4s ease, opacity 0.3s ease",
                                                    }
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        position: "absolute",
                                                        left: 75,
                                                        top: 25,
                                                        display: "flex",
                                                        alignItems: "center",
                                                    }}
                                                >
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
                                                        <img src="images/shape-01.png" alt="icon" style={{ width: 30, height: 30 }} />
                                                    </Box>
                                                    <Box sx={{ flexGrow: 1 }}>
                                                        <img src="images/Rectangle 28.png" alt="line" style={{ width: '100%' }} />
                                                    </Box>
                                                </Box>
                                                {/* <Typography
                                                    className="service-title"
                                                    variant="h5"
                                                    fontWeight="bold"
                                                    sx={{
                                                        color: "#4D3F43",
                                                        position: 'absolute',
                                                        bottom: '10%',
                                                        left: '10%',
                                                        right: '6%',
                                                        fontSize: '26px',
                                                        transition: "transform 0.4s ease",
                                                        transform: "translateY(0)",
                                                    }}
                                                > */}
                                                <Typography
                                                    className="service-title"
                                                    variant="h5"
                                                    fontWeight="bold"
                                                    sx={{
                                                        color: "#4D3F43",
                                                        position: 'absolute',
                                                        bottom: '10%',
                                                        left: '10%',
                                                        right: '6%',
                                                        fontSize: '26px',
                                                        transition: "transform 0.4s ease",
                                                        transform: "translateY(0)",
                                                        whiteSpace: 'normal', // Allow text wrapping
                                                        wordWrap: 'break-word', // Break long words if needed
                                                        overflowWrap: 'break-word', // Alternative to wordWrap
                                                        display: '-webkit-box', // For line clamping if needed
                                                        WebkitLineClamp: 2, // Optional: Limit to 2 lines
                                                        WebkitBoxOrient: 'vertical', // Required for line clamp
                                                        textOverflow: 'ellipsis', // Add ellipsis if clamped
                                                        maxHeight: '3.6em', // Approx 2 lines (1.8em per line)
                                                    }}
                                                >
                                                    {service.service_name}
                                                </Typography>

                                                <Typography
                                                    className="service-description"
                                                    variant="body2"
                                                    sx={{
                                                        color: "#4D3F43",
                                                        position: 'absolute',
                                                        top: '46%',
                                                        left: '10%',
                                                        right: '6%',
                                                        fontSize: '18px',
                                                        opacity: 0,
                                                        transform: "translateY(20px)",
                                                        transition: "opacity 0.4s ease, transform 0.4s ease",
                                                        pointerEvents: "none", // avoids interaction when hidden
                                                    }}
                                                >
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
            </Box >

            {/* Mobile/Tablet version - hidden on desktop */}
            < Box sx={{ display: { xs: 'block', md: 'none' } }
            }>
                <section className="section">
                    <Container>
                        <Box>
                            <Box sx={{ overflow: "hidden", width: "100%", margin: "auto", py: 5 }}>
                                <Swiper
                                    ref={swiperInstance}
                                    spaceBetween={20}
                                    loop={false}
                                    autoplay={{ delay: 3000, disableOnInteraction: true }}
                                    className="mySwiper"
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        600: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 1,
                                        }
                                    }}
                                >

                                    {services.map((service) => (
                                        <SwiperSlide key={service.id}>
                                            <Box
                                                sx={{
                                                    backgroundColor: "#fdf7f8",
                                                    padding: 3,
                                                    borderRadius: 5,
                                                    border: "1px solid #E0E0E0",
                                                    height: "300px",
                                                    width: { xs: "70%", sm: "46%" },
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "flex-start",
                                                    alignItems: "flex-start",
                                                    position: "relative",
                                                    margin: "0 auto",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        position: "absolute",
                                                        left: { xs: "33px", sm: "75px" },
                                                        top: 25,
                                                        display: "flex",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            background: "#f5d6d9",
                                                            borderRadius: "50%",
                                                            height: 50,
                                                            width: { xs: '60px', sm: '50px' },
                                                            border: "2px #DFD8DB solid",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                        }}
                                                    >
                                                        <img
                                                            src="images/shape-01.png"
                                                            alt="icon"
                                                            style={{
                                                                width: "25px",
                                                                height: "25px",
                                                                "@media (min-width: 600px)": {
                                                                    width: "30px",
                                                                    height: "30px"
                                                                }
                                                            }}
                                                        />
                                                    </Box>
                                                    <Box sx={{ flexGrow: 1 }}>
                                                        <img src="images/Rectangle 28.png" alt="line" style={{ width: '100%' }} />
                                                    </Box>
                                                </Box>
                                                <Typography
                                                    variant="h5"
                                                    fontWeight="bold"
                                                    sx={{
                                                        color: "#4D3F43",
                                                        fontSize: "1rem",
                                                        mb: 2,
                                                        position: "absolute",
                                                        top: "30%",
                                                        left: '10%',
                                                        right: '6%',
                                                    }}
                                                >
                                                    {service.service_name}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: "#4D3F43",
                                                        fontSize: "0.875rem",
                                                        position: 'absolute',
                                                        top: '46%',
                                                        left: '10%',
                                                        right: '6%',
                                                    }}
                                                >
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
            </Box >



            {/* Digital growth section */}

            < section className="section" style={{ backgroundColor: "#F1EEEE", borderRadius: "24px", padding: "40px 0", }}>
                <Container>
                    <Box sx={{ py: { xs: 5, md: 10 }, textAlign: { xs: "center", md: "left" } }}>
                        {about?.length > 0 && (
                            <>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontWeight: 500,
                                        color: "#333",
                                        fontSize: { xs: "32px", md: "80px" },
                                        textTransform: "uppercase",
                                        lineHeight: 1.2
                                    }}
                                    component="div"
                                    dangerouslySetInnerHTML={{ __html: about[0].tc_footer }}
                                />

                                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                                    <Box
                                        sx={{
                                            width: "100%",
                                            height: "2px",
                                            backgroundColor: "#CFC4C9",
                                        }}
                                    />
                                </Box>

                                {/* Line-by-line animation without <br> tags */}
                                <Box
                                    ref={textRef}
                                    sx={{
                                        margin: { xs: "0 auto", md: "0 0 0 50%" },
                                        maxWidth: { xs: "100%", md: "50%" },
                                        color: { xs: "#000000", md: "#CBCBCB" },
                                        fontSize: { xs: "20px", md: "32px" },
                                        fontWeight: 500,
                                        mt: 4
                                    }}
                                >
                                    {splitHtmlIntoLines(about[0]?.tc_about)}
                                </Box>
                            </>
                        )}
                    </Box>
                </Container>
            </section >

            {/* Our products section */}
            < Box sx={{ display: { xs: 'none', md: 'block' } }}>
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
                                    Excellence<br />
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
                                        color: "#b00020",
                                        borderColor: "#b00020",
                                        backgroundColor: "#fff1f3",
                                        textTransform: "uppercase",
                                        mt: { xs: 2, md: 0 },
                                    }}
                                >
                                    Our Products
                                </Box>
                            </Box>

                            <Box
                                ref={sectionRef}
                                sx={{
                                    display: "flex",
                                    flexDirection: { xs: "column", md: "row" },
                                    alignItems: "center",
                                    gap: { xs: "30px", md: "40px" },
                                    justifyContent: "space-between",
                                    zIndex: 1,
                                    background: '#fff',
                                    marginTop: "10px"
                                }}
                            >
                                {/* Left Section - Product List */}
                                <Box sx={{ width: { xs: "100%", md: "50%" }, maxWidth: "500px" }}>
                                    {products.map((product) => (
                                        <Box
                                            key={product.id}
                                            id={`product-${product.id}`}
                                            sx={{ mb: 2, cursor: "pointer" }}
                                            onClick={() => setActiveProduct(product)}
                                        >
                                            <Typography
                                                variant="h2"
                                                sx={{
                                                    color: activeProduct?.id === product.id ? "#000" : "#9E9E9E",
                                                    fontSize: { xs: "22px", md: "30px" },
                                                    fontWeight: 500,
                                                    opacity: 1
                                                }}
                                            >
                                                {product.product_name}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: activeProduct?.id === product.id ? "#4D3F43" : "#9E9E9E",
                                                    fontSize: { xs: "18px", md: "18px" },
                                                    mt: 2
                                                }}
                                            >
                                                {product.product_desc}
                                            </Typography>
                                            <Box sx={{ mt: 2 }}>
                                                <Divider />
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>

                                {/* Right Section - Product Image */}
                                <Box
                                    sx={{
                                        display: { xs: "none", md: "flex" },
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: { xs: "100%", md: "50%" },
                                        maxWidth: "500px",
                                        backgroundColor: "#fff1f3",
                                        padding: "20px",
                                        borderRadius: "24px",
                                    }}
                                >
                                    {activeProduct && (
                                        <img
                                            ref={imageRef}
                                            src={`${SERVER_Image_URL}${activeProduct.product_image}`}
                                            alt={activeProduct.product_name}
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                                maxWidth: "453px",
                                                objectFit: "contain",
                                                transition: "opacity 0.5s ease-in-out",
                                            }}
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
                                    mt: 7,
                                }}
                            >
                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderRadius: 8,
                                        px: { xs: 3, md: 4 },
                                        py: 1.5,
                                        fontWeight: "bold",
                                        color: "#b00020",
                                        borderColor: "#b00020",
                                        textTransform: "inherit",
                                        transition: "all 0.3s ease-in-out",
                                        "&:hover": {
                                            backgroundColor: "#b00020",
                                            color: "#fff",
                                            borderColor: "#b00020",
                                        },
                                    }}
                                    id="all products"
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
                                        color: "#b00020",
                                        borderColor: "#b00020",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        transition: "all 0.3s ease-in-out",
                                        "&:hover": {
                                            backgroundColor: "#b00020",
                                            color: "#fff",
                                            borderColor: "#b00020",
                                        },
                                    }}
                                    id="iconbtn"
                                >
                                    <ArrowOutwardIcon sx={{ fontSize: { xs: "20px", md: "28px" } }} />
                                </Button>
                            </Box>
                        </Box>
                    </Container>
                </section>
            </Box >

            {/* Mobile/Tablet version (sm and below) */}
            < Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <section className="section">
                    <Container>
                        <Box sx={{ py: 4 }}>
                            {/* Header */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    mb: 4,
                                    gap: 2
                                }}
                            >
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontWeight: 300,
                                        color: '#4D3F43',
                                        fontSize: { xs: '32px', sm: '48px' },
                                        textTransform: 'uppercase',
                                        textAlign: { xs: 'center', sm: 'left' }
                                    }}
                                >
                                    Excellence<br />in Action
                                </Typography>

                                <Box
                                    sx={{
                                        borderRadius: '90px',
                                        px: { xs: 3, sm: 4 },
                                        py: 1.5,
                                        fontSize: { xs: '18px', sm: '22px' },
                                        fontWeight: 500,
                                        color: '#b00020',
                                        border: '1px solid #b00020',
                                        backgroundColor: '#fff1f3',
                                        textTransform: 'uppercase',
                                        textAlign: 'center'
                                    }}
                                >
                                    Our Products
                                </Box>
                            </Box>

                            {/* Swiper */}
                            <Box
                                sx={{
                                    width: '100%',
                                    overflow: 'hidden',
                                    mx: 'auto',
                                    '--swiper-pagination-color': '#b00020',
                                    '--swiper-pagination-bullet-size': '10px',
                                    '--swiper-pagination-bullet-horizontal-gap': '6px',
                                    // maxWidth: { xs: '100%', 600: '540px', sm: '720px', md: '1200px' }
                                }}
                            >
                                <Swiper
                                    modules={[Pagination]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    className="products-swiper"
                                    autoplay={{ delay: 5000, disableOnInteraction: true }}
                                    breakpoints={{
                                        600: {
                                            slidesPerView: 1,
                                            spaceBetween: 20
                                        },
                                        900: {
                                            slidesPerView: 3,
                                            spaceBetween: 30
                                        }
                                    }}
                                >
                                    {products.map((product) => (
                                        <SwiperSlide
                                            key={product.id}
                                            className="products-swiper"
                                        >
                                            <Box
                                                sx={{
                                                    height: '530px',
                                                    width: '100%',
                                                    maxWidth: {
                                                        xs: '90%',    // Mobile (<600px)
                                                        600: '320px',  // Exact 600px breakpoint
                                                        sm: '350px',   // Tablet (600-899px)
                                                        md: '380px'    // Desktop (900px+)
                                                    },
                                                    // width: '100%',
                                                    minHeight: '300px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    backgroundColor: '#fff',
                                                    borderRadius: '16px',
                                                    overflow: 'hidden',
                                                    border: '1px solid #E0E0E0',
                                                    transition: 'transform 0.3s ease',
                                                    '&:hover': {
                                                        transform: 'translateY(-5px)'
                                                    },
                                                    margin: '0 auto'
                                                }}
                                            >
                                                {/* Image */}
                                                <Box
                                                    sx={{
                                                        height: '200px',
                                                        backgroundColor: '#fff1f3',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        p: 2,
                                                        flexShrink: 0
                                                    }}
                                                >
                                                    <img
                                                        src={`${SERVER_Image_URL}${product.product_image}`}
                                                        alt={product.product_name}
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'contain',
                                                            maxHeight: '100%'
                                                        }}
                                                    />
                                                </Box>

                                                {/* Content */}
                                                <Box
                                                    sx={{
                                                        p: 3,
                                                        flexGrow: 1,
                                                        display: 'flex',
                                                        flexDirection: 'column'
                                                    }}
                                                >
                                                    <Typography
                                                        variant="h3"
                                                        sx={{
                                                            fontSize: { xs: '20px', sm: '22px' },
                                                            fontWeight: 600,
                                                            color: '#4D3F43',
                                                            mb: 1.5
                                                        }}
                                                    >
                                                        {product.product_name}
                                                    </Typography>

                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            color: '#616161',
                                                            fontSize: { xs: '15px', sm: '16px' },
                                                            lineHeight: 1.6,
                                                            mb: 2,
                                                            flexGrow: 1
                                                        }}
                                                    >
                                                        {product.product_desc}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                            </Box>
                        </Box>
                    </Container>
                </section>
            </Box >

            {/* Company view section */}
            < section className="section" >
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
                                        backgroundColor: "#FEF9FA",
                                        width: "100%",
                                        maxWidth: { xs: "120px", md: "200px" },
                                        height: { xs: "90px", md: "120px" },
                                        borderRadius: "10px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        margin: "auto",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease-in-out",
                                        filter: "grayscale(100%)",
                                        "&:hover": {
                                            filter: "none",
                                            transform: "scale(1.05)",
                                        },
                                    }}
                                >
                                    <img
                                        src={`${SERVER_Image_URL}/${client.client_logo}`}
                                        alt={client.client_name}
                                        style={{ maxWidth: "80%", maxHeight: "80%" }}
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
                                    fontWeight: "bold",
                                    color: "#b00020", // ✅ Higher contrast
                                    borderColor: "#b00020", // ✅ Higher contrast
                                    textTransform: "inherit",
                                    transition: "all 0.3s ease-in-out",
                                    "&:hover": {
                                        backgroundColor: "#b00020",
                                        color: "#fff",
                                        borderColor: "#b00020",
                                    },
                                }}
                                id="loadmore"
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
                                    color: "#b00020", // ✅ Higher contrast
                                    borderColor: "#b00020", // ✅ Higher contrast
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "all 0.3s ease-in-out",
                                    "&:hover": {
                                        backgroundColor: "#b00020",
                                        color: "#fff",
                                        borderColor: "#b00020",
                                    },
                                }}
                                id="icon_btn"
                            >
                                <ArrowOutwardIcon sx={{ fontSize: { xs: "20px", md: "28px" } }} />
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </section >

            {/* Testimonial section */}

            {/* Desktop Section - Show only on md and up */}
            <Box sx={{ display: { xs: "none", md: "block" } }} component="section" className="section">
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
                                {/* <Swiper
                                    effect={'cards'}
                                    grabCursor={true}
                                    loop={true}
                                    navigation={{
                                        nextEl: '.custom-prev-button',
                                        prevEl: '.custom-next-button',
                                    }}
                                    modules={[EffectCards, Navigation]}
                                    className="testimonial-swiper"
                                > */}
                                <Swiper
                                    effect="cards"
                                    grabCursor={true}
                                    loop={false}
                                    onSwiper={setTestimonialSwiper}
                                    onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
                                    navigation={{
                                        nextEl: '.custom-next-button',
                                        prevEl: '.custom-prev-button',
                                    }}
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
                                                    boxShadow: "0px 4px 10px rgba(110, 110, 110, 0.2)",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-between",
                                                    textAlign: "center",
                                                    maxWidth: "90%",
                                                    mx: "auto",
                                                    transition: "box-shadow 0.3s ease-in-out",
                                                }}
                                            >
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: "#666", fontSize: { xs: "14px", md: "16px" } }}
                                                    component="div"
                                                    dangerouslySetInnerHTML={{ __html: testimonial.client_comment }}
                                                />
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
                                            className="custom-prev-button"
                                            disabled={activeSlideIndex === 0}
                                            sx={{
                                                ...navButtonStyle,
                                                opacity: activeSlideIndex === 0 ? 0.5 : 1,
                                                pointerEvents: activeSlideIndex === 0 ? 'none' : 'auto',
                                            }}
                                        >
                                            <ArrowBack />
                                        </IconButton>
                                        <IconButton
                                            className="custom-next-button"
                                            disabled={activeSlideIndex === testimonials.length - 1}
                                            sx={{
                                                ...navButtonStyle,
                                                opacity: activeSlideIndex === testimonials.length - 1 ? 0.5 : 1,
                                                pointerEvents: activeSlideIndex === testimonials.length - 1 ? 'none' : 'auto',
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
            </Box>

            {/* Mobile/Tablet Section - Show only on xs and sm */}
            <Box sx={{
                display: { xs: "block", md: "none" },
                overflow: "hidden",
                width: "100%",
                py: 4
            }}>
                <Container>
                    {/* Title remains the same */}
                    <Typography variant="h4" sx={{ textAlign: "center", mb: 4 }}>
                        Hear it from our clients
                    </Typography>

                    {/* Fixed-width non-responsive Swiper */}
                    <Box sx={{ width: "100%", px: 2 }}>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            className="testimonial-swiper"
                            autoplay={false}
                            breakpoints={{
                                600: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                900: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                }
                            }}
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide
                                    key={testimonial.id}
                                    style={{ width: "100%" }}
                                    className="testimonial-swiper"
                                >
                                    <Box sx={{
                                        height: "340px",
                                        width: '100%',
                                        maxWidth: {
                                            xs: '80%',    // Mobile (<600px)
                                            600: '320px',  // Exact 600px breakpoint
                                            sm: '350px',   // Tablet (600-899px)
                                            md: '380px'    // Desktop (900px+)
                                        },
                                        minHeight: '300px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between', // ← Key change
                                        backgroundColor: '#fff',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        border: '1px solid #E0E0E0',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)'
                                        },
                                        p: 3,
                                        margin: '0 auto'
                                    }}>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#666",
                                                fontSize: "14px",
                                                flexGrow: 1 // ← Allows comment to take available space
                                            }}
                                            dangerouslySetInnerHTML={{ __html: testimonial.client_comment }}
                                        />
                                        <Box sx={{
                                            marginTop: 'auto', // ← Alternative to space-between
                                            textAlign: 'center' // Optional: Center align name
                                        }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    color: "#4D3F43",
                                                    fontWeight: "bold",
                                                    pt: 2 // Add padding if needed
                                                }}
                                            >
                                                {testimonial.client_name}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Container>
            </Box>


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
                                        id="getitnow"
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
                                        id="getitnowicon_btn"
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
