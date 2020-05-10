import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { DataToFormContext } from "../context/DataToFormContext";
import { TodoContext } from "../context/TodoContext";

import Typography from '@material-ui/core/Typography';
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import CheckIcon from "@material-ui/icons/Check";
import { v4 as uuidv4 } from "uuid";


const TodoForm = () => {

    const history = useHistory()

    const { tasksName, groupsName } = useContext(DataToFormContext)
    const { tasks, handleOnUpdateTask } = useContext(TodoContext)

    let { id } = useParams();

    const tymczas = tasks.filter((task) => task.id === id)[0]


    const [updateTask, setUpdateTask] = useState(
        tymczas
    );

    // const { taskGorup, taskName, taskDate, taskTime } = updateTask

    // useEffect(() => {
    //     setUpdateTask(
    //         props.editTask
    //     )
    // }, [])

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setUpdateTask(prevState => ({
            ...prevState,
            [name]: value,
            id: uuidv4()
        }))
    }

    return (
        <form action="#" onSubmit={(e) => {
            e.preventDefault()
            handleOnUpdateTask(updateTask)
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
                        value={updateTask.taskName}
                        // onClick={handleChangeTask}
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

                <Button
                    // onMouseUp={(e) => {
                    //     setUpdateTask(prevState => ({
                    //         ...prevState,
                    //         id: uuidv4()
                    //     }))
                    // }}
                    onClick={() => history.push(`/edit${tasks.id}`)}
                    type="submit"
                    variant="contained"
                    color="primary"
                    startIcon={<CheckIcon />}
                >
                    Aktualizuj
          </Button>

            </Box>
        </form >
    );
};
export default TodoForm;
