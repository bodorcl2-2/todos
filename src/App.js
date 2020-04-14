import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      taskName: "pobudka",
      taskDate: "2020-04-09",
      taskHour: 8,
      taskMinutes: 30,
    },
  ]);
  const [newTask, setNewTask] = useState({
    id: null,
    taskName: "",
    taskDate: "",
    taskHour: null,
    taskMinutes: null,
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
    setNewTask((prevState) => [...prevState, [id]:])
    setTasks((prevState) => [...prevState, newTask]);
  };

  const handleOnChange = ({ target: { name, value } }) => {
    console.log(name, value);
    setNewTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // const today = new Date();
    // console.log(today)
    // const dayNow = today.getDate();
    // console.log(typeof (dayNow))
    // console.log(e.target.value < "2020-04-09" ? "wcześniej" : "później")
  };

  return (
    <div className="App">
      {console.log(tasks)}
      {
        // tasks.sort((a, b) => a.taskHour + b.taskHour).sort((a, b) => a.taskMinutes - b.taskMinutes).map((item, index)
        //nie działa sortowanie po godzinie i minutach

        tasks
          .sort((a) => a.taskName)
          .map((item, index) => (
            <Todo
              key={index}
              id={item.id}
              taskName={item.taskName}
              taskDate={item.taskDate}
              taskHour={item.taskHour}
              taskMinutes={item.taskMinutes}
              handleOnDeleteTask={handleOnDeleteTask}
            />
          ))
      }
      <TodoForm
        handleOnAddTask={handleOnAddTask}
        handleOnChange={handleOnChange}
      />
    </div>
  );
}

export default App;
