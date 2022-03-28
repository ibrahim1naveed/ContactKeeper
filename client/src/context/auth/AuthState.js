import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} 
    from '../types';

// Creating our initial state

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: false,
        loading: true,
        user: null,
        error: null
    };
    // state allows us to access anything in our state.
    // dispatch allows us to dispatch objects to the 'Reducer'.
    const [state, dispatch] = useReducer(authReducer, initialState);

    // All of our actions
    
    // load user

    // register user

    // login user

    // logout user
    
    // clear errors
    

    // RETURN OUR PROVIDER. The idea is to wrap our entire application with this context
    return (
        // Anything that we need to access from other components including actions and state need to go 
        // in value="" 
        <AuthContext.Provider 
        value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            user: state.user,
            error: state.error
            
           }}>
            { props.children }
        </AuthContext.Provider>
    )
};

export default AuthState;

