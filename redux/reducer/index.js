import handleSubjects from "./handleSubjects";
import handleRows from "./handleRows";
import handleDraggedSubject from "./handleDraggedSubject";

import { combineReducers } from "redux";

const rootReducers = combineReducers({
  handleSubjects,
  handleRows,
  

  
});

export default rootReducers;
