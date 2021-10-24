import Button from "@mui/material/Button";
import React from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import "../CSS/SideBar.css";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import AppsIcon from "@mui/icons-material/Apps";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import TextFieldsOutlinedIcon from "@mui/icons-material/TextFieldsOutlined";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar_items">
        <Button>
          <AspectRatioIcon />
          <p>Templates</p>
        </Button>
        <Button>
          <AppsIcon />
          <p>Elements</p>
        </Button>
        <Button>
          <BackupOutlinedIcon />
          <p>Uploads</p>
        </Button>
        <Button>
          <TextFieldsOutlinedIcon />
          <p>Text</p>
        </Button>
        <Button>
          <MoreHorizOutlinedIcon />
          <p>More</p>
        </Button>
      </div>
    </div>
  );
}

export default SideBar;
