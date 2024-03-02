import React from "react";
import {
  Button,
  Grid,
  Box,
  Typography,
  Container,
  useMediaQuery,
} from "@mui/material";
import { Reveal } from "../components/Reveal";
import Profile from "../assets/Profile.jpg";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Resume from "../assets/Divyansh_Joshi_Resume.pdf";

export const About = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const imageSize = isSmallScreen ? 110 : 165;
  const alignValue = isSmallScreen ? "center" : "inherit";

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
              <b>About Me</b>
            </u>
          </Typography>
        </Reveal>
        <Grid container pt={8}>
          <Grid
            item
            sm={4}
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
            pb={2}
          >
            <Reveal>
              <img
                src={Profile}
                style={{
                  height: imageSize,
                  width: imageSize,
                  objectFit: "cover",
                  borderRadius: "180px",
                }}
                alt=""
              />
            </Reveal>
          </Grid>
          <Grid item sm={8} xs={12}>
            <Box pl={{ sm: 3 }}>
              <Reveal>
                <Typography
                  variant="h5"
                  color="primary.main"
                  gutterBottom
                  align={alignValue}
                >
                  <b>I'am Divyansh Joshi</b>
                </Typography>
                <Typography color="primary.text" align={alignValue}>
                  ~ Software Developer
                </Typography>
                <Typography color="primary.text" sx={{ textAlign: "justify" }}>
                  <br />
                  Passionate developer with expertise in HTML, CSS, and
                  JavaScript, specializing in crafting seamless and visually
                  appealing user experiences. Proficient in React JS, I bring
                  creativity and precision to every project, ensuring a perfect
                  blend of functionality and aesthetics. Committed to delivering
                  innovative solutions that elevate online presence and user
                  engagement.
                </Typography>
                <br />
                <a
                  href={Resume}
                  download="Divyansh_Joshi_Resume"
                  style={{
                    textDecoration: "none",
                    display: "inherit",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      ":hover": {
                        bgcolor: "primary.main",
                        color: "primary.light",
                      },
                    }}
                    endIcon={<FileDownloadIcon />}
                  >
                    Resume
                  </Button>
                </a>
              </Reveal>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
