import React from 'react'
import EditForm from '../components/EditForm'
import AddTodo from '../components/AddTodo'
import Logout from '../components/Logout'

const RouteEdit = () => {
    return (
        <>
            <Logout />
            <EditForm />
            <AddTodo />
        </>
    );
}

export default RouteEdit;

