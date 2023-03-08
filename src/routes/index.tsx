import React from 'react'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import Home from '../pages/Dashboard/Home';

import PrivateRoute from './PrivateRoutes';

export default function RoutesApp() {
  return (
   <BrowserRouter>
        <Routes>
            <Route
                path='/'
                element={
                    <PrivateRoute>
                        <SignIn/>
                    </PrivateRoute>
                }
            />

            <Route
                path='/register'
                element={
                    <PrivateRoute>
                        <SignUp/>
                    </PrivateRoute>
                }
            />

            <Route
                path='/dashboard'
                element={
                    <PrivateRoute isPrivate>
                        <Home/>
                    </PrivateRoute>
                }
            />
        </Routes>
   </BrowserRouter>
  );
}