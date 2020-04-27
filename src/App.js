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

  const handleOnAddTask = (newTask) => {


    setTasks((prevState) => [...prevState, newTask]);

  };

  const handleOnEditTask = (e) => {
    e.preventDefault();
    const editTask = tasks.filter((task) => task.id === e.target.id);
    setTasks(editTask)
  }



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

      />
    </div>
  );
}

export default App;
