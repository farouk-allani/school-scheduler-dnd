const aksem = [
  {
    id: 1,
    name: "سنة أولى إبتدائي الشابي",
    subjectName: "عربية",
    teacher: {
      id: 1,
      name: "Arabic teacher",
    },
    dayAndTime: "",
    isDropped: false,
    duration: 2,
  },
  {
    id: 2,
    name: "سنة أولى إبتدائي الشابي",
    subjectName: "عربية",
    teacher: {
      id: 2,
      name: "Arabic teacher",
    },
    dayAndTime: "",
    isDropped: false,
    duration: 2,
  },
  {
    id: 3,
    name: "سنة ثالثة إبتدائي الشابي",
    subjectName: "عربية",
    teacher: {
      id: 3,
      name: "Arabic teacher",
    },
    dayAndTime: "",
    isDropped: false,
    duration: 2,
  },
];

const handleAksem = (state = aksem, action) => {

  switch (action.type) {
    case "DROP_KESM":
      return state.map((kesm) => {
        if (kesm.id === action.payload) {
          return {
            ...kesm,
            isDropped: true,
          };
        } else {
          return kesm;
        }
      });
    case "UNDROP_KESM":
      return state.map((kesm) => {
        if (kesm.id === action.payload) {
          return {
            ...kesm,
            isDropped: false,
          };
        } else {
          return kesm;
        }
      });

    default:
      return state;
  }
};
export default handleAksem;
