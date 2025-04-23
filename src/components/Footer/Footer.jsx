import React from "react";
import { Box, Container, Link, Typography } from "@mui/material";

const Footer = () => {
    return (
        <>
            {/* Footer section */}
            <section style={{ marginBottom: "40px" }}>
                <Container>
                    <Box
                        sx={{
                            backgroundColor: "#FCEFF0",
                            borderRadius: "24px",
                            py: { xs: 4, md: 6 },
                            px: { xs: 3, md: 6 },
                            mt: 5,
                        }}
                    >
                        {/* Top Section */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: { xs: 3, md: 0 },
                                textAlign: { xs: "center", md: "left" },
                            }}
                        >
                            {/* Left Side - Logo & Navigation */}
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-start" } }}>
                                <img src="images/TrailCode_logo_white.png" alt="Logo" style={{ height: "40px" }} />

                                {/* Navigation Links with Slashes */}
                                <Typography sx={{ fontSize: "14px", color: "#4D3F43", mt: 2 }}>
                                    {["Home", "Services", "Clients", "About", "Contact"].map((item, index, array) => (
                                        <span key={item}>
                                            <Link href="#" sx={{ textDecoration: "none", color: "#4D3F43" }}>
                                                {item}
                                            </Link>
                                            {index !== array.length - 1 && " / "}
                                        </span>
                                    ))}
                                </Typography>
                            </Box>

                            {/* Right Side - Contact Info */}
                            <Typography
                                sx={{
                                    color: "#4D3F43",
                                    fontSize: {
                                        xs: "12px",
                                        sm: "14px",
                                        md: "16px",
                                        lg: "18px"
                                    },
                                    display: "flex",
                                    flexDirection: { xs: "column", sm: "row" },
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: { xs: 0, sm: 1 },
                                    textAlign: "center"
                                }}
                            >
                                <Link
                                    href="mailto:info@trailcode.com"
                                    sx={{
                                        textDecoration: "none",
                                        color: "#4D3F43",
                                        mr: { sm: 1 },
                                        mb: { xs: 0.5, sm: 0 }
                                    }}
                                >
                                    info@trailcode.com
                                </Link>

                                <Box
                                    component="span"
                                    sx={{
                                        display: { xs: "none", sm: "block" },
                                        color: "#4D3F43"
                                    }}
                                >
                                    |
                                </Box>

                                <Link
                                    href="tel:15852102428"
                                    sx={{
                                        textDecoration: "none",
                                        color: "#4D3F43",
                                        mx: { sm: 1 },
                                        mb: { xs: 0.5, sm: 0 }
                                    }}
                                >
                                    1.585.210.2428
                                </Link>

                                <Box
                                    component="span"
                                    sx={{
                                        display: { xs: "none", sm: "block" },
                                        color: "#4D3F43"
                                    }}
                                >
                                    |
                                </Box>

                                <Link
                                    href="tel:91278242777"
                                    sx={{
                                        textDecoration: "none",
                                        color: "#4D3F43",
                                        ml: { sm: 1 },
                                        mb: { xs: 0.5, sm: 0 }
                                    }}
                                >
                                    91.278.242777
                                </Link>
                            </Typography>

                        </Box>

                        {/* Divider */}
                        <Box sx={{ borderTop: "1px solid #E0E0E0", my: { xs: 1, md: 3 } }} />

                        {/* Bottom Section */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                justifyContent: "space-between",
                                alignItems: "center",
                                textAlign: { xs: "center", md: "left" },
                                gap: { xs: 1 }
                            }}
                        >
                            {/* Copyright */}
                            <Typography sx={{ fontSize: "12px", color: "#4D3F43" }}>
                                ©{new Date().getFullYear()},{" "}
                                <Link
                                    href="https://trailcode.online/shreya/"
                                    target="_blank"
                                    rel="noopener"
                                    sx={{ color: "#4D3F43", textDecoration: "none" }}
                                >
                                    Trailcode LLC
                                </Link>
                                . All Rights Reserved.
                            </Typography>

                            {/* Social Media Links */}
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                {/* LinkedIn */}
                                <Link
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener"
                                    sx={{ display: "flex", alignItems: "center" }}
                                >
                                    <img src="images/LinkedIn.svg" alt="LinkedIn" style={{ height: "20px" }} />
                                </Link>

                                {/* Instagram */}
                                <Link
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener"
                                    sx={{ display: "flex", alignItems: "center" }}
                                >
                                    <img src=" images/Instagram.svg" alt="Instagram" style={{ height: "20px" }} />
                                </Link>

                                {/* Twitter */}
                                <Link
                                    href="https://www.twitter.com"
                                    target="_blank"
                                    rel="noopener"
                                    sx={{ display: "flex", alignItems: "center" }}
                                >
                                    <img src="images/Twitter.svg" alt="Twitter" style={{ height: "20px" }} />
                                </Link>
                            </Box>


                        </Box>
                    </Box>
                </Container>
            </section>
        </>
    );
};

export default Footer;
