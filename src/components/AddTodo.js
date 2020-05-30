import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom'
import { TodoContext } from "../context/TodoContext";
import { DataToFormContext } from "../context/DataToFormContext";

import Typography from '@material-ui/core/Typography';
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const AddTodo = () => {

  const { handleOnAddTask } = useContext(TodoContext);
  const { tasksName, groupsName } = useContext(DataToFormContext)
  const history = useHistory()
  const [newTask, setNewTask] = useState({
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
    }))
  }

  return (
    <form action="#" onSubmit={(e) => {
      e.preventDefault()
      handleOnAddTask(newTask)
      setNewTask({
        taskGroup: "",
        taskName: "",
        taskDate: "",
        taskTime: ""
      })
    }} >
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        m={4}
        p={2}
        boxShadow={2}
      >
        <Typography
          variant="h4"
          color="primary"
          gutterBottom
        >
          Dodaj nowe zadanie
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        ml={4}
        mr={4}
        mt={-3}
        // p={1}
        boxShadow={2}
      >
        <Box width="20%" textAlign="center">
          <Typography
            variant="h6"
          >
            Grupa
          </Typography>
        </Box>
        <Box width="20%" textAlign="center" ml={-4}>
          <Typography
            variant="h6"
          >
            Zadanie
          </Typography>
        </Box>
        <Box width="20%" textAlign="center">
          <Typography
            variant="h6"
          >
            Data
          </Typography>
        </Box>
        <Box width="20%" textAlign="center">
          <Typography
            variant="h6"
          >
            Godzina
          </Typography>
        </Box>
        <Box width="20%" textAlign="center">

        </Box>
      </Box>
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
            required
            id="taskGroup"
            value={newTask.taskGroup}
            // onChange={handleChangeGroup}
            onChange={handleOnChange}
          >
            {groupsName.map((option) => (
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
            required
            value={newTask.taskName}
            onChange={handleOnChange}
          >
            {tasksName.map((option) => (
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
            required
            value={newTask.taskDate}
            onChange={handleOnChange}
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
            required
            value={newTask.taskTime}
            onChange={handleOnChange}
          />
          <FormHelperText>Godzina</FormHelperText>
        </FormControl>

        <IconButton
          type="submit"
          // variant="contained"
          color="primary"
          // startIcon={<AddCircleIcon />}
          onClick={(e) => history.push(`/`)}
        >
          <AddCircleIcon />
        </IconButton>
      </Box>
    </form >
  );
};
export default AddTodo;