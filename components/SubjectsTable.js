import React,{useState} from "react";
import styles from "../styles/Home.module.css";
import { Cell } from "../pages/index";
import { useSelector } from "react-redux";


const SubjectsTable = ({
  rows,
  setSubject,
  emptyCell,
  isCellAvailable,
  selectedSubjectDuration,
}) => {

  const [hoveredCell, setHoveredCell] = useState(null);
  const subjects = useSelector((state) => state.handleSubjects);

  const handleDragOver = (event, rowId, day) => {
    event.preventDefault();
    setHoveredCell({ rowId, day });
  };

  const handleDragLeave = () => {
    setHoveredCell(null);
  };


  return (
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
              <td
                
                key={row.id}
                onClick={() => emptyCell(row.id, "monday")}
                onDragOver={(event) => handleDragOver(event, row.id, "monday")}
                onDragLeave={handleDragLeave}
      colSpan={
        //check if cell is filled then the colspan will be the duration of the subject
        subjects.find((subject) => subject.id === row.monday)?.duration ||  
        
        
        //check if cell is hovered the colspan will be the duration of the selected subject
        hoveredCell?.rowId === row.id && hoveredCell?.day === "monday"
          ? selectedSubjectDuration
          : 1
      }
              >
                <Cell
                  id={row.id}
                  day="monday"
                  time={row.time}
                  subject={row.monday}
                  setSubject={setSubject}
                  isCellAvailable={isCellAvailable}
                  selectedSubjectDuration={selectedSubjectDuration}
                />
              </td>
            ))}
          </tr>
          <tr>
            <th>الثلاثاء</th>
            {rows.map((row) => (
              <td
                key={row.id}
                onClick={() => emptyCell(row.id, "tuesday")}
                onDragOver={(event) => handleDragOver(event, row.id, "tuesday")}
                onDragLeave={handleDragLeave}
                colSpan={
                  hoveredCell?.rowId === row.id && hoveredCell?.day === "tuesday"
                    ? selectedSubjectDuration
                    : 1
                }
              >
                <Cell
                  id={row.id}
                  day="tuesday"
                  time={row.time}
                  subject={row.tuesday}
                  setSubject={setSubject}
                  isCellAvailable={isCellAvailable}
                  selectedSubjectDuration={selectedSubjectDuration}
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
                onDragOver={(event) => handleDragOver(event, row.id, "wednesday")}
                onDragLeave={handleDragLeave}
                colSpan={
                  hoveredCell?.rowId === row.id && hoveredCell?.day === "wednesday"
                    ? selectedSubjectDuration
                    : 1
                }
              >
                <Cell
                  id={row.id}
                  day="wednesday"
                  time={row.time}
                  subject={row.wednesday}
                  setSubject={setSubject}
                  isCellAvailable={isCellAvailable}
                  selectedSubjectDuration={selectedSubjectDuration}
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
                onDragOver={(event) => handleDragOver(event, row.id, "thursday")}
                onDragLeave={handleDragLeave}
                colSpan={
                  hoveredCell?.rowId === row.id && hoveredCell?.day === "thursday"
                    ? selectedSubjectDuration
                    : 1
                }
              >
                <Cell
                  id={row.id}
                  day="thursday"
                  time={row.time}
                  subject={row.thursday}
                  setSubject={setSubject}
                  isCellAvailable={isCellAvailable}
                  selectedSubjectDuration={selectedSubjectDuration}
                />
              </td>
            ))}
          </tr>
          <tr>
            <th>الجمعة</th>
            {rows.map((row) => (
              <td
                key={row.id}
                onClick={() => emptyCell(row.id, "friday")}
                onDragOver={(event) => handleDragOver(event, row.id, "friday")}
                onDragLeave={handleDragLeave}
                colSpan={
                  hoveredCell?.rowId === row.id && hoveredCell?.day === "friday"
                    ? selectedSubjectDuration
                    : 1
                }
              >
                <Cell
                  id={row.id}
                  day="friday"
                  time={row.time}
                  subject={row.friday}
                  setSubject={setSubject}
                  isCellAvailable={isCellAvailable}
                  selectedSubjectDuration={selectedSubjectDuration}
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
                onDragOver={(event) => handleDragOver(event, row.id, "saturday")}
                onDragLeave={handleDragLeave}
                colSpan={
                  hoveredCell?.rowId === row.id && hoveredCell?.day === "saturday"
                    ? selectedSubjectDuration
                    : 1
                }
              >
                <Cell
                  id={row.id}
                  day="saturday"
                  time={row.time}
                  subject={row.saturday}
                  setSubject={setSubject}
                  isCellAvailable={isCellAvailable}
                  selectedSubjectDuration={selectedSubjectDuration}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SubjectsTable;
