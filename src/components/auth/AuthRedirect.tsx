import React,{useEffect,useContext} from 'react';
import {extractAuthResponse} from '../../utils/authUtils';
import { UserAuth } from "../../custom-types/user";
import {AuthContext} from '../../contexts/AuthContext';
import {useHistory } from 'react-router-dom';
const defaultUser:UserAuth={access_token:""};

//get auth datas from spotify by extracting url hash and then cleanup the hash
const authResponse = extractAuthResponse(window.location.hash);
const access_token = authResponse.access_token;
const expires_in = authResponse.expires_in;
window.location.hash="";


function AuthHandler() {
    const authContext = useContext(AuthContext);
    const history = useHistory();
    //checking if access_token could be found from url hash fragment
    useEffect(() => {
        if (access_token) {
            localStorage.setItem("UserAuth",JSON.stringify({access_token:access_token}));
            authContext.setUser({access_token:access_token});
            console.log('authre:',access_token)
            history.push("/newreleases");
        }
      }, []);
    
    //let user know about error of authentintcation 
    return (
        <header className="App-header">
            <p>
                There was an error while trying to authenticate. Please login again.
            </p>
            <a
            className="App-link"
            href="/"
            >
                Go to Login page
            </a>
        </header>
    );
};

export default AuthHandler;