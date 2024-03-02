import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import { Reveal } from "../components/Reveal";
import skill from "../assets/skill.jpg";

function MyBox({ item }) {
  return (
    <Box
      display="inline-block"
      px={1.8}
      m={1}
      py={1}
      border="1px solid #cc005f"
      borderRadius="3px"
      sx={{
        fontFamily: "Montserrat",
        color: "primary.main",
        fontWeight: 500,
        fontSize: "14px",
        ":hover": {
          bgcolor: "primary.main",
          color: "primary.light",
        },
      }}
    >
      {item}
    </Box>
  );
}

export const Skills = () => {
  const developmentItems = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "C/C++",
    "Java",
    "Python",
    "NodeJS",
    "Tailwind CSS",
    "MS-Excel",
  ];
  const toolsItems = ["Visual Studio Code", "Git/Github", "Notepad++"];

  return (
    <Box py={10} px={3} bgcolor="primary.light">
      <Container maxWidth="md">
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
              <b>Skills</b>
            </u>
          </Typography>
        </Reveal>
        <Grid container pt={8}>
          <Grid item sm={6} xs={12} display="flex" alignItems="center">
            <Reveal>
              <Box pb={7}>
                <Typography variant="h6" color="primary.main" gutterBottom>
                  <b>Development</b>
                </Typography>
                {developmentItems.map((item) => {
                  return <MyBox key={item} item={item} />;
                })}

                <Typography variant="h6" color="primary.main" gutterBottom>
                  <br />
                  <b>Tools</b>
                </Typography>
                {toolsItems.map((item) => {
                  return <MyBox key={item} item={item} />;
                })}
              </Box>
            </Reveal>
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Reveal>
              <img
                src={skill}
                style={{
                  width: "100%",
                  borderRadius: "20px",
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
