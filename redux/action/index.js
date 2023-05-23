
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

export const insertSubject = (row,day, subjectName,subjectId,kesm) => {
  return {
    type: "INSERT_SUBJECT",
    payload: {row,day, subjectName,subjectId,kesm},
  };
}

export const  dropKesm=(kesmId)=>{
    return{
        type:"DROP_KESM",
        payload:kesmId,
        
    }
}

export const  unDropKesm=(kesmId)=>{
    return{
        type:"UNDROP_KESM",
        payload:kesmId,
        
    }
} 

export const insertKesm=(row,day,kesmName,kesmSubject,kesmId)=>{
    return{
        type:"INSERT_KESM",
        payload:{row,day,kesmName,kesmSubject,kesmId},
        
    }
}

export const addClassroom=(dropedSubject,classRoom)=>{
    return{
        type:"ADD_CLASSROOM",
        payload:{dropedSubject,classRoom},
    }
}

export const removeClassroom=(dropedSubject)=>{
    return{
        type:"REMOVE_CLASSROOM",
        payload:{dropedSubject},
    }
}




