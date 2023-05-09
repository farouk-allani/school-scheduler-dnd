
import {  useDrop } from "react-dnd";
const kesmTypes = {
  KESM: "kesm",
};


 const KesmCell = ({ id, kesm, setKesm, day, time , isKesmCellAvailable}) => {
    const [{ isOver,canDrop }, drop] = useDrop(() => ({
      accept: kesmTypes.KESM,
      canDrop : (item) => isKesmCellAvailable(item.name,day, time),
      drop: (item) => setKesm(id, item.id, day, time),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        
        
      }),
      
    }))
    return (
        <div ref={drop} className={isOver ? (canDrop ? "cell-over-green" : "cell-over-red") : "cell"}>
          {kesm}
        </div>
      );
}

export default KesmCell