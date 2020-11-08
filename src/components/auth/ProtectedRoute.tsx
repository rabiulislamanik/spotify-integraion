import React,{useContext} from 'react';
import {
    Route, 
    Redirect,
    RouteProps,
    RouteComponentProps
} from "react-router-dom";
import {AuthContext} from '../../contexts/AuthContext';

function ProtectedRoute(props:RouteProps){
    const authContext = useContext(AuthContext);
    const isLoggedIn = authContext.user?.access_token !== undefined;
    console.log('isLoggedIn:',isLoggedIn);
    return (
        <Route render={(compProps: RouteComponentProps) => {
            if(!isLoggedIn) {
                return <Redirect to='/' />
            } 

            if(props.component) {
                return React.createElement(props.component);
            }
            if(props.render) {
                return props.render(compProps);
            } 
        }} />
    );
}

export default ProtectedRoute;
