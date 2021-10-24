import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import "../CSS/Header.css";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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
          <i
            class="fas fa-crown"
            style={{ "margin-right": "5px", "font-size": "small" }}
          ></i>
          <p>Resize</p>
        </IconButton>
        <Button
          disabled
          startIcon={<RotateLeftIcon />}
          sx={{ "& > :not(style)": { color: "white" } }}
        ></Button>
        <Button
          disabled
          startIcon={<RotateRightIcon />}
          sx={{ "& > :not(style)": { color: "white" } }}
        ></Button>
      </div>

      <div className="header_middle"></div>

      <div className="header_right">
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              width: "22ch",
              color: "white",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Untitled design-poster"
            sx={{ "& > :not(style)": { color: "white" } }}
          />
        </Box>
        <IconButton>
          <i
            class="fas fa-crown"
            style={{
              "margin-right": "5px",
              color: "gold",
              "font-size": "small",
            }}
          ></i>
          <p>Try Canva Pro</p>
        </IconButton>
        <Button>
          <p>Share</p>
        </Button>
        <Button>
          <FileDownloadOutlinedIcon />
        </Button>
        <IconButton>
          <i
            class="far fa-file-image"
            style={{ "margin-right": "5px", "font-size": "20px" }}
          ></i>
          <p style={{ "font-size": "15px" }}>Print Posters</p>
        </IconButton>
        <Button>
          <MoreHorizOutlinedIcon />
        </Button>
      </div>
    </div>
  );
}

export default Header;
