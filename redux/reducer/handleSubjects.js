const subjects = [
  {
    id: "mathematics",
    name: "Mathematics",
    teacher: {
      id: 1,
      name: "Ms. Smith",
    },
    availability: [
      { day: "monday", time: "09:00-10:00" },
      { day: "wednesday", time: "13:00-14:00" },
      { day: "friday", time: "13:00-14:00"},
      { day: "saturday", time: "13:00-14:00"},
      { day: "saturday", time: "08:00-09:00"}
    ],
    isDropped: false,
    
  },
  {
    id: "english",
    name: "English",
    teacher: {
      id: 2,
      name: "Mr. Doe",
    },
    availability: [
      { day: "tuesday", time: "09:00-10:00" },
      { day: "thursday", time: "13:00-14:00" },
      { day: "friday", time: "13:00-14:00"},
      { day: "saturday", time: "13:00-14:00"},
      { day: "saturday", time: "08:00-09:00"},
      { day: 'monday', time: '11:00-12:00'}
    ],
    isDropped: false,
    
  },
  {
    id: "arabic",
    name: "Arabic",
    teacher: {
      id: 3,
      name: "Ms. Smith",
    },
    availability: [
      { day: "monday", time: "09:00-10:00" },
      { day: "wednesday", time: "13:00-14:00" },
    ],
    isDropped: false,
    
  },
  {
    id: "science",
    name: "Science",
    teacher: {
      id: 4,
      name: "Mr. Doe",
    },
    availability: [
      { day: "tuesday", time: "09:00-10:00" },
      { day: "thursday", time: "13:00-14:00" },
    ],
    isDropped: false,
    
  },
  {
    id: "history",
    name: "History",
    teacher: {
      id: 5,
      name: "Ms. Smith",
    },
    availability: [
      { day: "monday", time: "09:00-10:00" },
      { day: "wednesday", time: "13:00-14:00" },
    ],
    isDropped: false,
    
  },
  {
    id: "geography",
    name: "Geography",
    teacher: {
      id: 6,
      name: "Mr. Doe",
    },
    availability: [
      { day: "tuesday", time: "09:00-10:00" },
      { day: "thursday", time: "13:00-14:00" },
    ],
    isDropped: false,
    
  },
  {
    id: "religion",
    name: "Religion",
    teacher: {
      id: 7,
      name: "Ms. Smith",
    },
    availability: [
      { day: "monday", time: "09:00-10:00" },
      { day: "wednesday", time: "13:00-14:00" },
    ],
    isDropped: false,
   
  },
];

const handleSubjects = (state = subjects, action) => {
  switch (action.type) {
    case "DROP_SUBJECT":
      return state.map((subject) => {
        if (subject.id === action.payload) {
          return {
            ...subject,
            isDropped: !subject.isDropped,
          };
        } else {
          return subject;
        }
      });

      case "UNDROP_SUBJECT":
        return state.map((subject) => {
          if (subject.id === action.payload) {
            return {
              ...subject,
              isDropped: !subject.isDropped,
            };
          } else {
            return subject;
          }
        });
       
        
   


    default:
      return state;
  }
};

export default handleSubjects;
