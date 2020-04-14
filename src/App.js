import React, { useState } from "react";
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
    taskGroup: "",
    taskName: "",
    taskDate: "",
    taskTime: "",
  });

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
    setTasks((prevState) => [...prevState, newTask]);
    setNewTask({
      id: "",
      taskName: "",
      taskDate: "",
      taskTime: "null",
    });
  };
  const handleOnChange = ({ target: { name, value } }) => {
    setNewTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      {
        // tasks.sort((a, b) => a.taskTime + b.taskTime).sort((a, b) => a.taskMinutes - b.taskMinutes).map((item, index)
        //nie działa sortowanie po godzinie i minutach

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
            />
          ))
      }
      <TodoForm
        handleOnAddTask={handleOnAddTask}
        handleOnChange={handleOnChange}
        newTask={newTask}
        // handleOnChangeDate={handleOnChangeDate}
      />
    </div>
  );
}

export default App;
