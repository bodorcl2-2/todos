import React, { useState, useEffect, createContext } from 'react';
import firebase from '../utils/Firebase'
// import { useHistory } from "react-router-dom";

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

    useEffect(() => {
        localStorage.setItem("my-todo", JSON.stringify(tasks))
    })

    const handleOnDeleteTask = (e) => {

        const docId = e.currentTarget.id
        firebase
            .firestore()
            .collection('todos')
            .doc(docId).delete()

    };

    const handleOnAddTask = (newTask) => {

        firebase
            .firestore()
            .collection('todos')
            .add(newTask)
    };

    const handleOnUpdateTask = (task) => {

        firebase
            .firestore()
            .collection("todos")
            .doc(task.id)
            .set(
                task
            )

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