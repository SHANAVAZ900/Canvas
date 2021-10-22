import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import "../CSS/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <ArrowBackIosIcon />
          <p>Home</p>
        </IconButton>
        <Button>
          <p>File</p>
        </Button>
        <IconButton>
          <i class="fas fa-crown" style={{ marginRight: "5px" }}></i>
          <p>Resize</p>
        </IconButton>
      </div>

      <div className="header_middle"></div>

      <div className="header_right"></div>
    </div>
  );
}

export default Header;
