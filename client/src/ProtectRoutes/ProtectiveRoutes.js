
import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectiveRoutes = ({ isAuthenticated , defaultPath='/' , children }) => {

    if(isAuthenticated) return children

    return <Navigate to={defaultPath} replace/>
  
}

export default ProtectiveRoutes