import { useDrag } from "react-dnd";
import React from "react";

export const kesmTypes = {
  KESM: "kesm",
};

const Kesm = ({ kesmId, kesmName, subjectName, duration }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: kesmTypes.KESM,
    item: { kesmId, kesmName },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  const widthDuration = `${duration * 100}px`;

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: "9px",
        fontWeight: "bolder",
        height: "43px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // border: "2px solid",
        width: widthDuration,
        cursor: "move",
        padding: "5px",
        margin: "5px",
        backgroundColor: "#146C94",
        color: "white",
        borderBottom: "3px solid black",
        borderLeft: "2px solid black",
        borderRadius: "15px",
        flexDirection: "column",
      }}
    >
      {kesmName}
      <span style={{ color: "red" }}> {subjectName} </span>
    </div>
  );
};

export default Kesm;
