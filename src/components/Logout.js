import React from 'react';
import firebase from '../utils/Firebase';

const Logout = () => {
    return (
        <button onClick={() => firebase.auth().signOut()}>Sign out</button>
    );
}

export default Logout;
