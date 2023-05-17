import { useDrop } from "react-dnd";
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
  return (
    <div
      ref={drop}
      className={
        isOver ? (canDrop ? "cell-over-green" : "cell-over-red") : "cell"
      }
    >
      {kesmName}
      <span style={{ color: "red" }}>{kesmSubject}</span>
    </div>
  );
};

export default KesmCell;
