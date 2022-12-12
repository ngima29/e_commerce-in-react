import React,{useState} from 'react'
import Header from '../componentc/Header'
import Footer from '../componentc/Footer'
import {Link, useNavigate, Navigate } from 'react-router-dom'
import {signin, authenticate, isAuthenticated} from './auth/api'




const Signin =()=> {
    const navigate = useNavigate()
    const{user}= isAuthenticated()

    const[values, setValues] = useState({
        email:"",
        password:"",
        error:'',
        redirectTo:false
    })
    const{email, password, error, redirectTo}=values
    const handleChange=name=>event=>{
        setValues({...user, error:false, [name]:event.target.value})
       
    }
    
    const handleSubmit =e=>{
        e.preventDefault()
        setValues({...StaticRange, error:false})
        //signin process
        signin({email,password})
        .then(data=>{
            if(data.error){
                setValues({...values, error:data.error, redirectTo:false})
            }else{
                authenticate(data,()=>{
                setValues({...values, redirectTo:true})
            })
            }
        })
    }
    // to show error message
    const showError=()=>(
       <div className='alert alert-danger' style={{ display:error?'':'none' }}>
        {error}
       </div> 
      )
      // to redirect user
      const redirectUser=()=>{
        const redirect= '/user/profile'
        if(redirectTo){
            if(user && user.role===1){
                return navigate('/admin/dashboard')
            }
        }
        if(user && user.role===0){
            return <Navigate to ={redirect}/>
        }
      }
        // to show success
    // const shoeSuccess=()=>(
        
    //     <div className='alert alert-success' style={{ display:success?" ":'none' }}>
    //     <span>user registration successful, verify your email before login</span>
    //    </div> 
    //  )
  return (
    <>
    <Header/>
    <div className="container" style={{ marginBottom: '200px'}}>
        <div className="d-flex justify-content-center">
            <div className="col-md-7 mt-4 mb-3 p-3 shadow-lg">
                <form>
                    {showError()}
                    {redirectUser()}
                    <div className="col-12 mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="example@gmail.com" className="form-control" onChange={handleChange(email)} value={email} />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="pass" id="password" placeholder="***********" className="form-control" onChange={handleChange(password)} value={password}/>
                    </div>

                    <div className="col-4 mb-3">
                        <button className="btn btn-primary form-control" onClick={handleSubmit}>Signin</button>
                    </div>
                    <div className="col-4 offset-md-8">
                       <a href="forgetpassword.html" className="text-decoration-none text-secondary">Forget Password?</a>
                    </div>

                </form>
            </div>
        </div>
    </div>
 
    <Footer/>
    </>
  )
}

export default Signin