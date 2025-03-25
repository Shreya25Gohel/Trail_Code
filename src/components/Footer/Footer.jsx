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
                                <img src="/images/TrailCode_logo_white.png" alt="Logo" style={{ height: "40px" }} />

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
                            <Typography sx={{ color: "#4D3F43", fontSize: { xs: "14px", md: "18px" } }}>
                                info@trailcode.com | 1.585.210.2428 | 91.278.242777
                            </Typography>
                        </Box>

                        {/* Divider */}
                        <Box sx={{ borderTop: "1px solid #E0E0E0", my: 3 }} />

                        {/* Bottom Section */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                justifyContent: "space-between",
                                alignItems: "center",
                                textAlign: { xs: "center", md: "left" },
                            }}
                        >
                            {/* Copyright */}
                            <Typography sx={{ fontSize: "12px", color: "#4D3F43" }}>
                                ©{new Date().getFullYear()}, Trail Code. All Rights Reserved.
                            </Typography>

                            {/* Social Media Links */}
                            <Box sx={{ display: "flex", gap: 2 }}>
                                <Typography fontWeight="bold" sx={{ fontSize: "14px", color: "#4D3F43" }}>Connect:</Typography>
                                {["LinkedIn", "Instagram", "Twitter(X)"].map((platform) => (
                                    <Link key={platform} href="#" sx={{ textDecoration: "none", color: "#4D3F43", fontSize: "14px" }}>
                                        {platform}
                                    </Link>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </section>
        </>
    );
};

export default Footer;
