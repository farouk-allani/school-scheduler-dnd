const subjects = [
  {
    id: "رياضيات",
    name: "رياضيات",
    teacher: {
      id: 1,
      name: "Ms. Smith",
    },
    availability: [
      { day: "monday", time: "09:00-10:00" },
      { day: "tuesday", time: "09:00-10:00" },
      { day: "wednesday", time: "13:00-14:00" },
      { day: "friday", time: "13:00-14:00"},
      { day: "saturday", time: "13:00-14:00"},
      { day: "saturday", time: "08:00-09:00"}
    ],
    isDropped: false,
    duration: 1,
    backgroundColor: "#ffc8dd",
    kesm: "سنة أولى إبتدائي الشابي",
    
  },
  {
    id: "انقليزية",
    name: "انقليزية",
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
    duration: 1,
    backgroundColor: "#d4a373",
    kesm: "سنة أولى إبتدائي الشابي",

    
  },
  {
    id: "عربية",
    name: "عربية",
    teacher: {
      id: 3,
      name: "Ms. Smith",
    },
    availability: [
      { day: "monday", time: "09:00-10:00" },
      {day:"monday", time:"10:00-11:00"},
      { day: "wednesday", time: "13:00-14:00" },
      {day:"wednesday", time:"14:00-15:00"},
      { day: "friday", time: "13:00-14:00"},
      {day:"friday", time:"14:00-15:00"},
      { day: "saturday", time: "13:00-14:00"},
      {day:"saturday", time:"14:00-15:00"},
      { day: "saturday", time: "08:00-09:00"},
      {day:"saturday", time:"09:00-10:00"}
    ],
    isDropped: false,
    duration: 2,
    backgroundColor: "#ccd5ae",
    kesm: "سنة أولى إبتدائي الشابي",

    
  },
  {
    id: "2عربية",
    name: "عربية",
    teacher: {
      id: 3,
      name: "Ms. Smith",
    },
    availability: [
      { day: "monday", time: "09:00-10:00" },
      {day:"monday", time:"10:00-11:00"},
      { day: "wednesday", time: "13:00-14:00" },
      {day:"wednesday", time:"14:00-15:00"},
      { day: "friday", time: "13:00-14:00"},
      {day:"friday", time:"14:00-15:00"},
      { day: "saturday", time: "13:00-14:00"},
      {day:"saturday", time:"14:00-15:00"},
      { day: "saturday", time: "08:00-09:00"},
      {day:"saturday", time:"09:00-10:00"}
    ],
    isDropped: false,
    duration: 1,
    backgroundColor: "#ccd5ae",
    kesm: "سنة أولى إبتدائي الشابي",

    
  },
  {
    id: "3عربية",
    name: "عربية",
    teacher: {
      id: 3,
      name: "Ms. Smith",
    },
    availability: [
      { day: "monday", time: "09:00-10:00" },
      {day:"monday", time:"10:00-11:00"},
      { day: "wednesday", time: "13:00-14:00" },
      {day:"wednesday", time:"14:00-15:00"},
      { day: "friday", time: "13:00-14:00"},
      {day:"friday", time:"14:00-15:00"},
      { day: "saturday", time: "13:00-14:00"},
      {day:"saturday", time:"14:00-15:00"},
      { day: "saturday", time: "08:00-09:00"},
      {day:"saturday", time:"09:00-10:00"}
    ],
    isDropped: false,
    duration: 2,
    backgroundColor: "#ccd5ae",
    kesm: "سنة أولى إبتدائي الشابي",

    
  },
  {
    id: "ايقاظ علمي",
    name: "ايقاظ علمي",
    teacher: {
      id: 4,
      name: "Mr. Doe",
    },
    availability: [
      { day: "tuesday", time: "09:00-10:00" },
      { day: "tuesday", time: "10:00-11:00"},
      { day: "thursday", time: "13:00-14:00" },
      { day: "thursday", time: "14:00-15:00"},
      { day: "friday", time: "13:00-14:00"},
      { day: "friday", time: "14:00-15:00"},
      { day: "saturday", time: "13:00-14:00"},
      { day: "saturday", time: "14:00-15:00"},
      { day: "saturday", time: "08:00-09:00"},
      { day: "saturday", time: "09:00-10:00"}


    ],
    isDropped: false,
    duration: 2,
    backgroundColor: "#778da9",
    kesm: "سنة أولى إبتدائي الشابي",

    
  },
  {
    id: "ت.بدنية",
    name: "ت.بدنية",
    teacher: {
      id: 5,
      name: "Ms. Smith",
    },
    availability: [
      { day: "monday", time: "09:00-10:00" },
      {day:"monday", time:"10:00-11:00"},
      { day: "wednesday", time: "13:00-14:00" },
      {day:"wednesday", time:"14:00-15:00"},
      { day: "friday", time: "13:00-14:00"},
      {day:"friday", time:"14:00-15:00"},
      { day: "saturday", time: "13:00-14:00"},
      {day:"saturday", time:"14:00-15:00"},
      { day: "saturday", time: "08:00-09:00"},
      {day:"saturday", time:"09:00-10:00"}
    ],
    isDropped: false,
    duration: 2,
    backgroundColor: "#a3b18a",
    kesm: "سنة أولى إبتدائي الشابي",

    
  },
  {
    id: "ت.تكنولوجية",
    name: "ت.تكنولوجية",
    teacher: {
      id: 6,
      name: "Mr. Doe",
    },
    availability: [
      { day: "tuesday", time: "09:00-10:00" },
      { day: "thursday", time: "13:00-14:00" },
      { day: "friday", time: "13:00-14:00"},
      { day: "saturday", time: "13:00-14:00"},
      { day: "saturday", time: "08:00-09:00"},
      { day: "monday", time: "11:00-12:00"}

    ],
    isDropped: false,
    duration: 1,
    backgroundColor: "#ffc300",
    kesm: "سنة أولى إبتدائي الشابي",

    
  },
  {
    id: "ت.تشكيلية",
    name: "ت.تشكيلية",
    teacher: {
      id: 7,
      name: "Ms. Smith",
    },
    availability: [
      { day: "monday", time: "09:00-10:00" },
      { day: "wednesday", time: "13:00-14:00" },
      { day: "friday", time: "13:00-14:00"},
      { day: "saturday", time: "13:00-14:00"},
      { day: "saturday", time: "08:00-09:00"},
      { day: "monday", time: "11:00-12:00"}
      ,
      { day: "tuesday", time: "09:00-10:00" },
      { day: "thursday", time: "13:00-14:00" },
      { day: "friday", time: "13:00-14:00"},
      { day: "saturday", time: "13:00-14:00"},
      { day: "saturday", time: "08:00-09:00"},
      { day: "monday", time: "11:00-12:00"},
      { day: "tuesday", time: "09:00-10:00" },
      { day: "thursday", time: "15:00-16:00" },

    ],
    isDropped: false,
    duration: 1,
    backgroundColor: "#4a7c59",
    kesm: "سنة أولى إبتدائي الشابي",

   
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
