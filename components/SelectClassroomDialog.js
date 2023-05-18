import React from "react";
// ** MUI Imports
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { useDispatch } from "react-redux";
import { addClassroom } from "../redux/action";

function SelectClassroomDialog({
  handleCloseClassroom,
  openClassroom,
  dropedSubject
  
}) {
  const [selectedClassroom, setSelectedClassroom] = React.useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setSelectedClassroom(event.target.value);
  };
  

  const handleConfirm = () => {
    console.log("selectedClassroom", selectedClassroom);
    dispatch(addClassroom(dropedSubject,selectedClassroom));
    handleCloseClassroom();
  };
  return (
    <Dialog dir="rtl" sx={{textAlign:'center'}} maxWidth="xs" fullWidth open={openClassroom} onClose={handleCloseClassroom}>
      <DialogTitle sx={{fontFamily:"Vazirmatn", fontWeight:"700",fontStyle:"normal"}} >تعيين قاعة الدروس</DialogTitle>
      <DialogContent sx={{ alignContent:"center"}}>
        <form>
          <FormControl sx={{ mr: 4 , width:"200px" }}>
            <InputLabel sx={{paddingTop:'6px'}} id="demo-dialog-select-label" size="normal">القاعة</InputLabel>
            <Select
              label="Age"
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              defaultValue=""
              onChange={handleChange}
            >
             
              <MenuItem value={1}>قاعة عدد 1</MenuItem>
                <MenuItem value={2}>قاعة عدد 2</MenuItem>
                <MenuItem value={3}>قاعة عدد 3</MenuItem>
                <MenuItem value={4}>قاعة عدد 4</MenuItem>
                <MenuItem value={5}>قاعة عدد 5</MenuItem>
                <MenuItem value={6}>قاعة عدد 6</MenuItem>
                <MenuItem value={7}>قاعة عدد 7</MenuItem>
                <MenuItem value={8}>قاعة عدد 8</MenuItem>
                <MenuItem value={9}>قاعة عدد 9</MenuItem>
         
            </Select>
          </FormControl>
        </form>
      </DialogContent>
      <DialogActions sx={{gap:1}}  >
         
         <Button onClick={handleConfirm} variant="outlined">
          تأكيد
        </Button>

        <Button onClick={handleCloseClassroom} variant="outlined">
          إلغاء
        </Button>
      
      </DialogActions>
    </Dialog>
  );
}

export default SelectClassroomDialog;
