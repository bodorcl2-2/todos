import React from "react";
import TodoContextProvider from "./context/TodoContext";
import RouteComp from './components/RouteComp'
import DataToFormContextProvider from "./context/DataToFormContext";
import "./App.css";

function App() {

  return (
    <TodoContextProvider>
      <DataToFormContextProvider>
        <RouteComp />
      </DataToFormContextProvider>
    </TodoContextProvider>
  );
}

export default App;
