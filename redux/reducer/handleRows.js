const rows = [
    {
      id: 1,
      time: "08:00-09:00",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
    },
    {
      id: 2,
      time: "09:00-10:00",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
    },
    {
      id: 3,
      time: "10:00-11:00",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
    },
    {
      id: 4,
      time: "11:00-12:00",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
    },
    {
      id: 5,
      time: "12:00-13:00",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
    },
    {
      id: 6,
      time: "13:00-14:00",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
    },
    {
      id: 7,
      time: "14:00-15:00",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
    },
    {
      id: 8,
      time: "15:00-16:00",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
    },
    {
      id: 9,
      time: "16:00-17:00",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
    },
    {
      id: 10,
      time: "17:00-18:00",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
    },
  ]
  
  const handleRows = (state = rows, action) => {
    switch (action.type) {
      case "INSERT_SUBJECT":
        
        const {row,day, subjectName} = action.payload;
        const newState = [...state];
        const index = newState.findIndex((item) => item === row);
        console.log('index',index);
        newState[index][day] = subjectName;
        return newState;


        
  
      default:
        return state;
    }
  };
  
  export default handleRows;
  