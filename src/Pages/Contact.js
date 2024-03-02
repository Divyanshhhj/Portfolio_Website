import React, { useState } from "react";
import {
  Grid,
  Box,
  Button,
  TextField,
  Typography,
  Container,
  useMediaQuery,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import { Reveal } from "../components/Reveal";

export const Contact = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const alignValue = isSmallScreen ? "center" : "inherit";

  const [stateDisabled, setStateDisabled] = useState(false);
  const [sendMessageSucess, setSendMessageSucess] = useState(false);
  const [sendMessageError, setSendMessageError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStateDisabled(true);
    const formData = new FormData(e.target);
    const obj = {
      name: formData.get("name"),
      email: formData.get("email"),
      description:
        "Message from Divyansh portfolio -> " + formData.get("description"),
    };
    emailjs
      .send("service_zjrq4h8", "template_rmlm0sy", obj, "zwD-m8x18H1xY4uzR")
      .then(
        (result) => {
          setFormData({
            name: "",
            email: "",
            description: "",
          });
          setSendMessageSucess(true);
          setStateDisabled(false);
        },
        (error) => {
          setSendMessageError(true);
          setStateDisabled(false);
          console.log(error.text);
        }
      );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Box pt={10} pb={15} px={3} bgcolor="primary.light">
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
              <b>Contact</b>
            </u>
          </Typography>
        </Reveal>
        <Grid container pt={8}>
          <Grid item sm={6} xs={12}>
            <Box pb={8}>
              <Reveal>
                <Typography
                  variant="h6"
                  color="primary.main"
                  gutterBottom
                  align={alignValue}
                >
                  <b>EMAIL</b>
                </Typography>
                <Typography color="primary.text" align={alignValue}>
                  divyansh87264@gmail.com
                </Typography>
                <Typography
                  variant="h6"
                  color="primary.main"
                  gutterBottom
                  align={alignValue}
                >
                  <br />
                  <b>PHONE</b>
                </Typography>
                <Typography color="primary.text" align={alignValue}>
                  +91 62640-40060
                </Typography>
              </Reveal>
            </Box>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Box component="form" onSubmit={handleSubmit}>
              <Reveal>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      name="name"
                      id="name"
                      label="Name"
                      required
                      fullWidth
                      placeholder="Enter Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      placeholder="Enter Your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="description"
                      name="description"
                      label="Message"
                      placeholder="Enter Your Message"
                      multiline
                      rows={6}
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  disabled={stateDisabled}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3 }}
                >
                  {stateDisabled ? (
                    <CircularProgress size={24} />
                  ) : (
                    "Let's Talk"
                  )}
                </Button>
              </Reveal>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={sendMessageSucess}
        autoHideDuration={3500}
        onClose={() => {
          setSendMessageSucess(false);
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => {
            setSendMessageSucess(false);
          }}
          severity="success"
          variant="filled"
        >
          Mail sent successfully.
        </Alert>
      </Snackbar>
      <Snackbar
        open={sendMessageError}
        autoHideDuration={3500}
        onClose={() => {
          setSendMessageError(false);
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => {
            setSendMessageError(false);
          }}
          severity="error"
          variant="filled"
        >
          Error sending mail.
        </Alert>
      </Snackbar>
    </Box>
  );
};
