import React, { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import './PrivateRoute.css'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    // console.log(location);

    if (loading) {
        return <div class="loader">
            <div class="loader-circle loader-circle-1"></div>
        </div>
    }
    if (user) {
        return children;
    }
};

export default PrivateRoute;