import React from "react";
import DragNDrop from "./DragNDrop";
import Card from "./Card";
import "../CSS/CardBoard.css";

function CardBoard() {
  return (
    <div className="cardBoard">
      <div className="flexbox1">
        <DragNDrop id="board-3" className="board1">
          <Card id="card-3" className="card1" draggable="false">
            <p className="para"></p>
          </Card>
        </DragNDrop>
      </div>
    </div>
  );
}

export default CardBoard;
