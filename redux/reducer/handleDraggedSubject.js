




const handleDraggedSubject = (state ='', action) => {
    
    switch (action.type) {

      
        case "DRAGGED_SUBJECT":
        return  action.payload;
        default:
        return state;
    }
    }

export default handleDraggedSubject;