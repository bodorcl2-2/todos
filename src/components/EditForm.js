import React, { useState } from "react";
// import React, { useState } from "react";
import Typography from '@material-ui/core/Typography';
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

    console.log(props.editTask)
    const { id, taskGroup, taskName, taskDate, taskTime } = props.editTask

    const [updateTask, setupdateTask] = useState({
        id: id,
        taskGroup: taskGroup,
        taskName: taskName,
        taskDate: taskDate,
        taskTime: taskTime
    });


    console.log(`to z editTask ${updateTask}`)

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setupdateTask(prevState => ({
            ...prevState,
            [name]: value,
            id: uuidv4()
        }))
    }

    return (
        <form action="#" onSubmit={(e) => {
            e.preventDefault()
            props.handleOnUpdateTask(updateTask)
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
                    variant="h2"
                    color="primary"
                    gutterBottom
                >
                    Edytuj zadanie
                </Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                mt={-3}
                ml={4}
                mr={4}
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
                        id="taskGroup"
                        value={updateTask.taskGroup}
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
                </FormControl>
                <FormControl>
                    <Select
                        labelId="taskName"
                        name="taskName"
                        id="taskName"
                        value={updateTask.taskName}
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
                </FormControl>


                <FormControl>
                    <Input
                        type="date"
                        label="Data"
                        name="taskDate"
                        id="taskDate"
                        value={updateTask.taskDate}
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
                        value={updateTask.taskTime}
                        onChange={handleOnChange}
                    />
                    <FormHelperText>Godzina</FormHelperText>

                </FormControl>

                <Button onClick={(e) => {
                    setupdateTask(prevState => ({
                        ...prevState,
                        id: uuidv4()
                    }))
                }}
                    type="submit"
                    variant="contained"
                    color="primary"
                    startIcon={<AddCircleIcon />}
                >
                    Aktualizuj
          </Button>

            </Box>
        </form >
    );
};
export default TodoForm;
