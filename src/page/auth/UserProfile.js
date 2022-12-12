import React from 'react'
import Header from '../../componentc/Header'
import Footer from '../../componentc/Footer'
import {isAuthenticated} from './api';
const UserProfile = () => {
    const {user} = isAuthenticated
  return (
    <>
    <Header />
    <h1>{user.name}</h1>
    <Footer/>
    </>
  )
}

export default UserProfile