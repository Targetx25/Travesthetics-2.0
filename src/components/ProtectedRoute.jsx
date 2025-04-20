import React from 'react'
import { Navigate } from 'react-router'
import { useCity } from './CityContext';

function ProtectedRoute({children , isAllowed}) {
    const {citx} = useCity();
    if(citx == ""){
        return <Navigate to="/" replace={true} />
    }else{
        return children;
    }
   

  
}

export default ProtectedRoute
