import React from "react";

function Card(props) {
  const dragStart = (e) => {
    const target = e.target;

    e.dataTransfer.setData("card_id", target.id);

    /*setTimeout(() => {
      target.style.display = "none";
    }, 0);*/
  };

  const dragOver = (e) => {
    e.stopPropagation();
    const target1 = e.target;

    e.dataTransfer.setData("card_id", target1.id);
    target1.style.display = "block";
  };

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragover={dragOver}
    >
      {props.children}
    </div>
  );
}

export default Card;
