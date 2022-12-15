import React,{useState} from 'react'
import Header from '../componentc/Header'
import Footer from '../componentc/Footer'
import { signup } from './auth/api'
function Signup() {

    const [values,setValues]= useState({
        name:'',
        username:'',
        email:'',
        password:'',
        c_password:'',
        error:'',
        success:false
    })
    const{name,username,email,password,c_password,error,success}=values
    
    const handleChange=name=>event=>{
        setValues({...values, error:false, [name]:event.target.value})
       
    }
    const handleSubmit =e=>{
        e.preventDefault()
        setValues({...values, error:false})
        //signup
        signup({name,username,email,password})
        .then(data=>{
            if(data.error){
                setValues({...values, error:data.error, success:false})
            }else{
                setValues({...values, name:'',username:'',email:'',password:'',c_password:'', success:true})
            }
        })
    }
    // to show error message
    const showError=()=>(
       <div className='alert alert-danger' style={{ display:error?'':'none' }}>
        {error}
       </div> 
      )
        // to show success
    const showSuccess=()=>(
        
        <div className='alert alert-success' style={{ display:success?" ":'none' }}>
        <span>user registration successful, verify your email before login</span>
       </div> 
     )
    return (

    <>
    <Header/>
         <div className="container">
        <div className="d-flex justify-content-center">
            <div className="col-md-7 mt-4 mb-3 p-3 shadow-lg">
                <form>
                    {showError()}
                    {showSuccess()}
                    <div className="col-12 mb-3">
                        <label htmlFor="fname">Full Name</label>
                        <input type="text" name="fname" id="fname" placeholder="full Name" className="form-control" onChange={handleChange('name')} value={name} />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="lastname">Username</label>
                        <input type="text" name="username" id="uname" placeholder="User name" className="form-control"  onChange={handleChange('username')} value={username}/>
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="example@gmail.com" className="form-control" onChange={handleChange('email')} value={email} />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="pass" id="password" placeholder="***********" className="form-control" onChange={handleChange('password')} value={password} />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type="password" name="cpass" id="cpassword" placeholder="***********" className="form-control" onChange={handleChange('c_password')} value={c_password} />
                    </div>
                    <div className="col-6">
                        <button className="btn btn-primary form-control" onClick={handleSubmit}>Signup</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Signup