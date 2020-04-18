import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      taskGroup: "2a",
      taskName: "luzik",
      taskDate: "2020-04-09",
      taskTime: "08:00",
    },
  ]);
  const [newTask, setNewTask] = useState({
    id: "",
    taskGroup: "2a",
    taskName: "luzik",
    taskDate: "2020-04-09",
    taskTime: "09:00",
  });

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
    tasks1 = tasks1.filter((task) => task.id !== e.target.id);
    // tasks1 = tasks1.sort((a, b) => a.hour - b.hour).filter(task => task.id != e.target.id)
    // tasks1.splice(e.target.id, 1)
    setTasks(tasks1);
  };

  const handleOnAddTask = (e) => {
    e.preventDefault();
    setNewTask((prevState) => ({

      newTask: Object.assign(prevState, { id: uuidv4() }),
    }));
    console.log(newTask)
    setTasks((prevState) => [...prevState, newTask]);
    //   setNewTask({
    //     id: "",
    //     taskName: "",
    //     taskDate: "",
    //     taskTime: "null",
    //   });
  };

  const handleOnEditTask = (e) => {
    e.preventDefault();
    const editTask = tasks.filter((task) => task.id === e.target.id);
    setNewTask(editTask);
    console.log(newTask)
  }

  const handleOnChange = ({ target: { name, value } }) => {
    console.log(name, value)
    setNewTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(newTask)
  };

  return (
    <div className="App">
      {
        tasks
          .sort((a) => a.taskName)
          .map((item) => (
            <Todo
              key={item.id}
              id={item.id}
              taskGroup={item.taskGroup}
              taskName={item.taskName}
              taskDate={item.taskDate}
              taskTime={item.taskTime}
              handleOnDeleteTask={handleOnDeleteTask}
              handleOnEditTask={handleOnEditTask}
            />
          ))
      }
      <TodoForm
        handleOnAddTask={handleOnAddTask}
        handleOnChange={handleOnChange}
        newTask={newTask}
      />
    </div>
  );
}

export default App;
