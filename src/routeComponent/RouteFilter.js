import React from 'react'
import FilterList from '../components/FilterList'
import AddTodo from '../components/AddTodo'
import Logout from '../components/Logout'

const RouteEdit = () => {
    return (
        <>
            <Logout />
            <FilterList />
            <AddTodo />
        </>
    );
}

export default RouteEdit;