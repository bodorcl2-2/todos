import React, { useContext } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { currentUser } = useContext(AuthContext);
    const history = useHistory()
    return (
        <Route
            {...rest}
            render={routeProps =>
                !!currentUser ? (
                    <RouteComponent {...routeProps} />
                ) : (
                        // <Redirect to={"/login"} />
                        history.push(`/login`)
                    )
            }
        />
    );
};
export default PrivateRoute 
