import { useDrag } from "react-dnd";
import React from "react";

export const kesmTypes = {
  KESM: "kesm",
};

const Kesm= ({ id, name }) => {
 
  const [{ isDragging }, drag] = useDrag(() => ({
    type: kesmTypes.KESM,
    item: { id, name },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        border: "solid 2px",
        width: "fit-content",
        cursor: "move",
        padding: "5px",
        margin: "5px",
      }}
    >
      {name}
    </div>
  );
};

export default Kesm;
