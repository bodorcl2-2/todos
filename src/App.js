import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.js";
import TodoContextProvider from "./context/TodoContext";
import DataToFormContextProvider from "./context/DataToFormContext";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

import RouteMain from "./routeComponent/RouteMain"
import RouteEdit from "./routeComponent/RouteEdit"
import RouteFilter from "./routeComponent/RouteFilter"

// import FilterList from "./components/FilterList";
// import List from "./components/List";
// import AddTodo from "./components/AddTodo";
// import EditForm from "./components/EditForm";
// import Logout from "./components/Logout";


function App() {

  return (
    <AuthProvider>
      <TodoContextProvider>
        <DataToFormContextProvider>
          <Router>
            <div>
              <Switch>
                <PrivateRoute exact path="/" component={RouteMain} />
                <PrivateRoute exact path="/filter/:filter" component={RouteFilter} />
                <PrivateRoute exact path="/edit/:id" component={RouteEdit} />
              </Switch>
              <Route exact path="/login">
                <Login />
              </Route>
            </div>
          </Router>
        </DataToFormContextProvider>
      </TodoContextProvider>
    </AuthProvider>
  );
}

export default App;