import { Spinner } from 'flowbite-react';
import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading){
        <h2 className='text-5xl text-center font-semibold'>Loading... <br /> <Spinner aria-label="Default status example" /></h2>
    }
    if(!user){
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    return children;
    
};

export default PrivateRoute;