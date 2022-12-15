import React,{useState} from 'react'
import {API} from '../config'
import Header from '../componentc/Header'
import { useParams } from 'react-router-dom'

const ResetPassword = () => {
    const {params} = useParams()
    const [values, setValues] = useState({
        password:"",
        error:'',
        success:false
    })

    const{password, error, success} = values

    const handleChange=name=>event=>{
        setValues({...values, error:false, [name]:event.target.value})
       
    }

    const handleSubmit =e=>{
        e.preventDefault()
        setValues({...values, error:false})
        const token=params
        //Reset password
       
        fetch(`${API}/resetpassword/${token}`,{
            method:"PUT",
            headers:{
                Accept:"application/json",
                'content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                setValues({...values, error:data.error, success:false})
            }else{
                setValues({...values,error:'', password:'', success:true})
            }
        })
        .catch(err=>console.log(err))
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
     <span>your password  has been reset successfully</span>
    </div> 
  )

  return (
    <>
    <Header></Header>
    <div className="col-md-7 mt-4 mb-3 p-3 shadow-lg">
        <div className="container" >
        <div className="d-flex justify-content-center">
                <form>
                    <h2 className='text-muted text-center'>Password Rest Form</h2>
                {showError()}
                    {showSuccess()}
                    <div className="col-12 mb-3">
                        <label htmlFor="pwd">Password</label>
                        <input type="password"  id="pwd" placeholder="*********" className="form-control" onChange={handleChange(password)} value={password}  />
                    </div>
                    <div className="col-6 mb-3">
                        <button className='btn btn-primary form-control'  onClick={handleSubmit}>Reset  Password</button>    
                    </div>

                </form>
            </div>
        </div>
    </div>


    </>
  )
}

export default ResetPassword