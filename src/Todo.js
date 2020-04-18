import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
const Todo = (props) => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      ml={4}
      mr={4}
      p={2}
      boxShadow={2}
    >
      <h2>{props.taskGroup}</h2> <h2>{props.taskName}</h2>
      <h2>{props.taskDate}</h2> <h2>{props.taskTime}</h2>
      <Box
        width="20%"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >

        <Button
          id={props.id}
          onClick={props.handleOnEditTask}
          variant="contained"
          color="primary"
          startIcon={<EditIcon />}
        >
          Edytuj
      </Button>
        <Button
          id={props.id}
          onClick={props.handleOnDeleteTask}
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          Usuń
      </Button>
      </Box >
    </Box >
  );
};
export default Todo;
