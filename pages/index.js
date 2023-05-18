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
import { dropKesm, unDropKesm, insertKesm } from "../redux/action";
// ** MUI Imports
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Badge from "@mui/material/Badge";

export const ItemTypes = {
  SUBJECT: "subject",
};

const ClassroomBadge = ({ classRoom, subjectName, handleOpenClassroom }) => {
  return (
    <Badge badgeContent={classRoom} color="success">
      <div
        style={{ marginRight: "20px" }}
        onClick={() => handleOpenClassroom(dropedSubject)}
      >
        {subjectName}
      </div>
    </Badge>
  );
};

export const Cell = ({
  id,
  subjectName,
  subjectId,
  setSubject,
  day,
  time,
  isCellAvailable,
  nextCell,
  emptyCell,
  handleOpenClassroom,
}) => {
  const [isCellFilled, setIsCellFilled] = React.useState(false);
  const [droppedSubjectDuration, setDroppedSubjectDuration] =
    React.useState(null);
  const [backgroundColor, setBackgroundColor] = React.useState("");
  const [dropedSubject, setDropedSubject] = React.useState(null);
  const [classRoom, setClassRoom] = React.useState(undefined);

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.SUBJECT,
    canDrop: (subjectItem) =>
      isCellAvailable(subjectItem.name, day, time, subjectItem.duration),
    drop: (subjectItem) => setSubject(id, subjectItem.id, day, time),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isNextCell = nextCell?.rowId === id && nextCell?.day === day;
  const subjects = useSelector((state) => state.handleSubjects);

  useEffect(() => {
    const subject = subjects.find((subject) => subject.id === subjectId);
    setClassRoom(subject?.classRoom);

    if (subjectId !== null) {
      const subjectString = subjectId.toString();
      const duration = subjects.find(
        (subject) => subject.id == subjectString
      )?.duration;
      const subject = subjects.find((subject) => subject.id == subjectString);
      setDropedSubject(subject);
      setBackgroundColor(subject?.backgroundColor);
      setIsCellFilled(true);
      setDroppedSubjectDuration(duration);
    } else {
      setIsCellFilled(false);
      setDroppedSubjectDuration(null);
      setBackgroundColor("");
      setDropedSubject(null);
    }
  }, [subjectId, subjects]);
  return (
    <div
      ref={drop}
      className={
        (isOver && !isCellFilled) || isNextCell
          ? canDrop
            ? "cell-over-green"
            : "cell-over-red"
          : isCellFilled && droppedSubjectDuration === 2
          ? "mergedCell"
          : "cell"
      }
      style={{
        backgroundColor:
          (isCellFilled && droppedSubjectDuration === 2) ||
          (isCellFilled && droppedSubjectDuration === 1)
            ? backgroundColor
            : "",
        fontWeight: "bolder",

        borderBottom: isCellFilled ? "3px solid black" : "",
        borderLeft: isCellFilled ? "2px solid black" : "",
        borderRadius: isCellFilled ? "15px" : "",
        cursor: isCellFilled ? "pointer" : "",
      }}
    >
      {subjectName && (
        <span className="removeSubjectBtn" onClick={() => emptyCell(id, day)}>
          {" "}
          X{" "}
        </span>
      )}
      {subjectName && (
        <div
          style={{ width: "-webkit-fill-available" }}
          onClick={() => handleOpenClassroom(dropedSubject)}
        >
          {classRoom ? (
            <Badge badgeContent={classRoom} color="success">
              <div
                style={{ marginRight: "20px" }}
                onClick={() => handleOpenClassroom(dropedSubject)}
              >
                {subjectName}
              </div>
            </Badge>
          ) : (
            <div
              style={{ marginRight: "20px" }}
              onClick={() => handleOpenClassroom(dropedSubject)}
            >
              {subjectName}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const [selectedSubjectDuration, setSelectedSubjectDuration] =
    React.useState(null);
  const subjects = useSelector((state) => state.handleSubjects);
  const rows = useSelector((state) => state.handleRows);
  const kesmRows = useSelector((state) => state.handleKesmRows);
  const aksem = useSelector((state) => state.handleAksem);

  const dispatch = useDispatch();

  const setKesm = (rowId, kesmId, day, time) => {
    dispatch(dropKesm(kesmId));
    const row = kesmRows.find((row) => row.id === rowId);
    const kesmName = aksem.find((kesm) => kesm.id === kesmId).name;
    const kesmSubject = aksem.find((kesm) => kesm.id === kesmId).subjectName;
    dispatch(insertKesm(row, day, kesmName, kesmSubject, kesmId));
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

    if (rows.find((row) => row.id === id)[day].subjectName !== "") {
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

    dispatch(insertSubject(row, day, subjectName, subjectId));
  };

  const emptyCell = (id, day) => {
    const row = rows.find((row) => row.id === id);

    // switch isDropped to false
    const subject = subjects.find(
      (subject) => subject.id === row[day].subjectId
    );

    if (subject === undefined) {
      return;
    }
    dispatch(unDropSubject(subject.id));

    dispatch(insertSubject(row, day, "", null));
  };

  const isCellAvailable = (subjectName, day, time, duration) => {
    // set duration
    setSelectedSubjectDuration(duration);

    const subject = subjects.find((subject) => subject.name === subjectName);

    const isAvailable = subject?.availability?.some(
      (availability) => availability.day === day && availability.time === time
    );
    //   if (duration === 2) {
    //     // check next cell availability
    //     // extract next hour
    //   const getNextTime = (time) => {
    //     const timeArray = time.split("-");
    //     const startTime = timeArray[0];
    //     const endTime = timeArray[1];
    //     let nextTime = `${parseInt(startTime) + 1}:00-${parseInt(
    //       endTime
    //     ) + 1}:00`;
    //     nextTime==="9:00-10:00"?nextTime="09:00-10:00":nextTime=nextTime;
    //     return nextTime;
    //   };

    //     const nextTime = getNextTime(time);
    //     console.log("time", time)
    //     console.log("compare", time==="08:00-09:00")
    //     console.log("type of time", typeof(time))
    //     console.log("nextTime", nextTime)
    //     console.log("day", day)
    //     const isAvailable2 = subject?.availability?.some(
    //       (availability) =>
    //         availability.day === day && availability.time === nextTime
    //     );
    //     console.log("isAvailable2", isAvailable2)
    //     console.log("isAvailable", isAvailable)
    //     return isAvailable && isAvailable2;
    //   }

    //   return isAvailable;
    // };

    return isAvailable;
  };

  return (
    <div className={styles.container}>
      <DndProvider backend={HTML5Backend}>
        <div className={styles.kesmName}>القسم: سنة أولى إبتدائي الشابي</div>
        <SubjectsTable
          rows={rows}
          setSubject={setSubject}
          emptyCell={emptyCell}
          isCellAvailable={isCellAvailable}
          selectedSubjectDuration={selectedSubjectDuration}
        />
        <Accordion classes={{ root: "myAccordion" }}>
          <AccordionSummary
            classes={{ root: "MuiAccordion" }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{fontFamily:"Vazirmatn",fontWeight:'700'}}>الحصص</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={styles.subjects}>
              {subjects
                .filter((subject, i) => subject.isDropped === false)
                .map((subject) => (
                  <Subject
                    key={subject.id}
                    id={subject.id}
                    name={subject.name}
                    duration={subject.duration}
                    backgroundColor={subject.backgroundColor}
                    classRoom={subject.classRoom}
                  />
                ))}
            </div>
          </AccordionDetails>
        </Accordion>

        <div className={styles.teacherName}>Teacher: Arabic Teacher</div>
        <TeacherTable
          kesmRows={kesmRows}
          setKesm={setKesm}
          emptyKesmCell={emptyKesmCell}
          isKesmCellAvailable={isKesmCellAvailable}
        />
        <div className={styles.aksem}>
          {aksem
            .filter((kesm, i) => kesm.isDropped === false)
            .map((kesm) => (
              <Kesm
                key={kesm.id}
                kesmId={kesm.id}
                kesmName={kesm.name}
                subjectName={kesm.subjectName}
              />
            ))}
        </div>
      </DndProvider>
    </div>
  );
}
