import React from "react";
import { Grid, Box, Typography, Container, Link } from "@mui/material";
import { Reveal } from "../components/Reveal";
import Weather from "../assets/weather.jpg";
import netflix from "../assets/netflix.png";
import portfolio from "../assets/portfolio.png";

function CardHelper({ project }) {
  return (
    <Box justifyItems="center">
      <Reveal>
        <Box className="portfolio__img">
          <img
            src={project.ImageSrc}
            style={{
              width: "100%",
            }}
            alt=""
          />
          <Box className="portfolio__link">
            <Box mx={2}>
              <Link href={project.Url} underline="none" target="_blank">
                <Typography color="primary.dark" sx={{ fontWeight: 500 }}>
                  {project.Description}
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Reveal>
    </Box>
  );
}

export const Portfolio = () => {
  const projects = [
    {
      Description: "My portfolio website build with React.js and Material UI.",
      Url: "https://github.com/Divyanshhhj/Portfolio_Website",
      ImageSrc: portfolio,
    },
    {
      Description:
        "Developed a weather application will offer real-time information and forecasts, aiding users in making informed day-to-day decisions.",
      Url: "https://github.com/Divyanshhhj/Weather_web_app/tree/main/Weather_webApp",
      ImageSrc: Weather,
    },
    {
      Description:
        "Developed Netflix clone that replicates the functionality and features of the original Netflix platform.",
      Url: "https://github.com/Divyanshhhj/Netflix_homepage",
      ImageSrc: netflix,
    },
  ];
  return (
    <Box py={10} px={3} bgcolor="primary.light">
      <Container maxWidth="lg">
        <Reveal>
          <Typography
            variant="h4"
            align="center"
            color="primary.dark"
            gutterBottom
          >
            <u
              style={{
                textDecorationColor: "#cc005f",
                textUnderlineOffset: "8px",
              }}
            >
              <b>Portfolio</b>
            </u>
          </Typography>
        </Reveal>
        <Grid container spacing={4} pt={8}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <CardHelper project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
