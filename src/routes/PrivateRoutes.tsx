import React from 'react'; 
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps{
    children: JSX.Element,
    isPrivate?: boolean
}

export default function PrivateRoute({children, isPrivate}: PrivateRouteProps) {

    const isAuthenticated = localStorage.getItem('@cadastro_clientes');

    if(isAuthenticated && !isPrivate){
        return <Navigate to={'/dashboard'}/>;
    }

    if(!isAuthenticated && isPrivate){
        return <Navigate to={'/'}/>;
    }
    

  return children
}