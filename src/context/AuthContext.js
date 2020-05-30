import React, { useEffect, useState, createContext } from "react";
import firebase from '../utils/Firebase';
import Loader from '../components/Loader';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
            setPending(false)
        });
    }, []);
    console.log(currentUser)
    if (pending) {
        return <Loader />
    }
    return (
        <AuthContext.Provider value={{ currentUser }} >
            {children}
        </AuthContext.Provider>
    );
}; 