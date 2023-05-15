
export const dropSubject = (subjectId) => {
  return {
    type: "DROP_SUBJECT",
    payload:subjectId ,
  };
};

export const unDropSubject = (subjectId) => {
  return {
    type: "UNDROP_SUBJECT",
    payload:subjectId ,
  };
};

export const insertSubject = (row,day, subjectName,subjectId) => {
  return {
    type: "INSERT_SUBJECT",
    payload: {row,day, subjectName,subjectId},
  };
}

export const  dropKesm=(kesmId,dayAndTime)=>{
    return{
        type:"DROP_KESM",
        payload:{kesmId,dayAndTime},
        
    }
}

export const  unDropKesm=(kesmId)=>{
    return{
        type:"UNDROP_KESM",
        payload:kesmId,
        
    }
} 



