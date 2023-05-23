const subjects = [
  {
    id: "1رياضيات",
    name: "رياضيات",
    teacher: {
      id: 1,
      name: "Ms. Smith",
    },
    availability: [
      { day: "monday", time: "10:00-09:00" },
      { day: "tuesday", time: "10:00-09:00" },
      { day: "wednesday", time: "14:00-13:00" },
      { day: "friday", time: "14:00-13:00"},
      { day: "saturday", time: "14:00-13:00"},
      { day: "saturday", time: "09:00-08:00"}
    ],
    isDropped: false,
    duration: 1,
    backgroundColor: "#ffc8dd",
    kesm: "سنة أولى إبتدائي الشابي",
    classRoom: undefined,
    
  },
  {
    id: "2رياضيات",
    name: "رياضيات",
    teacher: {
      id: 1,
      name: "Ms. Smith",
    },
    availability: [
      { day: "monday", time: "10:00-09:00" },
      { day: "tuesday", time: "10:00-09:00" },
      { day: "wednesday", time: "14:00-13:00" },
      { day: "friday", time: "14:00-13:00"},
      { day: "saturday", time: "14:00-13:00"},
      { day: "saturday", time: "09:00-08:00"}
    ],
    isDropped: false,
    duration: 1,
    backgroundColor: "#ffc8dd",
    kesm: "سنة أولى إبتدائي الشابي",
    classRoom: undefined,
    
  },
  {
    id: "3رياضيات",
    name: "رياضيات",
    teacher: {
      id: 1,
      name: "Ms. Smith",
    },
    availability: [
      { day: "monday", time: "10:00-09:00" },
      { day: "tuesday", time: "10:00-09:00" },
      { day: "wednesday", time: "14:00-13:00" },
      { day: "friday", time: "14:00-13:00"},
      { day: "saturday", time: "14:00-13:00"},
      { day: "saturday", time: "09:00-08:00"}
    ],
    isDropped: false,
    duration: 1,
    backgroundColor: "#ffc8dd",
    kesm: "سنة أولى إبتدائي الشابي",
    classRoom: undefined,
    
  },
  {
    id: "4رياضيات",
    name: "رياضيات",
    teacher: {
      id: 1,
      name: "Ms. Smith",
    },
    availability: [
      { day: "monday", time: "10:00-09:00" },
      { day: "tuesday", time: "10:00-09:00" },
      { day: "wednesday", time: "14:00-13:00" },
      { day: "friday", time: "14:00-13:00"},
      { day: "saturday", time: "14:00-13:00"},
      { day: "saturday", time: "09:00-08:00"}
    ],
    isDropped: false,
    duration: 2,
    backgroundColor: "#ffc8dd",
    kesm: "سنة أولى إبتدائي الشابي",
    classRoom: undefined,
    
  },
  {
    id: "انقليزية",
    name: "انقليزية",
    teacher: {
      id: 2,
      name: "Mr. Doe",
    },
    availability: [
      { day: "tuesday", time: "10:00-09:00" },
      { day: "thursday", time: "14:00-13:00" },
      { day: "friday", time: "14:00-13:00"},
      { day: "saturday", time: "14:00-13:00"},
      { day: "saturday", time: "09:00-08:00"},
      { day: 'monday', time: '12:00-11:00'}
    ],
    isDropped: false,
    duration: 1,
    backgroundColor: "#d4a373",
    kesm: "سنة أولى إبتدائي الشابي",
    classRoom: undefined,

    
  },
  {
    id: "1عربية",
    name: "عربية",
    teacher: {
      id: 3,
      name: "arabic teacher",
    },
    availability: [
      { day: "monday", time: "10:00-09:00" },
      { day: "monday", time: "11:00-10:00" },
      { day: "wednesday", time: "14:00-13:00" },
      { day: "wednesday", time: "15:00-14:00" },
      { day: "friday", time: "14:00-13:00" },
      { day: "friday", time: "15:00-14:00" },
      { day: "saturday", time: "14:00-13:00" },
      { day: "saturday", time: "15:00-14:00" },
      { day: "saturday", time: "09:00-08:00" },
      { day: "saturday", time: "10:00-09:00" }
    ],
    isDropped: false,
    duration: 1,
    backgroundColor: "#61876E",
    kesm: "سنة أولى إبتدائي الشابي",
    classRoom: undefined,

    
  },
  {
    id: "2عربية",
    name: "عربية",
    teacher: {
      id: 3,
      name: "arabic teacher",
    },
    availability: [
      { day: "monday", time: "10:00-09:00" },
      { day: "monday", time: "11:00-10:00" },
      { day: "wednesday", time: "14:00-13:00" },
      { day: "wednesday", time: "15:00-14:00" },
      { day: "friday", time: "14:00-13:00" },
      { day: "friday", time: "15:00-14:00" },
      { day: "saturday", time: "14:00-13:00" },
      { day: "saturday", time: "15:00-14:00" },
      { day: "saturday", time: "09:00-08:00" },
      { day: "saturday", time: "10:00-09:00" }
    ],
    isDropped: false,
    duration: 1,
    backgroundColor: "#61876E",
    kesm: "سنة أولى إبتدائي الشابي",
    classRoom: undefined,

    
  },
  {
    id: "3عربية",
    name: "عربية",
    teacher: {
      id: 3,
      name: "arabic teacher",
    },
    availability: [
      { day: "monday", time: "10:00-09:00" },
      { day: "monday", time: "11:00-10:00" },
      { day: "wednesday", time: "14:00-13:00" },
      { day: "wednesday", time: "15:00-14:00" },
      { day: "friday", time: "14:00-13:00" },
      { day: "friday", time: "15:00-14:00" },
      { day: "saturday", time: "14:00-13:00" },
      { day: "saturday", time: "15:00-14:00" },
      { day: "saturday", time: "09:00-08:00" },
      { day: "saturday", time: "10:00-09:00" }
    ],
    isDropped: false,
    duration: 1,
    backgroundColor: "#61876E",
    kesm: "سنة أولى إبتدائي الشابي",
    classRoom: undefined,

    
  },
  {
    id: "4عربية",
    name: "عربية",
    teacher: {
      id: 3,
      name: "arabic teacher",
    },
    availability: [
      { day: "monday", time: "10:00-09:00" },
      { day: "monday", time: "11:00-10:00" },
      { day: "wednesday", time: "14:00-13:00" },
      { day: "wednesday", time: "15:00-14:00" },
      { day: "friday", time: "14:00-13:00" },
      { day: "friday", time: "15:00-14:00" },
      { day: "saturday", time: "14:00-13:00" },
      { day: "saturday", time: "15:00-14:00" },
      { day: "saturday", time: "09:00-08:00" },
      { day: "saturday", time: "10:00-09:00" }
    ],
    isDropped: false,
    duration: 1,
    backgroundColor: "#61876E",
    kesm: "سنة أولى إبتدائي الشابي",
    classRoom: undefined,

    
  },
  {
    id: "5عربية",
    name: "عربية",
    teacher: {
      id: 3,
      name: "arabic teacher",
    },
    availability: [
      { day: "monday", time: "10:00-09:00" },
      { day: "monday", time: "11:00-10:00" },
      { day: "wednesday", time: "14:00-13:00" },
      { day: "wednesday", time: "15:00-14:00" },
      { day: "friday", time: "14:00-13:00" },
      { day: "friday", time: "15:00-14:00" },
      { day: "saturday", time: "14:00-13:00" },
      { day: "saturday", time: "15:00-14:00" },
      { day: "saturday", time: "09:00-08:00" },
      { day: "saturday", time: "10:00-09:00" }
    ],
    isDropped: false,
    duration: 2,
    backgroundColor: "#61876E",
    kesm: "سنة أولى إبتدائي الشابي",
    classRoom: undefined,

    
  },
  {
    id: "6عربية",
    name: "عربية",
    teacher: {
      id: 3,
      name: "arabic teacher",
    },
    availability: [
      { day: "monday", time: "10:00-09:00" },
      { day: "monday", time: "11:00-10:00" },
      { day: "wednesday", time: "14:00-13:00" },
      { day: "wednesday", time: "15:00-14:00" },
      { day: "friday", time: "14:00-13:00" },
      { day: "friday", time: "15:00-14:00" },
      { day: "saturday", time: "14:00-13:00" },
      { day: "saturday", time: "15:00-14:00" },
      { day: "saturday", time: "09:00-08:00" },
      { day: "saturday", time: "10:00-09:00" }
    ],
    isDropped: false,
    duration: 2,
    backgroundColor: "#61876E",
    kesm: "سنة أولى إبتدائي الشابي",
    classRoom: undefined,

    
  },
  {
    id: "ايقاظ علمي",
    name: "ايقاظ علمي",
    teacher: {
      id: 4,
      name: "Mr. Doe",
    },
    availability: [
      { day: "tuesday", time: "10:00-09:00" },
      { day: "tuesday", time: "11:00-10:00" },
      { day: "thursday", time: "14:00-13:00" },
      { day: "thursday", time: "15:00-14:00" },
      { day: "friday", time: "14:00-13:00" },
      { day: "friday", time: "15:00-14:00" },
      { day: "saturday", time: "14:00-13:00" },
      { day: "saturday", time: "15:00-14:00" },
      { day: "saturday", time: "09:00-08:00" },
      { day: "saturday", time: "10:00-09:00" }
    ],
    isDropped: false,
    duration: 1,
    backgroundColor: "#778da9",
    kesm: "سنة أولى إبتدائي الشابي",
    classRoom: undefined,

    
  },
  {
    id: "ت.بدنية",
    name: "ت.بدنية",
    teacher: {
      id: 5,
      name: "Ms. Smith",
    },
    availability: [
      { day: "monday", time: "10:00-09:00" },
      { day: "monday", time: "11:00-10:00" },
      { day: "wednesday", time: "14:00-13:00" },
      { day: "wednesday", time: "15:00-14:00" },
      { day: "friday", time: "14:00-13:00" },
      { day: "friday", time: "15:00-14:00" },
      { day: "saturday", time: "14:00-13:00" },
      { day: "saturday", time: "15:00-14:00" },
      { day: "saturday", time: "09:00-08:00" },
      { day: "saturday", time: "10:00-09:00" }
    ],
    isDropped: false,
    duration: 1,
    backgroundColor: "#a3b18a",
    kesm: "سنة أولى إبتدائي الشابي",
    classRoom: undefined,

    
  },
  {
    id: "ت.تكنولوجية",
    name: "ت.تكنولوجية",
    teacher: {
      id: 6,
      name: "Mr. Doe",
    },
    availability: [
      { day: "tuesday", time: "10:00-09:00" },
      { day: "thursday", time: "14:00-13:00" },
      { day: "friday", time: "14:00-13:00" },
      { day: "saturday", time: "14:00-13:00" },
      { day: "saturday", time: "09:00-08:00" },
      { day: "monday", time: "12:00-11:00" }
    ]
    ,
    isDropped: false,
    duration: 1,
    backgroundColor: "#ffc300",
    kesm: "سنة أولى إبتدائي الشابي",
    classRoom: undefined,

    
  },
  {
    id: "ت.تشكيلية",
    name: "ت.تشكيلية",
    teacher: {
      id: 7,
      name: "Ms. Smith",
    },
    availability: [
      { day: "monday", time: "10:00-09:00" },
      { day: "wednesday", time: "14:00-13:00" },
      { day: "friday", time: "14:00-13:00" },
      { day: "saturday", time: "14:00-13:00" },
      { day: "saturday", time: "09:00-08:00" },
      { day: "monday", time: "12:00-11:00" },
      { day: "tuesday", time: "10:00-09:00" },
      { day: "thursday", time: "14:00-13:00" },
      { day: "friday", time: "14:00-13:00" },
      { day: "saturday", time: "14:00-13:00" },
      { day: "saturday", time: "09:00-08:00" },
      { day: "monday", time: "12:00-11:00" },
      { day: "tuesday", time: "10:00-09:00" },
      { day: "thursday", time: "16:00-15:00" }
    ]
    ,
    isDropped: false,
    duration: 1,
    backgroundColor: "#9D3C72",
    kesm: "سنة أولى إبتدائي الشابي",
    classRoom: undefined,

   
  },
  {
    id: "ت.موسيقية",
    name: "ت.موسيقية",
    teacher: {
      id: 7,
      name: "Ms. Smith",
    },
    availability: [
      { day: "monday", time: "10:00-09:00" },
      { day: "wednesday", time: "14:00-13:00" },
      { day: "friday", time: "14:00-13:00" },
      { day: "saturday", time: "14:00-13:00" },
      { day: "saturday", time: "09:00-08:00" },
      { day: "monday", time: "12:00-11:00" },
      { day: "tuesday", time: "10:00-09:00" },
      { day: "thursday", time: "14:00-13:00" },
      { day: "friday", time: "14:00-13:00" },
      { day: "saturday", time: "14:00-13:00" },
      { day: "saturday", time: "09:00-08:00" },
      { day: "monday", time: "12:00-11:00" },
      { day: "tuesday", time: "10:00-09:00" },
      { day: "thursday", time: "16:00-15:00" }
    ]
    ,
    isDropped: false,
    duration: 1,
    backgroundColor: "#C780FA",
    kesm: "سنة أولى إبتدائي الشابي",
    classRoom: undefined,

   
  },
  {
    id: "فرنسية",
    name: "فرنسية",
    teacher: {
      id: 7,
      name: "Ms. Smith",
    },
    availability: [
      { day: "monday", time: "10:00-09:00" },
      { day: "wednesday", time: "14:00-13:00" },
      { day: "friday", time: "14:00-13:00" },
      { day: "saturday", time: "14:00-13:00" },
      { day: "saturday", time: "09:00-08:00" },
      { day: "monday", time: "12:00-11:00" },
      { day: "tuesday", time: "10:00-09:00" },
      { day: "thursday", time: "14:00-13:00" },
      { day: "friday", time: "14:00-13:00" },
      { day: "saturday", time: "14:00-13:00" },
      { day: "saturday", time: "09:00-08:00" },
      { day: "monday", time: "12:00-11:00" },
      { day: "tuesday", time: "10:00-09:00" },
      { day: "thursday", time: "16:00-15:00" }
    ]
    ,
    isDropped: false,
    duration: 1,
    backgroundColor: "#DF2E38",
    kesm: "سنة أولى إبتدائي الشابي",
    classRoom: undefined,

   
  },
  {
    id: "2فرنسية",
    name: "فرنسية",
    teacher: {
      id: 7,
      name: "Ms. Smith",
    },
    availability: [
      { day: "monday", time: "10:00-09:00" },
      { day: "wednesday", time: "14:00-13:00" },
      { day: "friday", time: "14:00-13:00" },
      { day: "saturday", time: "14:00-13:00" },
      { day: "saturday", time: "09:00-08:00" },
      { day: "monday", time: "12:00-11:00" },
      { day: "tuesday", time: "10:00-09:00" },
      { day: "thursday", time: "14:00-13:00" },
      { day: "friday", time: "14:00-13:00" },
      { day: "saturday", time: "14:00-13:00" },
      { day: "saturday", time: "09:00-08:00" },
      { day: "monday", time: "12:00-11:00" },
      { day: "tuesday", time: "10:00-09:00" },
      { day: "thursday", time: "16:00-15:00" }
    ]
    ,
    isDropped: false,
    duration: 1,
    backgroundColor: "#DF2E38",
    kesm: "سنة أولى إبتدائي الشابي",
    classRoom: undefined,

   
  },
  {
    id: "3فرنسية",
    name: "فرنسية",
    teacher: {
      id: 7,
      name: "Ms. Smith",
    },
    availability: [
      { day: "monday", time: "10:00-09:00" },
      { day: "wednesday", time: "14:00-13:00" },
      { day: "friday", time: "14:00-13:00" },
      { day: "saturday", time: "14:00-13:00" },
      { day: "saturday", time: "09:00-08:00" },
      { day: "monday", time: "12:00-11:00" },
      { day: "tuesday", time: "10:00-09:00" },
      { day: "thursday", time: "14:00-13:00" },
      { day: "friday", time: "14:00-13:00" },
      { day: "saturday", time: "14:00-13:00" },
      { day: "saturday", time: "09:00-08:00" },
      { day: "monday", time: "12:00-11:00" },
      { day: "tuesday", time: "10:00-09:00" },
      { day: "thursday", time: "16:00-15:00" }
    ]
    ,
    isDropped: false,
    duration: 2,
    backgroundColor: "#DF2E38",
    kesm: "سنة أولى إبتدائي الشابي",
    classRoom: undefined,

   
  },
  {
    id: "ت.اسلامية",
    name: "ت.اسلامية",
    teacher: {
      id: 7,
      name: "Ms. Smith",
    },
    availability: [
      { day: "monday", time: "10:00-09:00" },
      { day: "wednesday", time: "14:00-13:00" },
      { day: "friday", time: "14:00-13:00" },
      { day: "saturday", time: "14:00-13:00" },
      { day: "saturday", time: "09:00-08:00" },
      { day: "monday", time: "12:00-11:00" },
      { day: "tuesday", time: "10:00-09:00" },
      { day: "thursday", time: "14:00-13:00" },
      { day: "friday", time: "14:00-13:00" },
      { day: "saturday", time: "14:00-13:00" },
      { day: "saturday", time: "09:00-08:00" },
      { day: "monday", time: "12:00-11:00" },
      { day: "tuesday", time: "10:00-09:00" },
      { day: "thursday", time: "16:00-15:00" }
    ]
    ,
    isDropped: false,
    duration: 1,
    backgroundColor: "#DE7119",
    kesm: "سنة أولى إبتدائي الشابي",
    classRoom: undefined,

   
  },
];

const handleSubjects = (state = subjects, action) => {
  switch (action.type) {
    case "DROP_SUBJECT":
      return state.map((subject) => {
        if (subject.id === action.payload) {
          return {
            ...subject,
            isDropped: true,
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
              isDropped: false,
            };
          } else {
            return subject;
          }
        });

        case "ADD_CLASSROOM":
          return state.map((subject) => {
            if (subject.id === action.payload.dropedSubject.id) {
              return {
                ...subject,
                classRoom: action.payload.classRoom,
              };
            } else {
              return subject;
            }
          });

          case "REMOVE_CLASSROOM":
            return state.map((subject) => {
              if (subject.id === action.payload.dropedSubject.id) {
                return {
                  ...subject,
                  classRoom: undefined,
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
