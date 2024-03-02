import React from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { Navbar } from "./Navbar";
import { Reveal } from "../components/Reveal";
import Profile from "../assets/Profile.jpg";

export const Home = ({ callButton }) => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const imageSize = isSmallScreen ? 280 : 320;

  return (
    <Box
      height="100vh"
      width="100%"
      bgcolor="primary.main"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Navbar callButton={(str) => callButton(str)} />
      <Container maxWidth="md">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item sm={6} xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Reveal>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    color: "primary.light",
                    fontSize: { xs: "80px", md: "100px" },
                    fontWeight: 650,
                    lineHeight: 0.8,
                  }}
                >
                  <span
                    style={{ textShadow: "0 20px 25px rgba(0, 0, 0, 0.7)" }}
                  >
                    Hey
                  </span>
                  <br />
                  There!
                </Typography>
              </Reveal>
            </Box>
          </Grid>
          <Grid item sm={6} xs={12} container justifyContent="center">
            <Reveal>
              <img
                src={Profile}
                style={{
                  height: imageSize,
                  width: imageSize,
                  objectFit: "cover",
                  borderRadius: "180px",
                  border: "2px solid white",
                }}
                alt=""
              />
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
