import styles from "../styles/Home.module.css";
import { useDrag, useDrop } from "react-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import React, { useEffect } from "react";
import Subject from "../components/Subject";
import { useSelector, useDispatch } from "react-redux";
import { dropSubject, unDropSubject } from "../redux/action";
import { insertSubject } from "../redux/action";
import SubjectsTable from "../components/SubjectsTable";
import TeacherTable from "../components/TeacherTable";
import Kesm from "../components/Kesm";
import { dropKesm, unDropKesm } from "../redux/action";

export const ItemTypes = {
  SUBJECT: "subject",
};

export const Cell = ({
  id,
  subject,
  setSubject,
  day,
  time,
  isCellAvailable,
  // selectedSubjectDuration
  nextCell,
}) => {
  const [isCellFilled, setIsCellFilled] = React.useState(false);
  const [droppedSubjectDuration, setDroppedSubjectDuration] = React.useState(
    null
  );
  const [backgroundColor, setBackgroundColor] = React.useState("");

  
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    
    accept: ItemTypes.SUBJECT,
    canDrop: (item) => isCellAvailable(item.name, day, time, item.duration),
    drop: (item) =>  setSubject(id, item.id, day, time),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      
    }),
  }));

  const isNextCell=nextCell?.rowId===id && nextCell?.day===day
  
  const subjects = useSelector((state) => state.handleSubjects);
  

  useEffect(() => {
   

    if (subject !== "") {
       console.log("subject", subject)
       const subjectString=subject.toString()
       console.log("Subject=", subjects.filter( (subject) => subject.name === subjectString))

      const duration= subjects.find( (subject) => subject.name == subjectString)?.duration
      setBackgroundColor(subjects.find( (subject) => subject.name == subjectString)?.backgroundColor)
       console.log("backgroundColor", backgroundColor)
      
      setIsCellFilled(true);
      setDroppedSubjectDuration(duration);
      console.log("duration", duration)
    } else {
      setIsCellFilled(false);
      setDroppedSubjectDuration(null);
    }
  }, [subject]);
  return (
    <div
      ref={drop}
      className={
        isOver||isNextCell ? (canDrop  ? "cell-over-green" : "cell-over-red") : ( isCellFilled &&droppedSubjectDuration===2? "mergedCell": "cell")
      }
    //  style={ isOver? {width:`${selectedSubjectDuration*100}px`}:{}  }
    // style={{width:'auto'}}

    style={{
      backgroundColor:(isCellFilled &&droppedSubjectDuration===2)||(isCellFilled&&droppedSubjectDuration===1)? backgroundColor:""
    }}
    >
      {subject}
    </div>
  );
};

export default function Home() {
  const [selectedSubjectDuration, setSelectedSubjectDuration] = React.useState(null);
  const subjects = useSelector((state) => state.handleSubjects);
  const rows = useSelector((state) => state.handleRows);
  const kesmRows = useSelector((state) => state.handleKesmRows);
  const aksem= useSelector((state) => state.handleAksem);

  const dispatch = useDispatch();

  const setKesm = (kesmId, dayAndTime) => {
    dispatch(dropKesm(kesmId, dayAndTime));
  };
  const emptyKesmCell = (kesmId) => {
    dispatch(unDropKesm(kesmId));
  };
  const isKesmCellAvailable = (subjectName, day, time) => {
    const kesm = kesmRows.find((kesm) => kesm.dayAndTime === day + time);
    if (kesm) {
      if (kesm.subjectName === subjectName) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };
   








  const setSubject = (id, subjectId, day, time) => {
    // check if the case is already filled first

    if (rows.find((row) => row.id === id)[day] !== "") {
      alert("هذه الخانة ممتلئة ");
      return;
    }

    const selectedSubject = subjects.find(
      (subject) => subject.id === subjectId
    );
   
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

      dispatch(insertSubject(row, day, subjectName));

  };


  
  const emptyCell = (id, day) => {
    const row = rows.find((row) => row.id === id);

    // switch isDropped to false
    const subject = subjects.find((subject) => subject.name === row[day]);
 
    if (subject === undefined) {
      return;
    }
    dispatch(unDropSubject(subject.id));

    dispatch(insertSubject(row, day, ""));
  };

  const isCellAvailable = (subjectName, day, time, duration) => {
 // set duration
 setSelectedSubjectDuration(duration);
    

    const subject = subjects.find((subject) => subject.name === subjectName);
 
    const isAvailable = subject?.availability?.some(
      (availability) => availability.day === day && availability.time === time
    );
   
    
    
    

    return isAvailable;
  };

  return (
    <div className={styles.container}>
      <DndProvider backend={HTML5Backend}>
      <div className={styles.kesmName} >
          القسم: سنة أولى إبتدائي الشابي
        </div>
        <SubjectsTable
          rows={rows}
          setSubject={setSubject}
          emptyCell={emptyCell}
          isCellAvailable={isCellAvailable}
          selectedSubjectDuration={selectedSubjectDuration}

        />

        <div className={styles.subjects}>
          {subjects
            .filter((subject, i) => subject.isDropped === false)
            .map((subject) => (
              <Subject key={subject.id} id={subject.id} name={subject.name} duration={subject.duration} backgroundColor={subject.backgroundColor} />
            ))}
        </div>

        <div className={styles.teacherName} >
          Teacher: Arabic Teacher
        </div>
        <TeacherTable
          kesmRows={kesmRows}
          setKesm={setKesm}
          emptyKesmCell={emptyKesmCell}
          isKesmCellAvailable={isKesmCellAvailable}
        />
        <div className={styles.aksem}>
        {aksem
        .filter((kesm, i) => kesm.isDropped === false)
        .map((kesm)=>(
          <Kesm
          key={kesm.id}
          id={kesm.id}
          name={kesm.name}
          />

        ))
        }
        </div>
      </DndProvider>
    </div>
  );
}
