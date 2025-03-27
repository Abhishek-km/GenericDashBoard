import React, { use } from 'react'
import { useEffect } from 'react';
import { Navigate } from 'react-router';

export default function Logout() {

    useEffect(() => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }, []);
  return (
   <Navigate to="/login" />
  )
}
