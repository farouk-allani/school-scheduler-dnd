import { useDrag } from "react-dnd";
import React from "react";

export const ItemTypes = {
  SUBJECT: "subject",
};

const Subject = ({ id, name ,duration }) => {
 
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.SUBJECT,
    item: { id, name, duration },
    


    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),


  }));

  const widthDuration =`${duration*100}px`;
  
 

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        border: "solid 2px",
        width: widthDuration,
        cursor: "move",
        padding: "5px",
        margin: "5px",
      }}
    
    >
      {name}
    </div>
  );
};

export default Subject;
