import React from "react";
import "../CSS/Template.css";
import DragNDrop from "./DragNDrop";

function Template() {
  return (
    <div className="template">
      <div className="template_items">
        <DragNDrop />
      </div>
    </div>
  );
}

export default Template;
