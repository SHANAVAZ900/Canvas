import React from "react";
import "../CSS/Template.css";
import DragNDrop from "./DragNDrop";
import Card from "./Card";
import TextField from "@mui/material/TextField";

function Template() {
  return (
    <div className="template">
      <div className="template_items">
        <div className="flexbox">
          <DragNDrop id="board-1" className="board">
            <Card id="card-1" className="card" draggable="true">
              <img
                id="card-1"
                className="card"
                draggable="true"
                src="https://superdevresources.com/wp-content/uploads/2014/10/cute-diwali-background-with-paisley-elements.jpg"
                style={{ width: "165px", height: "150px" }}
                alt=""
              />
            </Card>
            <Card id="card-2" className="card" draggable="true">
              <p
                id="card-2"
                className="card"
                draggable="true"
                style={{
                  width: "120px",
                  height: "50px",
                  background: "white",
                  color: "red",
                }}
              >
                <TextField defaultValue="Hello World" />
              </p>
            </Card>
          </DragNDrop>
        </div>
      </div>
    </div>
  );
}

export default Template;
