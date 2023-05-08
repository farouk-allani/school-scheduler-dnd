import styles from "../styles/Home.module.css";
import { useDrag, useDrop } from "react-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import React from "react";
import Subject from "../components/Subject";
import { useSelector, useDispatch } from "react-redux";
import { dropSubject, unDropSubject } from "../redux/action";
import { insertSubject } from "../redux/action";


export const ItemTypes = {
  SUBJECT: "subject",
};

const Cell = ({ id, subject, setSubject, day, time , isCellAvailable}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.SUBJECT,
    drop: (item) => setSubject(id, item.id, day, time),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      isCellAvailable: isCellAvailable(day, time),
      
    }),
    
  }));

  return (
    <div ref={drop} className={isOver ? (isCellAvailable ? "cell-over-green" : "cell-over-red") : "cell"}>
      {subject}
    </div>
  );
};

export default function Home() {
  const subjects = useSelector((state) => state.handleSubjects);
  const rows = useSelector((state) => state.handleRows);
  // const draggedSubject = useSelector((state) => state.handleDraggedSubject);
  const [draggedSubject, setDraggedSubject] = React.useState("");
  const dispatch = useDispatch();

  const setSubject = (id, subjectId, day, time) => {
    console.log(id, subjectId);
    console.log("dropped");
    console.log("day", day);
    console.log("time", time);
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
    const isDay = selectedSubject.availability.day === day;
    const isTime = selectedSubject.availability.time === time;
    console.log("isDay", isDay);
    console.log("isTime", isTime);
    console.log(
      "selectedSubject.availability.day",
      selectedSubject.availability[0].day
    );
    console.log(
      "selectedSubject.availability.time",
      selectedSubject.availability[0].time
    );
    console.log("isAvailable", isAvailable);

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
  
  

  const isCellAvailable = (day,time ) => {
    // Your logic to check if the cell is available
    // Return true if it is available, false otherwise
 
    const subject = subjects.find((subject) => subject.name === draggedSubject);
    console.log('subject for color check', subject)
    console.log('draggedSubject for color check', draggedSubject)
    const isAvailable = subject?.availability?.some(
      (availability) => availability.day === day && availability.time === time
    );
    console.log('isAvailable for color', isAvailable)
    return isAvailable;
  
    

  };

  return (
    <div className={styles.container}>
      <DndProvider backend={HTML5Backend}>
        {subjects
          .filter((subject, i) => subject.isDropped === false)
          .map((subject) => (
            <Subject key={subject.id} id={subject.id} name={subject.name} setDraggedSubject={setDraggedSubject} />
          ))}

        <div className={styles.table}>
          <table>
            <tbody>
              <tr>
                <th>التوقيت/الأيام</th>
                {rows.map((row) => (
                  <td key={row.id}>{row.time}</td>
                ))}
              </tr>
              <tr>
                <th>الاثنين</th>
                {rows.map((row) => (
                  <td key={row.id} onClick={() => emptyCell(row.id, "monday")}>
                    <Cell
                      id={row.id}
                      day="monday"
                      time={row.time}
                      subject={row.monday}
                      setSubject={setSubject}
                      isCellAvailable={isCellAvailable}
                      
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <th>الثلاثاء</th>
                {rows.map((row) => (
                  <td key={row.id} onClick={() => emptyCell(row.id, "tuesday")}>
                    <Cell
                      id={row.id}
                      day="tuesday"
                      time={row.time}
                      subject={row.tuesday}
                      setSubject={setSubject}
                      isCellAvailable={isCellAvailable}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <th>الأربعاء</th>
                {rows.map((row) => (
                  <td
                    key={row.id}
                    onClick={() => emptyCell(row.id, "wednesday")}
                  >
                    <Cell
                      id={row.id}
                      day="wednesday"
                      time={row.time}
                      subject={row.wednesday}
                      setSubject={setSubject}
                      isCellAvailable={isCellAvailable}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <th>الخميس</th>
                {rows.map((row) => (
                  <td
                    key={row.id}
                    onClick={() => emptyCell(row.id, "thursday")}
                  >
                    <Cell
                      id={row.id}
                      day="thursday"
                      time={row.time}
                      subject={row.thursday}
                      setSubject={setSubject}
                      isCellAvailable={isCellAvailable}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <th>الجمعة</th>
                {rows.map((row) => (
                  <td key={row.id} onClick={() => emptyCell(row.id, "friday")}>
                    <Cell
                      id={row.id}
                      day="friday"
                      time={row.time}
                      subject={row.friday}
                      setSubject={setSubject}
                      isCellAvailable={isCellAvailable}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <th>السبت</th>
                {rows.map((row) => (
                  <td
                    key={row.id}
                    onClick={() => emptyCell(row.id, "saturday")}
                  >
                    <Cell
                      id={row.id}
                      day="saturday"
                      time={row.time}
                      subject={row.saturday}
                      setSubject={setSubject}
                      isCellAvailable={isCellAvailable}
                    />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </DndProvider>
    </div>
  );
}
