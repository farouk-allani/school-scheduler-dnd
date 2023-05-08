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
      { day: "wednesday", time: "01:00-02:00" },
    ],
    isDropped: false,
    isDragged: false,
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
      { day: "thursday", time: "01:00-02:00" },
    ],
    isDropped: false,
    isDragged: false,
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
      { day: "wednesday", time: "01:00-02:00" },
    ],
    isDropped: false,
    isDragged: false,
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
      { day: "thursday", time: "01:00-02:00" },
    ],
    isDropped: false,
    isDragged: false,
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
      { day: "wednesday", time: "01:00-02:00" },
    ],
    isDropped: false,
    isDragged: false,
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
      { day: "thursday", time: "01:00-2:00" },
    ],
    isDropped: false,
    isDragged: false,
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
      { day: "wednesday", time: "01:00-02:00" },
    ],
    isDropped: false,
    isDragged: false,
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
