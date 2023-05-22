const rows = [
  {
    id: 1,
    time: "09:00-08:00",
    monday: {subjectName:"", subjectId:null,kesm:""},
    tuesday: {subjectName:"", subjectId:null,kesm:""},
    wednesday: {subjectName:"", subjectId:null,kesm:""},
    thursday: {subjectName:"", subjectId:null,kesm:""},
    friday:{subjectName:"", subjectId:null,kesm:""},
    saturday:{subjectName:"", subjectId:null,kesm:""},
  },
  {
    id: 2,
    time: "10:00-09:00",
    monday: {subjectName:"", subjectId:null,kesm:""},
    tuesday: {subjectName:"", subjectId:null,kesm:""},
    wednesday: {subjectName:"", subjectId:null,kesm:""},
    thursday: {subjectName:"", subjectId:null,kesm:""},
    friday:{subjectName:"", subjectId:null,kesm:""},
    saturday:{subjectName:"", subjectId:null,kesm:""},
  },
  {
    id: 3,
    time: "11:00-10:00",
    monday: {subjectName:"", subjectId:null,kesm:""},
    tuesday: {subjectName:"", subjectId:null,kesm:""},
    wednesday: {subjectName:"", subjectId:null,kesm:""},
    thursday: {subjectName:"", subjectId:null,kesm:""},
    friday:{subjectName:"", subjectId:null,kesm:""},
    saturday:{subjectName:"", subjectId:null,kesm:""},
  },
  {
    id: 4,
    time: "12:00-11:00",
    monday: {subjectName:"", subjectId:null,kesm:""},
    tuesday: {subjectName:"", subjectId:null,kesm:""},
    wednesday: {subjectName:"", subjectId:null,kesm:""},
    thursday: {subjectName:"", subjectId:null,kesm:""},
    friday:{subjectName:"", subjectId:null,kesm:""},
    saturday:{subjectName:"", subjectId:null,kesm:""},
  },
  {
    id: 5,
    time: "13:00-12:00",
    monday: {subjectName:"", subjectId:null,kesm:""},
    tuesday: {subjectName:"", subjectId:null,kesm:""},
    wednesday: {subjectName:"", subjectId:null,kesm:""},
    thursday: {subjectName:"", subjectId:null,kesm:""},
    friday:{subjectName:"", subjectId:null,kesm:""},
    saturday:{subjectName:"", subjectId:null,kesm:""},
  },
  {
    id: 6,
    time: "14:00-13:00",
    monday: {subjectName:"", subjectId:null,kesm:""},
    tuesday: {subjectName:"", subjectId:null,kesm:""},
    wednesday: {subjectName:"", subjectId:null,kesm:""},
    thursday: {subjectName:"", subjectId:null,kesm:""},
    friday:{subjectName:"", subjectId:null,kesm:""},
    saturday:{subjectName:"", subjectId:null,kesm:""},
  },
  {
    id: 7,
    time: "15:00-14:00",
    monday: {subjectName:"", subjectId:null,kesm:""},
    tuesday: {subjectName:"", subjectId:null,kesm:""},
    wednesday: {subjectName:"", subjectId:null,kesm:""},
    thursday: {subjectName:"", subjectId:null,kesm:""},
    friday:{subjectName:"", subjectId:null,kesm:""},
    saturday:{subjectName:"", subjectId:null,kesm:""},
  },
  {
    id: 8,
    time: "16:00-15:00",
    monday: {subjectName:"", subjectId:null,kesm:""},
    tuesday: {subjectName:"", subjectId:null,kesm:""},
    wednesday: {subjectName:"", subjectId:null,kesm:""},
    thursday: {subjectName:"", subjectId:null,kesm:""},
    friday:{subjectName:"", subjectId:null,kesm:""},
    saturday:{subjectName:"", subjectId:null,kesm:""},
  },
  {
    id: 9,
    time: "17:00-16:00",
    monday: {subjectName:"", subjectId:null,kesm:""},
    tuesday: {subjectName:"", subjectId:null,kesm:""},
    wednesday: {subjectName:"", subjectId:null,kesm:""},
    thursday: {subjectName:"", subjectId:null,kesm:""},
    friday:{subjectName:"", subjectId:null,kesm:""},
    saturday:{subjectName:"", subjectId:null,kesm:""},
  },
  {
    id: 10,
    time: "18:00-17:00",
    monday: {subjectName:"", subjectId:null,kesm:""},
    tuesday: {subjectName:"", subjectId:null,kesm:""},
    wednesday: {subjectName:"", subjectId:null,kesm:""},
    thursday: {subjectName:"", subjectId:null,kesm:""},
    friday:{subjectName:"", subjectId:null,kesm:""},
    saturday:{subjectName:"", subjectId:null,kesm:""},
  },
];
  
  const handleRows = (state = rows, action) => {
    switch (action.type) {
      case "INSERT_SUBJECT":
        
        const {row ,day, subjectName,subjectId,kesm} = action.payload;
        const newState = [...state];
        console.log("newState", newState)
        const index = newState.findIndex((item) => item.id === row.id);
        newState[index][day] = {subjectName, subjectId,kesm};
        
        return newState;
      
      default:
        return state;
    }
  };
  
  export default handleRows;
  