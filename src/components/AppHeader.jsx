import React from "react";
import "./AppHeader.css";
import { Box, Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const AppHeader = () => {
  return (
    <>
      <header className="App_header">
        <Box className="button_header">
          <MenuIcon />
          <Typography variant="h6">Design Board</Typography>
          <Typography sx={{ color: "lightgrey" }}>(Draft)</Typography>
        </Box>
        <Box className="button_header">
          <Button
            sx={{
              color: "black",
              boxShadow: "none",
            }}
          >
            81.5%
            <KeyboardArrowDownIcon />
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#dfe7ff",
              color: "#5046e4",
              boxShadow: "none",
              textTransform: "none",
            }}
          >
            <PlayArrowIcon />
            Preview
          </Button>
        </Box>
      </header>
    </>
  );
};

export default AppHeader;
