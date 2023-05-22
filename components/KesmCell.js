import { useDrop,useDrag } from "react-dnd";
const kesmTypes = {
  KESM: "kesm",
};

const KesmCell = ({
  rowId,
  kesmName,
  kesmSubject,
  setKesm,
  day,
  time,
  isKesmCellAvailable,
}) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: kesmTypes.KESM,
    canDrop: (item) => isKesmCellAvailable(item.kesmName, day, time),
    drop: (item) => setKesm(rowId, item.kesmId, day, time),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const [{ isDragging }, drag] = useDrag(() => ({
    type: kesmTypes.KESM,
    item: { kesmId: rowId, kesmName: kesmName },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));




  return (
    <div ref={drag} style={{opacity: isDragging ? 0.5 : 1,}}  >
    <div
      ref={drop}
      className={
        isOver ? (canDrop ? "cell-over-green" : "cell-over-red") : "cell"
      }
      style={{
        backgroundColor: kesmName? "#146C94":"",
        fontSize: kesmName? "9px":"",
        display: kesmName?"flex":"",
        flexDirection:kesmName? "column":"",
        borderBottom:kesmName?"3px solid black":"",
        borderLeft:kesmName?"2px solid black":"",
        borderRadius:kesmName?"15px":"",
      }}
    > 
      {kesmName}
      <span style={{ color: "red" }}>{kesmSubject}</span>
    </div>
    </div>
  );
};

export default KesmCell;
