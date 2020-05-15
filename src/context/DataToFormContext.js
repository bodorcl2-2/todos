import React, { useState, createContext } from 'react';

export const DataToFormContext = createContext();

const DataToFormContextProvider = (props) => {

    const [dataToForm, setdataToForm] = useState(
        {
            tasksName: ["powtórka", "sprawdzian", "kartkówka", "pytanie", "luzik"],
            groupsName: ["1a", "1b", "1c", "2a", "2b", "2c", "3a", "3b", "3c"]
        }
    );

    return (
        <DataToFormContext.Provider value={{ ...dataToForm }}>
            {props.children}
        </DataToFormContext.Provider>
    );
}

export default DataToFormContextProvider;