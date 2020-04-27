import React, { useState } from "react";
// import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { v4 as uuidv4 } from "uuid";

const TodoForm = (props) => {
  const tasks = ["powtórka", "sprawdzian", "kartkówka", "pytanie", "luzik"];
  const groups = ["1a", "1b", "1c", "2a", "2b", "2c"];

  const [newTask, setNewTask] = useState({
    id: "",
    taskGroup: "",
    taskName: "",
    taskDate: "",
    taskTime: "",
  });

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setNewTask(prevState => ({
      ...prevState,
      [name]: value,
      id: uuidv4()
    }))
  }

  return (
    <form action="#" onSubmit={(e) => {
      e.preventDefault()
      props.handleOnAddTask(newTask)
    }} >
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        m={4}
        p={2}
        boxShadow={2}
      >
        <FormControl>
          <Select
            labelId="taskGroup"
            name="taskGroup"
            id="taskGroup"
            value={newTask.taskGroup}
            // onChange={handleChangeGroup}
            onChange={handleOnChange}
          >
            {groups.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Wybierz klasę</FormHelperText>

          <Select
            labelId="taskName"
            name="taskName"
            id="taskName"
            value={newTask.taskName}
            // onClick={handleChangeTask}
            onChange={handleOnChange}
          >
            {tasks.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Wybierz zadanie</FormHelperText>



          <Input
            type="date"
            label="Data"
            name="taskDate"
            id="taskDate"
            value={newTask.taskDate}
            onChange={handleOnChange}
          />
          <FormHelperText>Data</FormHelperText>



          <Input
            type="time"
            min="08:00"
            max="15:10"
            name="taskTime"
            id="taskTime"
            value={newTask.taskTime}
            onChange={handleOnChange}
          />
          <FormHelperText>Godzina</FormHelperText>



          <Button onClick={(e) => {
            setNewTask(prevState => ({
              ...prevState,
              id: uuidv4()
            }))
          }}
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<AddCircleIcon />}
          >
            Dodaj
          </Button>
        </FormControl>
      </Box>
    </form >
  );
};
export default TodoForm;
