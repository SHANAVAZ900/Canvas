import React from "react";
import DragNDrop from "./DragNDrop";
import Card from "./Card";
import "../CSS/CardBoard.css";

function CardBoard() {
  return (
    <div className="cardBoard">
      <div className="flexbox">
        <DragNDrop id="board-2" className="board">
          <Card id="card-2" className="card" draggable="true">
            <p>Card Two</p>
          </Card>
        </DragNDrop>
      </div>
    </div>
  );
}

export default CardBoard;
