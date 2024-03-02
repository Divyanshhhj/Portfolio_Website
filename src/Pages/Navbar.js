import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 3 : 0,
  });
}

export const Navbar = ({ callButton }) => {
  const navItems = ["Home", "About", "Skills", "Portfolio", "Contact"];
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Box>
      <ElevationScroll>
        <AppBar>
          <Toolbar sx={{ mx: { xs: "none", md: "36px" } }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Arizonia",
                flexGrow: "1",
                my: "18px",
              }}
            >
              Divyansh Joshi
            </Typography>
            <Box display={{ xs: "none", md: "flex" }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  onClick={() => {
                    callButton(item);
                  }}
                  sx={{ color: "inherit", mx: "20px" }}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <Box display={{ sm: "flex", md: "none" }}>
              <IconButton
                sx={{ color: "inherit" }}
                onClick={() => {
                  setShowSidebar(!showSidebar);
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Drawer
        anchor="right"
        open={showSidebar}
        sx={{ display: { sm: "flex", md: "none" } }}
        onClose={() => {
          setShowSidebar(!showSidebar);
        }}
      >
        <Box bgcolor="primary.bglayer" flexGrow={1} py={2.5}>
          <Box display="flex" justifyContent="flex-end" mx={2.5}>
            <IconButton
              onClick={() => {
                setShowSidebar(!showSidebar);
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Box mx={7}>
            <List>
              {navItems.map((item) => (
                <ListItem key={item}>
                  <ListItemButton
                    onClick={() => {
                      callButton(item);
                      setShowSidebar(!showSidebar);
                    }}
                  >
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};
