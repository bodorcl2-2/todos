import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { TodoContext } from "../context/TodoContext";
import List from "./List";
import AddTodo from "./AddTodo";
import EditForm from "./EditForm";

const RouteComp = () => {

    const { tasks, handleOnUpdateTask, handleOnAddTask, handleOnDeleteTask } = useContext(TodoContext);

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <List
                            tasks={tasks}
                            handleOnDeleteTask={handleOnDeleteTask}
                        // settingEditTask={settingEditTask}
                        />
                    </Route>
                    <Route path="/add">
                        <AddTodo
                            handleOnAddTask={handleOnAddTask}
                        />
                    </Route>
                    <Route exact path="/edit:id">
                        <EditForm
                            handleOnUpdateTask={handleOnUpdateTask}
                        // editTask={editTask}
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default RouteComp;