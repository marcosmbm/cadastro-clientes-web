import React from 'react'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import Home from '../pages/Dashboard/Home';

export default function RoutesApp() {
  return (
   <BrowserRouter>
        <Routes>
            <Route
                path='/'
                element={<SignIn/>}
            />

            <Route
                path='/register'
                element={<SignUp/>}
            />

            <Route
                path='/dashboard'
                element={<Home/>}
            />
        </Routes>
   </BrowserRouter>
  );
}