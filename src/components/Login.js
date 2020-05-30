import React, { useCallback, useContext } from "react";
import { useHistory, Redirect } from "react-router";
import firebase from '../utils/Firebase';
import { AuthContext } from "../context/AuthContext";
const Login = () => {
    const history = useHistory()
    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
            await firebase
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/" />;
        // return history.push(`/`)
    }
    return (
        <div className="loginContainer">
            <form className="loginForm" onSubmit={handleLogin}>
                <h1>Belfer todo</h1>
                <label htmlFor="email"> email:</label>
                <input name="email" id="email" type="email" placeholder="Email" />

                <label htmlFor="password">password:</label>
                <input name="password" id="password" type="password" placeholder="Password" />

                <button type="submit">Zaloguj</button>
            </form>
        </div>
    );
};
// export default withRouter(Login); 
export default Login; 