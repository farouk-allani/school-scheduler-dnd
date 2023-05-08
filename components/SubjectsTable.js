import React from 'react'
import styles from "../styles/Home.module.css";
import { Cell } from '../pages/index';
const SubjectsTable = ({ rows, setSubject,emptyCell,isCellAvailable }) => {
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
  )
}

export default SubjectsTable