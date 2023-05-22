import React from 'react'
import styles from "../styles/Home.module.css";
import KesmCell from './KesmCell';
const TeacherTable = ({ kesmRows, setKesm,emptyKesmCell,isKesmCellAvailable, teacher }) => {
  return (
    <div className={styles.table}>
          <table>
            <tbody>
              <tr>
                <th></th>
                {kesmRows.map((row) => (
                  <td key={row.id}>{row.time}</td>
                ))}
              </tr>
              <tr>
                <th>الاثنين</th>
                {kesmRows.map((row) => (
                  <td key={row.id} onClick={() => emptyKesmCell(row.id, "monday")}>
                    <KesmCell
                      rowId={row.id}
                      day="monday"
                      time={row.time}
                      kesmName={row.monday.kesm}
                      kesmSubject={row.monday.subjectName}
                      setKesm={setKesm}
                      isKesmCellAvailable={isKesmCellAvailable}
                      
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <th>الثلاثاء</th>
                {kesmRows.map((row) => (
                  <td key={row.id} onClick={() => emptyKesmCell(row.id, "tuesday")}>
                    <KesmCell
                      rowId={row.id}
                      day="tuesday"
                      time={row.time}
                      kesmName={row.tuesday.kesm}
                      kesmSubject={row.tuesday.subjectName}
                      setKesm={setKesm}
                      isKesmCellAvailable={isKesmCellAvailable}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <th>الأربعاء</th>
                {kesmRows.map((row) => (
                  <td
                    key={row.id}
                    onClick={() => emptyKesmCell(row.id, "wednesday")}
                  >
                    <KesmCell
                      rowId={row.id}
                      day="wednesday"
                      time={row.time}
                      kesmName={row.wednesday.kesm}
                      kesmSubject={row.wednesday.subjectName}
                      setKesm={setKesm}
                      isKesmCellAvailable={isKesmCellAvailable}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <th>الخميس</th>
                {kesmRows.map((row) => (
                  <td
                    key={row.id}
                    onClick={() => emptyKesmCell(row.id, "thursday")}
                  >
                    <KesmCell
                     rowId={row.id}
                      day="thursday"
                      time={row.time}
                      kesmName={row.thursday.kesm}
                      kesmSubject={row.thursday.subjectName}
                      setKesm={setKesm}
                      isKesmCellAvailable={isKesmCellAvailable}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <th>الجمعة</th>
                {kesmRows.map((row) => (
                  <td key={row.id} onClick={() => emptyKesmCell(row.id, "friday")}>
                    <KesmCell
                      rowId={row.id}
                      day="friday"
                      time={row.time}
                      kesmName={row.friday.kesm}
                      kesmSubject={row.friday.subjectName}
                      setKesm={setKesm}
                      isKesmCellAvailable={isKesmCellAvailable}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <th>السبت</th>
                {kesmRows.map((row) => (
                  <td
                    key={row.id}
                    onClick={() => emptyKesmCell(row.id, "saturday")}
                  >
                    <KesmCell
                      rowId={row.id}
                      day="saturday"
                      time={row.time}
                      kesmName={row.saturday.kesm}
                      kesmSubject={row.saturday.subjectName}
                      setKesm={setKesm}
                      isKesmCellAvailable={isKesmCellAvailable}
                    />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
  )
}

export default TeacherTable