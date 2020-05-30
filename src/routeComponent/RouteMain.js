import React from 'react'
import List from '../components/List'
import AddTodo from '../components/AddTodo'
import Logout from '../components/Logout'

const RouteEdit = () => {
    return (
        <>
            <Logout />
            <List />
            <AddTodo />
        </>
    );
}

export default RouteEdit;