import React from 'react';
import DetailPage from '../page/DetailPage'
import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PrivateRoute = ({ authenticate }) => {


    return (
        authenticate == true ? <DetailPage /> : <Navigate to='/login' />
    )
}

export default PrivateRoute