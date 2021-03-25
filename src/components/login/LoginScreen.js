import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

const LoginScreen = () => {

    const { dispatch } = useContext( AuthContext );

    const history = useHistory();

    const lastPath = localStorage.getItem('lastPath') || '/';
    const lastSearch= localStorage.getItem('lastSearch');

    const handleLogin = () => {

        dispatch({
            type: types.login,
            payload: {
                name: "Javier"
            }
        })
        
        history.replace(lastPath + lastSearch);
    }


    return (
        <div className="container m-5">
            <h1>LoginScreen</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}

export default LoginScreen
