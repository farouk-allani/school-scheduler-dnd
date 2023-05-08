
import { useDrag } from "react-dnd";
import { draggedSubject } from "../redux/action";
import { useDispatch } from "react-redux";
import React from "react";


export const ItemTypes = {
  SUBJECT: "subject",
};

const Subject = ({ id, name, setDraggedSubject }) => {
    const dispatch = useDispatch();
    const [{ isDragging }, drag] = useDrag(() => ({
      type: ItemTypes.SUBJECT,
      item: () => {
        setDraggedSubject(name);
        return { id,name };
        },
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
          width: "100px",
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