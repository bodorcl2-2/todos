import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Todo from "./Todo";

const List = (props) => {

    const history = useHistory()

    const [tasks, setTasks] = useState([
        {
            id: "",
            taskGroup: "",
            taskName: "",
            taskDate: "",
            taskTime: ""
        },
    ]);


    useEffect(() => {
        setTasks([...props.tasks]);
    }, [props.tasks])

    console.log(tasks)

    return (
        <div>
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
                    Zaplanowane zadania
                </Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                ml={4}
                mr={4}
                mt={-2}
                pb={2}
                // p={1}
                boxShadow={2}
            >
                <Box width="10%" textAlign="center" ml={2}>
                    <Typography
                        variant="h5"
                    // color="primary"
                    >
                        Grupa
                    </Typography>
                </Box>
                <Box width="30%" textAlign="center">
                    <Typography
                        variant="h5"
                    // color="secondary"
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
            {
                tasks
                    .sort((a) => a.taskDate)
                    .map((item) => (
                        <Todo
                            key={item.id}
                            id={item.id}
                            taskGroup={item.taskGroup}
                            taskName={item.taskName}
                            taskDate={item.taskDate}
                            taskTime={item.taskTime}
                            handleOnDeleteTask={props.handleOnDeleteTask}
                            settingEditTask={props.settingEditTask}
                        />
                    ))
            }
            <Box
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                m={4}
                p={2}
                boxShadow={2}
            >
                <Button
                    id={props.id}
                    onClick={() => history.push(`/add`)}
                    variant="contained"
                    color="primary"
                >
                    Dodaj nowe
      </Button>
            </Box>
        </div>
    )
}


export default List;