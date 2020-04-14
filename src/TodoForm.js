import React from 'react'


const TodoForm = (props) => {
    return (
        <form action="#" onSubmit={props.handleOnAddTask}>
            <label htmlFor="taskName">Zadanie:
            <input
                    type="text"
                    name="taskName"
                    id="taskName"
                    onChange={props.handleOnChange} />
            </label>
            <label htmlFor="taskDate">Data:
            <input
                    type="date"
                    name="taskDate"
                    id="taskDate"
                    onChange={props.handleOnChange} />
            </label>
            <label htmlFor="taskHour">Godzina:
            <input
                    type="number"
                    name="taskHour"
                    id="taskHour"
                    min="0"
                    max="24"
                    onChange={props.handleOnChange} />
            </label>
            <label htmlFor="taskMinutes">Minut:
            <input
                    type="number"
                    name="taskMinutes"
                    id="taskMinutes"
                    min="0"
                    max="50"
                    step="10"
                    onChange={props.handleOnChange} />
            </label>
            <button type="submit">Dodaj</button>
        </form>)
}
export default TodoForm;