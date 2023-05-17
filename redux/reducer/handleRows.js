const rows = [
  {
    id: 1,
    time: "09:00-08:00",
    monday: {subjectName:"", subjectId:null},
    tuesday: {subjectName:"", subjectId:null},
    wednesday: {subjectName:"", subjectId:null},
    thursday: {subjectName:"", subjectId:null},
    friday: {subjectName:"", subjectId:null},
    saturday: {subjectName:"", subjectId:null},
  },
  {
    id: 2,
    time: "10:00-09:00",
    monday:{subjectName:"", subjectId:null},
    tuesday: {subjectName:"", subjectId:null},
    wednesday: {subjectName:"", subjectId:null},
    thursday: {subjectName:"", subjectId:null},
    friday: {subjectName:"", subjectId:null},
    saturday: {subjectName:"", subjectId:null},
  },
  {
    id: 3,
    time: "11:00-10:00",
    monday: {subjectName:"", subjectId:null},
    tuesday: {subjectName:"", subjectId:null},
    wednesday: {subjectName:"", subjectId:null},
    thursday: {subjectName:"", subjectId:null},
    friday: {subjectName:"", subjectId:null},
    saturday: {subjectName:"", subjectId:null},
  },
  {
    id: 4,
    time: "12:00-11:00",
    monday: {subjectName:"", subjectId:null},
    tuesday: {subjectName:"", subjectId:null},
    wednesday: {subjectName:"", subjectId:null},
    thursday: {subjectName:"", subjectId:null},
    friday: {subjectName:"", subjectId:null},
    saturday: {subjectName:"", subjectId:null},
  },
  {
    id: 5,
    time: "13:00-12:00",
    monday: {subjectName:"", subjectId:null},
    tuesday: {subjectName:"", subjectId:null},
    wednesday: {subjectName:"", subjectId:null},
    thursday: {subjectName:"", subjectId:null},
    friday: {subjectName:"", subjectId:null},
    saturday: {subjectName:"", subjectId:null},
  },
  {
    id: 6,
    time: "14:00-13:00",
    monday: {subjectName:"", subjectId:null},
    tuesday: {subjectName:"", subjectId:null},
    wednesday: {subjectName:"", subjectId:null},
    thursday: {subjectName:"", subjectId:null},
    friday: {subjectName:"", subjectId:null},
    saturday: {subjectName:"", subjectId:null},
  },
  {
    id: 7,
    time: "15:00-14:00",
    monday: {subjectName:"", subjectId:null},
    tuesday: {subjectName:"", subjectId:null},
    wednesday: {subjectName:"", subjectId:null},
    thursday: {subjectName:"", subjectId:null},
    friday: {subjectName:"", subjectId:null},
    saturday: {subjectName:"", subjectId:null},
  },
  {
    id: 8,
    time: "16:00-15:00",
    monday: {subjectName:"", subjectId:null},
    tuesday: {subjectName:"", subjectId:null},
    wednesday: {subjectName:"", subjectId:null},
    thursday: {subjectName:"", subjectId:null},
    friday: {subjectName:"", subjectId:null},
    saturday: {subjectName:"", subjectId:null},
  },
  {
    id: 9,
    time: "17:00-16:00",
    monday: {subjectName:"", subjectId:null},
    tuesday: {subjectName:"", subjectId:null},
    wednesday: {subjectName:"", subjectId:null},
    thursday: {subjectName:"", subjectId:null},
    friday: {subjectName:"", subjectId:null},
    saturday: {subjectName:"", subjectId:null},
  },
  {
    id: 10,
    time: "18:00-17:00",
    monday: {subjectName:"", subjectId:null},
    tuesday: {subjectName:"", subjectId:null},
    wednesday: {subjectName:"", subjectId:null},
    thursday: {subjectName:"", subjectId:null},
    friday: {subjectName:"", subjectId:null},
    saturday: {subjectName:"", subjectId:null},
  },
];
  
  const handleRows = (state = rows, action) => {
    switch (action.type) {
      case "INSERT_SUBJECT":
        
        const {row ,day, subjectName,subjectId} = action.payload;
        const newState = [...state];
        console.log("newState", newState)
        const index = newState.findIndex((item) => item.id === row.id);
        newState[index][day] = {subjectName, subjectId};
        
        return newState;
      
      default:
        return state;
    }
  };
  
  export default handleRows;
  