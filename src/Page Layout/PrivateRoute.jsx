import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Component/Auth-Component/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <p  className="loading loading-dots loading-sm flex justify-center p-4"></p>
    }
    else if(user){
        return children
    }
    return (
        <Navigate state={location.pathname} to='/signin'></Navigate>
    );
};

export default PrivateRoute;