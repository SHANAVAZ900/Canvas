import React from "react";
import "../CSS/Template.css";
import DragNDrop from "./DragNDrop";
import Card from "./Card";

function Template() {
  return (
    <div className="template">
      <div className="template_items">
        <div className="flexbox">
          <DragNDrop id="board-1" className="board">
            <Card id="card-1" className="card" draggable="true">
              <p>Card One</p>
            </Card>
          </DragNDrop>
        </div>
      </div>
    </div>
  );
}

export default Template;
