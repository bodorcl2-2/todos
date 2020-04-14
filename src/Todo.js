import React from 'react';

const Todo = (props) => {
    return (

        <h1> {props.taskName} {props.taskDate} {props.taskHour < 10 ? ` 0${props.taskHour}` : props.taskHour}:{props.taskMinutes < 10 ? ` 0${props.taskMinutes}` : props.taskMinutes} <button id={props.index} onClick={props.handleOnDeleteTask}>Usuń</button></h1>
    )
}
export default Todo;