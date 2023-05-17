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
  const [nextCell, setNextCell] = useState(null);
  
  const subjectsRows = useSelector((state) => state.handleRows);

  const handleDragOver = (event, rowId, day) => {
    console.log("handleDragOver", rowId, day)
    event.preventDefault();
    // check if the cell is filled
    const isCellFilled = subjectsRows.find(
      (row) => row.id === rowId && row[day].subjectName !== ""
    );
    console.log("subjectsRow", subjectsRows)
    console.log("isCellFilled", isCellFilled)
    if (isCellFilled){
      setHoveredCell(null);
      setNextCell(null)
      return;
    }

    setHoveredCell({ rowId, day });
    if(selectedSubjectDuration===2){
      setNextCell({rowId:rowId+1, day})
    }

  };

  const handleDragLeave = () => {
    setHoveredCell(null);
    setNextCell(null)
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
                onDrop={(event) => {
                  event.preventDefault();
                  setNextCell(null)

                }
              }
      // colSpan={
      //   //check if cell is filled then the colspan will be the duration of the subject
      //   subjects.find((subject) => subject.id === row.monday)?.duration ||  
        
        
      //   //check if cell is hovered the colspan will be the duration of the selected subject
      //   hoveredCell?.rowId === row.id && hoveredCell?.day === "monday"
      //     ? selectedSubjectDuration
      //     : 1
      // }
              >
                <Cell
                  id={row.id}
                  day="monday"
                  time={row.time}
                  subjectName={row.monday.subjectName}
                  subjectId={row.monday.subjectId}
                  setSubject={setSubject}
                  isCellAvailable={isCellAvailable}
            
                  nextCell={nextCell}

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
                // colSpan={
                //   hoveredCell?.rowId === row.id && hoveredCell?.day === "tuesday"
                //     ? selectedSubjectDuration
                //     : 1
                // }
              >
                <Cell
                  id={row.id}
                  day="tuesday"
                  time={row.time}
                  subjectName={row.tuesday.subjectName}
                  subjectId={row.tuesday.subjectId}
                  setSubject={setSubject}
                  isCellAvailable={isCellAvailable}
                 
                  nextCell={nextCell}
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
                // colSpan={
                //   hoveredCell?.rowId === row.id && hoveredCell?.day === "wednesday"
                //     ? selectedSubjectDuration
                //     : 1
                // }
              >
                <Cell
                  id={row.id}
                  day="wednesday"
                  time={row.time}
                  subjectName={row.wednesday.subjectName}
                  subjectId={row.wednesday.subjectId}
                  setSubject={setSubject}
                  isCellAvailable={isCellAvailable}
                
                  nextCell={nextCell}
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
                // colSpan={
                //   hoveredCell?.rowId === row.id && hoveredCell?.day === "thursday"
                //     ? selectedSubjectDuration
                //     : 1
                // }
              >
                <Cell
                  id={row.id}
                  day="thursday"
                  time={row.time}
                  subjectName={row.thursday.subjectName}
                  subjectId={row.thursday.subjectId}
                  setSubject={setSubject}
                  isCellAvailable={isCellAvailable}
                
                  nextCell={nextCell}
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
                // colSpan={
                //   hoveredCell?.rowId === row.id && hoveredCell?.day === "friday"
                //     ? selectedSubjectDuration
                //     : 1
                // }
              >
                <Cell
                  id={row.id}
                  day="friday"
                  time={row.time}
                  subjectName={row.friday.subjectName}
                  subjectId={row.friday.subjectId}
                  setSubject={setSubject}
                  isCellAvailable={isCellAvailable}
                
                  nextCell={nextCell}
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
                // colSpan={
                //   hoveredCell?.rowId === row.id && hoveredCell?.day === "saturday"
                //     ? selectedSubjectDuration
                //     : 1
                // }
              >
                <Cell
                  id={row.id}
                  day="saturday"
                  time={row.time}
                  subjectName={row.saturday.subjectName}
                  subjectId={row.saturday.subjectId}
                  setSubject={setSubject}
                  isCellAvailable={isCellAvailable}
              
                  nextCell={nextCell}
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
