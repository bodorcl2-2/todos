import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import List from "./components/List";
import AddTodo from "./components/AddTodo";
import EditForm from "./components/EditForm";
import TodoContextProvider from "./context/TodoContext";
import DataToFormContextProvider from "./context/DataToFormContext";
import "./App.css";

function App() {

  return (
    <TodoContextProvider>
      <DataToFormContextProvider>
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
      </DataToFormContextProvider>
    </TodoContextProvider>
  );
}

export default App;