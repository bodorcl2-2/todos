import React, { useState, useEffect, createContext } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        // {
        //     id: "",
        //     taskGroup: "",
        //     taskName: "",
        //     taskDate: "",
        //     taskTime: ""
        // },
    ]);

    useEffect(() => {
        const data = localStorage.getItem("my-todo");
        if (data) {
            setTasks(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("my-todo", JSON.stringify(tasks))
    })

    const handleOnDeleteTask = (e) => {
        let tasks1 = [...tasks];
        tasks1 = tasks1.filter((task) => task.id !== e.currentTarget.id);
        // tasks1 = tasks1.sort((a, b) => a.hour - b.hour).filter(task => task.id !== e.target.id)
        // tasks1.splice(e.target.id, 1)
        setTasks(tasks1);
    };

    const handleOnAddTask = (newTask) => {

        setTasks((prevState) => [...prevState, newTask]);

    };

    // const settingEditTask = (e) => {

    //   const task1 = tasks.filter((task) => task.id === e.currentTarget.id);
    //   console.log(task1[0]);
    //   setEditTask(task1[0]);
    //   console.log(window.location)
    //   // window.location.href = `${window.location}bla/jhkjhkj.html`;
    //   // window.history.back()
    // }

    const handleOnUpdateTask = (editTask) => {
        console.log(editTask)

    }

    return (
        <TodoContext.Provider value={{ tasks, handleOnUpdateTask, handleOnAddTask, handleOnDeleteTask }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoContextProvider;