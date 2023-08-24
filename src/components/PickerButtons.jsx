import { Box, Typography, hexToRgb } from "@mui/material";
import React from "react";

const PickerButtons = ({ imgURL, Heading, subHeading, onClick }) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          marginBottom: "25px",
          paddingBottom: "25px",
          borderBottom: "1px solid #E9EFF2",
        }}
        onClick={onClick}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <div
            style={{
              height: "48px",
              width: "48px",
              boxShadow: "3px 4px 20px #A0B8C789",
              borderRadius: "4px",
            }}
          >
            <img
              src={imgURL}
              alt={Heading}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <Box sx={{ marginLeft: "15px", textAlign: "left", width: "80%" }}>
            <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
              {Heading}
            </Typography>
            <Typography sx={{ color: "#707880", fontSize: "13px" }}>
              {subHeading}
            </Typography>
          </Box>
        </Box>
      </button>
    </div>
  );
};

export default PickerButtons;
