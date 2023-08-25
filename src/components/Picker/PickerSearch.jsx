import { TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const PickerSearch = () => {
  return (
    <div style={{ marginBottom: "25px" }}>
      <TextField
        variant="outlined"
        placeholder="Search Components"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      ></TextField>
    </div>
  );
};

export default PickerSearch;
