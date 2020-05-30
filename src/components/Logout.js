import React from 'react';
import firebase from '../utils/Firebase';

const Logout = () => {
    return (
        <section className="logoutContainer">
            <button className="logoutButton" onClick={() => firebase.auth().signOut()}>Wyloguj</button>
        </section>
    );
}

export default Logout;
