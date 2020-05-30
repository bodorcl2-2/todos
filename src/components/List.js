import React, { useContext } from 'react';
import { TodoContext } from "../context/TodoContext";

import Todo from "./Todo";
import { compareValues } from "../utils/Utils"
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const List = () => {

    const { tasks, compare, sortingAsc, handleSortList, handleOnDeleteTask, settingEditTask } = useContext(TodoContext)

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
                <Box display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="10%"
                    textAlign="center"
                    ml={2} id="taskGroup"
                    onClick={
                        handleSortList
                    }
                >
                    <Typography
                        className="cursorPointer"
                        variant="h5"
                    >
                        Grupa
                    </Typography>
                    {(sortingAsc === "asc") ? <ArrowUpward fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
                </Box>
                <Box display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="30%"
                    textAlign="center"
                    id="taskName"
                    onClick={handleSortList}
                >
                    <Typography
                        className="cursorPointer"
                        variant="h5"
                    // color="secondary"
                    >
                        Zadanie
                    </Typography>
                    {(sortingAsc === "asc") ? <ArrowUpward fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
                </Box>
                <Box display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="20%"
                    textAlign="center"
                    id="taskDate"
                    onClick={handleSortList}>
                    <Typography
                        className="cursorPointer"
                        variant="h6"
                    >
                        Data
                    </Typography>
                    {(sortingAsc === "asc") ? <ArrowUpward fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
                </Box>
                <Box width="20%" textAlign="center" id="taskTime">
                    <Typography
                        variant="h6"
                    >
                        Godzina
                    </Typography>
                </Box>
                <Box width="20%" textAlign="center" >
                </Box>
            </Box>
            {
                tasks.sort(compareValues('taskTime'))
                    .sort(compareValues(compare, sortingAsc))
                    .map((item) => (
                        <Todo
                            key={item.id}
                            id={item.id}
                            taskGroup={item.taskGroup}
                            taskName={item.taskName}
                            taskDate={item.taskDate}
                            taskTime={item.taskTime}
                            handleOnDeleteTask={handleOnDeleteTask}
                            settingEditTask={settingEditTask}
                        />
                    ))
            }
        </div >
    )
}

export default List;