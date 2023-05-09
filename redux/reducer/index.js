import handleSubjects from "./handleSubjects";
import handleRows from "./handleRows";
import handleAksem from "./handleAksem";
import handleKesmRows from "./handleKesmRows";

import { combineReducers } from "redux";

const rootReducers = combineReducers({
  handleSubjects,
  handleRows,
  handleAksem,
  handleKesmRows,
  

  
});

export default rootReducers;
