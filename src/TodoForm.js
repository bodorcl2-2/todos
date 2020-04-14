import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const TodoForm = (props) => {
  const tasks = ["powtórka", "sprawdzian", "kartkówka", "pytanie", "luzik"];
  const groups = ["1a", "1b", "1c", "2a", "2b", "2c"];

  const [task, setTask] = useState("");
  const [group, setGroup] = useState("");

  const handleChangeTask = (event) => {
    setTask(event.target.value);
  };
  const handleChangeGroup = (event) => {
    setGroup(event.target.value);
  };
  const handleOnChange = (event) => {
    setTask("");
    setGroup("");
  };

  return (
    <form action="#" onSubmit={props.handleOnAddTask}>
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
            id="taskGroupe"
            value={group}
            onChange={handleChangeGroup}
            onBlur={props.handleOnChange}
          >
            {groups.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Wybierz klasę</FormHelperText>
        </FormControl>
        <FormControl>
          <Select
            labelId="taskName"
            name="taskName"
            id="taskName"
            value={task}
            onChange={handleChangeTask}
            onBlur={props.handleOnChange}
          >
            {tasks.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Wybierz zadanie</FormHelperText>
        </FormControl>

        <FormControl>
          <Input
            type="date"
            label="Data"
            name="taskDate"
            id="taskDate"
            value={props.newTask.taskDate}
            onChange={props.handleOnChange}
          />
          <FormHelperText>Data</FormHelperText>
        </FormControl>

        <FormControl>
          <Input
            type="time"
            min="08:00"
            max="15:10"
            name="taskTime"
            id="taskTime"
            value={props.newTask.taskTime}
            onChange={props.handleOnChange}
          />
          <FormHelperText>Godzina</FormHelperText>
        </FormControl>
        <FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<AddCircleIcon />}
            onClick={handleOnChange}
          >
            Dodaj
          </Button>
        </FormControl>
      </Box>
    </form>
  );
};
export default TodoForm;
