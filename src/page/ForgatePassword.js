import React,{useState} from 'react'
import Header from '../componentc/Header'
import { forgetPassword } from './auth/api'


const ForgatePassword = () => {
    const[values, setValues]=useState({
        email:'',
        error:" ",
        success:false
    })
    const{email,error,success}=values

    const handleChange=name=>event=>{
        setValues({...values, error:false, [name]:event.target.value})
       
    }

    const handleSubmit =e=>{
        e.preventDefault()
        setValues({...values, error:false})
        //forgate password
        forgetPassword({email})
        .then(data=>{
            if(data.error){
                setValues({...values, error:data.error, success:false})
            }else{
                setValues({...values,email:'', error:'', success:true})
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
     <span>Reset password link has been sent to  your email</span>
    </div> 
  )

  return (
    <>
    <Header/>

    
        <div className="col-md-7 mt-4 mb-3 p-3 shadow-lg">
        <div className="container" >
        <div className="d-flex justify-content-center">
                <form>
                {showError()}
                    {showSuccess()}
                    <div className="col-12 mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="example@gmail.com" className="form-control" onChange={handleChange('email')} value={email}  />
                    </div>
                    <div className="col-6 mb-3">
                        <button className='btn btn-primary form-control'  onClick={handleSubmit}>Send Forgate Password</button>    
                    </div>

                </form>
            </div>
        </div>
    </div>

    </>
  )
}

export default ForgatePassword