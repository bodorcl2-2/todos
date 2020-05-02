import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import List from "./components/List";
import AddTodo from "./components/AddTodo";
import EditForm from "./components/EditForm";
// import { v4 as uuidv4 } from "uuid";

import "./App.css";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: "",
      taskGroup: "",
      taskName: "",
      taskDate: "",
      taskTime: ""
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


  const [editTask, setEditTask] = useState({
    id: "58fe8041-e50b-4db0-85e4-9f0c4a134f31",
    taskGroup: "1a",
    taskName: "pytanie",
    taskDate: "",
    taskTime: ""
  })


  const handleOnDeleteTask = (e) => {
    let tasks1 = [...tasks];
    tasks1 = tasks1.filter((task) => task.id !== e.currentTarget.id);
    // tasks1 = tasks1.sort((a, b) => a.hour - b.hour).filter(task => task.id != e.target.id)
    // tasks1.splice(e.target.id, 1)
    setTasks(tasks1);
  };

  const handleOnAddTask = (newTask) => {

    setTasks((prevState) => [...prevState, newTask]);

  };

  const settingEditTask = (e) => {

    const task1 = tasks.filter((task) => task.id === e.currentTarget.id);
    console.log(task1[0]);
    setEditTask(task1[0]);
    console.log(window.location)
    // window.location.href = `${window.location}bla/jhkjhkj.html`;
    // window.history.back()
  }
  const handleOnUpdateTask = (editTask) => {
    console.log(editTask)

  }

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <List
              tasks={tasks}
              handleOnDeleteTask={handleOnDeleteTask}
              settingEditTask={settingEditTask}
            />
          </Route>
          <Route path="/add">
            <AddTodo
              handleOnAddTask={handleOnAddTask}
            />
          </Route>
          <Route exact path="/edit">
            <EditForm
              handleOnUpdateTask={handleOnUpdateTask}
              editTask={editTask}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
