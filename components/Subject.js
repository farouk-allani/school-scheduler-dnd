import { useDrag } from "react-dnd";
import React from "react";

export const ItemTypes = {
  SUBJECT: "subject",
};

const Subject = ({ id, name, duration, backgroundColor }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.SUBJECT,
    item: { id, name, duration },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  console.log("backgroundColor", backgroundColor);
  const widthDuration = `${duration * 100}px`;

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontWeight: "bolder",
        height: "43px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid",
        width: "200px",
        cursor: "move",
        padding: "5px",
        margin: "5px",
        width: widthDuration,
        backgroundColor: backgroundColor,
      }}
    >
      {name}
    </div>
  );
};

export default Subject;
