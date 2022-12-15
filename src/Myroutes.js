import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AdminRoute from './page/auth/AdminRoute'
import EmailConfirm from './page/auth/EmailConfirm'
import PrivateRouter from './page/auth/PrivateRouter'
import UserProfile from './page/auth/UserProfile'
import ForgatePassword from './page/ForgatePassword'
import Home from './page/Home'
import ResetPassword from './page/ResetPassword'
import Signin from './page/Signin'
import Signup from './page/Signup'
import Slider from '../src/page/Admin/Sidebar'
import AddCategory from './page/Admin/AddCategory'
import AddProduct from './page/Admin/AddProduct'
function Myroutes() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/signin' element={<Signin />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/confirmation/:params' element={<EmailConfirm />}/>
            <Route path='/forgate/password' element={<ForgatePassword/>}/>
            <Route path='/resetpassword/:params' element={<ResetPassword/>}/>
       {/* private router */}

       <Route path='/' element={<PrivateRouter/>} />
       <Route path='/user/profile' element={<UserProfile />} />
        {/* admin */}
        <Route path='/' element={<AdminRoute/>}/> 
        <Route path='/admin/dashboard' element={<Slider/>}/>
        <Route path='/admin/dashboard/addcategory' element={<AddCategory/>}/>
        <Route path='/admin/dashboard/addproduct' element={<AddProduct/>}/>
        </Routes>
        
    </Router>
  )
}

export default Myroutes