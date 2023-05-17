import { useDrag } from "react-dnd";
import React from "react";
import Badge from '@mui/material/Badge'

export const ItemTypes = {
  SUBJECT: "subject",
};

const Subject = ({ id, name, duration, backgroundColor,classRoom }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.SUBJECT,
    item: { id, name, duration },

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
        fontWeight: "bolder",
        height: "43px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // border: "2px solid",
        // width: "200px",
        cursor: "move",
        padding: "5px",
        margin: "5px",
        width: widthDuration,
        backgroundColor: backgroundColor,
        color: "white",
    borderBottom: "3px solid black",
    borderLeft: "2px solid black",
    borderRadius:"15px",
      }}
    >
      <Badge badgeContent={classRoom} color="success">
        <div style={{marginRight:'20px'}}>
      {name}
        </div>
      </Badge> 
    </div>
   
  );
};

export default Subject;
