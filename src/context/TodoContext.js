import React, { useState, useEffect, createContext } from 'react';
import firebase from '../utils/Firebase'
import { useHistory } from "react-router-dom";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {

    const [tasks, setTasks] = useState([]);
    const [compare, setCompare] = useState("taskDate");
    const [sortingAsc, setSortingAsc] = useState("asc");

    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('todos')
            .onSnapshot(snapshot => {
                const newTasks = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setTasks(newTasks)
            })
        return () => unsubscribe()
    }, [])

    // useEffect(() => {
    //     const data = localStorage.getItem("my-todo");
    //     if (data) {
    //         setTasks(JSON.parse(data))
    //     }
    // }, [])

    useEffect(() => {
        localStorage.setItem("my-todo", JSON.stringify(tasks))
    })

    const handleOnDeleteTask = (e) => {
        let tasks1 = [...tasks];
        tasks1 = tasks1.filter((task) => task.id !== e.currentTarget.id);
        setTasks(tasks1);
    };

    const handleOnAddTask = (newTask) => {

        setTasks((prevState) => [...prevState, newTask]);

    };

    const handleOnUpdateTask = (task) => {
        const copy = [...tasks]
        const index = copy.findIndex(item => item.id === task.id);
        copy[index] = task;
        setTasks(copy)
    }

    const handleSortList = (e) => {
        const prevCompare = compare;
        setCompare(e.currentTarget.id);
        if (prevCompare === e.currentTarget.id) {
            setSortingAsc((sortingAsc === "asc") ? "desc" : "asc")
        } else {
            setSortingAsc("asc")
        }
    }

    const handleOnFilter = (e) => {
        const filter = e.currentTarget.dataset.group
    }

    return (
        <TodoContext.Provider value={{ tasks, compare, sortingAsc, handleOnUpdateTask, handleOnAddTask, handleOnDeleteTask, handleSortList, handleOnFilter }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoContextProvider;