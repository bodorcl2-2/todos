import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import List from "./components/List";
import AddTodo from "./components/AddTodo";
import EditForm from "./components/EditForm";
import TodoContextProvider from "./context/TodoContext";
import DataToFormContextProvider from "./context/DataToFormContext";
import "./App.css";
import FilterList from "./components/FilterList";

function App() {

  return (
    <TodoContextProvider>
      <DataToFormContextProvider>
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <List />
                <AddTodo />
              </Route>
              <Route path="/filter/:filter">
                <FilterList />
              </Route>
              <Route exact path="/edit/:id">
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