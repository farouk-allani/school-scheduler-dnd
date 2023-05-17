const rows = [
    {
      id: 1,
      time: "08:00-09:00",
      monday: {kesmName:"",kesmSubject:"",kesmId:""},
      tuesday: {kesmName:"",kesmSubject:"",kesmId:""},
      wednesday: {kesmName:"",kesmSubject:"",kesmId:""},
      thursday: {kesmName:"",kesmSubject:"",kesmId:""},
      friday: {kesmName:"",kesmSubject:"",kesmId:""},
      saturday: {kesmName:"",kesmSubject:"",kesmId:""},
    },
    {
      id: 2,
      time: "09:00-10:00",
      monday: {kesmName:"",kesmSubject:"",kesmId:""},
      tuesday: {kesmName:"",kesmSubject:"",kesmId:""},
      wednesday: {kesmName:"",kesmSubject:"",kesmId:""},
      thursday: {kesmName:"",kesmSubject:"",kesmId:""},
      friday: {kesmName:"",kesmSubject:"",kesmId:""},
      saturday: {kesmName:"",kesmSubject:"",kesmId:""},
    },
    {
      id: 3,
      time: "10:00-11:00",
      monday: {kesmName:"",kesmSubject:"",kesmId:""},
      tuesday: {kesmName:"",kesmSubject:"",kesmId:""},
      wednesday: {kesmName:"",kesmSubject:"",kesmId:""},
      thursday: {kesmName:"",kesmSubject:"",kesmId:""},
      friday: {kesmName:"",kesmSubject:"",kesmId:""},
      saturday: {kesmName:"",kesmSubject:"",kesmId:""},
    },
    {
      id: 4,
      time: "11:00-12:00",
      monday: {kesmName:"",kesmSubject:"",kesmId:""},
      tuesday: {kesmName:"",kesmSubject:"",kesmId:""},
      wednesday: {kesmName:"",kesmSubject:"",kesmId:""},
      thursday: {kesmName:"",kesmSubject:"",kesmId:""},
      friday: {kesmName:"",kesmSubject:"",kesmId:""},
      saturday: {kesmName:"",kesmSubject:"",kesmId:""},
    },
    {
      id: 5,
      time: "12:00-13:00",
      monday: {kesmName:"",kesmSubject:"",kesmId:""},
      tuesday: {kesmName:"",kesmSubject:"",kesmId:""},
      wednesday: {kesmName:"",kesmSubject:"",kesmId:""},
      thursday: {kesmName:"",kesmSubject:"",kesmId:""},
      friday: {kesmName:"",kesmSubject:"",kesmId:""},
      saturday: {kesmName:"",kesmSubject:"",kesmId:""},
    },
    {
      id: 6,
      time: "13:00-14:00",
      monday: {kesmName:"",kesmSubject:"",kesmId:""},
      tuesday: {kesmName:"",kesmSubject:"",kesmId:""},
      wednesday: {kesmName:"",kesmSubject:"",kesmId:""},
      thursday: {kesmName:"",kesmSubject:"",kesmId:""},
      friday: {kesmName:"",kesmSubject:"",kesmId:""},
      saturday: {kesmName:"",kesmSubject:"",kesmId:""},
    },
    {
      id: 7,
      time: "14:00-15:00",
      monday: {kesmName:"",kesmSubject:"",kesmId:""},
      tuesday: {kesmName:"",kesmSubject:"",kesmId:""},
      wednesday: {kesmName:"",kesmSubject:"",kesmId:""},
      thursday: {kesmName:"",kesmSubject:"",kesmId:""},
      friday: {kesmName:"",kesmSubject:"",kesmId:""},
      saturday: {kesmName:"",kesmSubject:"",kesmId:""},
    },
    {
      id: 8,
      time: "15:00-16:00",
      monday: {kesmName:"",kesmSubject:"",kesmId:""},
      tuesday: {kesmName:"",kesmSubject:"",kesmId:""},
      wednesday: {kesmName:"",kesmSubject:"",kesmId:""},
      thursday: {kesmName:"",kesmSubject:"",kesmId:""},
      friday: {kesmName:"",kesmSubject:"",kesmId:""},
      saturday: {kesmName:"",kesmSubject:"",kesmId:""},
    },
    {
      id: 9,
      time: "16:00-17:00",
      monday: {kesmName:"",kesmSubject:"",kesmId:""},
      tuesday: {kesmName:"",kesmSubject:"",kesmId:""},
      wednesday: {kesmName:"",kesmSubject:"",kesmId:""},
      thursday: {kesmName:"",kesmSubject:"",kesmId:""},
      friday: {kesmName:"",kesmSubject:"",kesmId:""},
      saturday: {kesmName:"",kesmSubject:"",kesmId:""},
    },
    {
      id: 10,
      time: "17:00-18:00",
      monday: {kesmName:"",kesmSubject:"",kesmId:""},
      tuesday: {kesmName:"",kesmSubject:"",kesmId:""},
      wednesday: {kesmName:"",kesmSubject:"",kesmId:""},
      thursday: {kesmName:"",kesmSubject:"",kesmId:""},
      friday: {kesmName:"",kesmSubject:"",kesmId:""},
      saturday: {kesmName:"",kesmSubject:"",kesmId:""},
    },
  ]

const handleKesmRows = (state = rows, action) => {
    switch (action.type) {
        case "INSERT_KESM":
            const {row,day,kesmName,kesmSubject,kesmId} = action.payload;
            const newState= [...state];
            const index= newState.findIndex((item)=>item.id===row.id);
            newState[index][day]={kesmName,kesmSubject, kesmId};
            return newState;


        default:
        return state;
    }
    }

export default handleKesmRows;