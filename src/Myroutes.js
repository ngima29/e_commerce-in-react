import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AdminRoute from './page/auth/AdminRoute'
import EmailConfirm from './page/auth/EmailConfirm'
import PrivateRouter from './page/auth/PrivateRouter'
import UserProfile from './page/auth/UserProfile'
import Home from './page/Home'
import Signin from './page/Signin'
import Signup from './page/Signup'
function Myroutes() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/signin' element={<Signin />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/confirmation/:params' element={<EmailConfirm />}/>

       {/* private router */}

       <Route path='/' element={<PrivateRouter/>} />
       <Route path='/user/profile' element={<UserProfile />} />
        {/* admin */}
        <Route path='/' element={<AdminRoute/>}/> 
        </Routes>
    </Router>
  )
}

export default Myroutes