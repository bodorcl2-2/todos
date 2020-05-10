import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import List from "./List";
import AddTodo from "./AddTodo";
import EditForm from "./EditForm";

const RouteComp = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <List />
                    </Route>
                    <Route path="/add">
                        <AddTodo />
                    </Route>
                    <Route exact path="/edit:id">
                        <EditForm />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default RouteComp;