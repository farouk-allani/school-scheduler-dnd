
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

export const insertSubject = (row,day, subjectName) => {
  return {
    type: "INSERT_SUBJECT",
    payload: {row,day, subjectName}
  };
}


