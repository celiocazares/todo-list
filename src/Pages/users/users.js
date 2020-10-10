import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "../../actions/usersActions"

const Users = () => {
    const dispatch = useDispatch();
    const usersReducer = useSelector(props => props.usersReducer);

    const { usersList } = usersReducer

    // useEffect(() => {
    //     dispatch(usersActions.fetchUsers())
    // }, []);

    return (
        <>
            <h1>Users</h1>
            <ul>
                {usersList && usersList.length > 0 && usersList.map(user => <li key={user}>{user}</li>)}
            </ul>
        </>
    )
}

export default Users
