import React from "react";
import { AppBar, Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
    return (
        <>
            {/* Header section */}
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    bottom: 20,
                    // backgroundColor: "#FCEFF0",
                    // borderRadius: "10px",
                    // maxWidth: "22%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#FCEFF0",
                    borderRadius: "10px", // Rounded corners at the top
                    width: "100%", // Full width for small screens
                    // bottom: 0, // Stays at the bottom
                    left: 0,
                    right: 0,
                    py: 1,
                    px: { xs: 2, md: 3 }, // Adjust padding for mobile
                    maxWidth: { md: "22%" }, // Limits width on medium & large screens
                    mx: { md: "auto" },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: 'center',
                        gap: { xs: '18px', md: '32px' },
                        // justifyContent: "space-evenly",
                        width: "100%",
                    }}
                >
                    {/* Logo */}
                    <img src="/images/TrailCode_logo_white.png" alt="Trail Code" style={{ height: '30px' }} />

                    {/* Navigation */}
                    <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: "bold",
                            color: "#4D3F43",
                            display: "flex",
                            alignItems: "center",
                            gap: { xs: '18px', md: '32px' },
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}
                    >
                        <span style={{ color: "#DFD8DB " }}>|</span> Home <span style={{ color: "#DFD8DB " }}>|</span>
                    </Typography>

                    {/* Menu Button */}
                    <IconButton>
                        <MenuIcon sx={{ color: "#4D3F43", fontSize: "24px" }} />
                    </IconButton>
                </Box>
            </AppBar>
        </>
    );
};

export default Header;
