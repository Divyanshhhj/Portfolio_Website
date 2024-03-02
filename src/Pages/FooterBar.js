import React, { useState } from "react";
import { Box, Stack, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function FooterIconHelper({ item }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      px={1.5}
    >
      <Link href={item.linkIs} underline="none" target="_blank">
        {
          <item.icon
            style={{
              color: isHovered ? "#cc005f" : "#fafaff",
              fontSize: 28,
            }}
          />
        }
      </Link>
    </Box>
  );
}

export const FooterBar = () => {
  const footerLinks = [
    { icon: EmailIcon, linkIs: "mailto:divyansh87264@gmail.com" },
    {
      icon: LinkedInIcon,
      linkIs: "https://www.linkedin.com/in/divyansh-joshi-721600248/",
    },
    { icon: GitHubIcon, linkIs: "https://github.com/Divyanshhhj" },
    {
      icon: InstagramIcon,
      linkIs: "https://www.instagram.com/divyanshhhj_/",
    },
    {
      icon: FacebookIcon,
      linkIs: "https://www.facebook.com/Divyanshj28",
    },
    { icon: TwitterIcon, linkIs: "https://x.com/Divyanshjoshi28" },
  ];

  return (
    <Box bgcolor="primary.dark" display="flex" justifyContent="center" py={3}>
      <Stack direction="row">
        {footerLinks.map((obj, index) => {
          return <FooterIconHelper key={index} item={obj} />;
        })}
      </Stack>
    </Box>
  );
};
