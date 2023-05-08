import styles from "../styles/Home.module.css";
import { useDrag, useDrop } from "react-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import React from "react";
import Subject from "../components/Subject";
import { useSelector, useDispatch } from "react-redux";
import { dropSubject, unDropSubject } from "../redux/action";
import { insertSubject } from "../redux/action";
import SubjectsTable from "../components/SubjectsTable";
import TeacherTable from "../components/TeacherTable";


export const ItemTypes = {
  SUBJECT: "subject",
};

export const Cell = ({ id, subject, setSubject, day, time , isCellAvailable}) => {
  const [{ isOver,canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.SUBJECT,
    canDrop : (item) => isCellAvailable(item.name,day, time),
    drop: (item) => setSubject(id, item.id, day, time),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      
      
    }),
    
  }));

  return (
    <div ref={drop} className={isOver ? (canDrop ? "cell-over-green" : "cell-over-red") : "cell"}>
      {subject}
    </div>
  );
};

export default function Home() {
  const subjects = useSelector((state) => state.handleSubjects);
  const rows = useSelector((state) => state.handleRows);

  
  const dispatch = useDispatch();

  const setSubject = (id, subjectId, day, time) => {

    // check if the case is already filled first

    if (rows.find((row) => row.id === id)[day] !== "") {
      alert("هذه الخانة ممتلئة ");
      return;
    }

    const selectedSubject = subjects.find(
      (subject) => subject.id === subjectId
    );
    console.log("selectedSubject", selectedSubject);
    // Check if the selected subject is available at the specified day and time
    const isAvailable = selectedSubject.availability.some(
      (availability) => availability.day === day && availability.time === time
    );
    
    if (!isAvailable) {
      alert("هذا المقرر غير متاح في هذا الوقت");
      return;
    }

    dispatch(dropSubject(subjectId));

    const subjectName = subjects.find(
      (subject) => subject.id === subjectId
    ).name;
    const row = rows.find((row) => row.id === id);
    console.log("row", row);

    dispatch(insertSubject(row, day, subjectName));
  };

  const emptyCell = (id, day) => {
    const row = rows.find((row) => row.id === id);
    console.log("row", row);
    // switch isDropped to false
    const subject = subjects.find((subject) => subject.name === row[day]);
    console.log("subject", subject);
    if (subject === undefined) {
      return;
    }
    dispatch(unDropSubject(subject.id));

    dispatch(insertSubject(row, day, ""));
  };
  
  

  const isCellAvailable = (subjectName,day,time ) => {
    // Your logic to check if the cell is available
    // Return true if it is available, false otherwise
 
    const subject = subjects.find((subject) => subject.name === subjectName);
    console.log('subject for color check', subject)
    const isAvailable = subject?.availability?.some(
      (availability) => availability.day === day && availability.time === time
    );
    console.log('isAvailable for color', isAvailable)
    return isAvailable;
  
    

  };

  return (
    <div className={styles.container}>
      <DndProvider backend={HTML5Backend}>

        <SubjectsTable rows={rows} setSubject={setSubject} emptyCell={emptyCell} isCellAvailable={isCellAvailable} /> 
        
        <div className={styles.subjects}>
        {subjects
          .filter((subject, i) => subject.isDropped === false)
          .map((subject) => (
            <Subject key={subject.id} id={subject.id} name={subject.name} />
          ))}

        <TeacherTable kesmRows={kesmRows} setKesm={setKesm} emptyKesmCell={emptyKesmCell} isKesmCellAvailable={isKesmCellAvailable} />
      </div>

      </DndProvider>
    </div>
  );
}
