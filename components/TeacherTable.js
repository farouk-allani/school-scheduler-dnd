import React from 'react'
import styles from "../styles/Home.module.css";
import KesmCell from './KesmCell';
const TeacherTable = ({ kesmRows, setKesm,emptyKesmCell,isKesmCellAvailable }) => {
  return (
    <div className={styles.table}>
          <table>
            <tbody>
              <tr>
                <th>التوقيت/الأيام</th>
                {kesmRows.map((row) => (
                  <td key={row.id}>{row.time}</td>
                ))}
              </tr>
              <tr>
                <th>الاثنين</th>
                {kesmRows.map((row) => (
                  <td key={row.id} onClick={() => emptyKesmCell(row.id, "monday")}>
                    <KesmCell
                      id={row.id}
                      day="monday"
                      time={row.time}
                      class={row.monday}
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
                      id={row.id}
                      day="tuesday"
                      time={row.time}
                      class={row.tuesday}
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
                      id={row.id}
                      day="wednesday"
                      time={row.time}
                      class={row.wednesday}
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
                      id={row.id}
                      day="thursday"
                      time={row.time}
                      class={row.thursday}
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
                      id={row.id}
                      day="friday"
                      time={row.time}
                      class={row.friday}
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
                      id={row.id}
                      day="saturday"
                      time={row.time}
                      class={row.saturday}
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