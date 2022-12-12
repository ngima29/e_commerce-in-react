import React,{useState, useEffect} from "react";
import {API} from '../../config'
import { useParams  } from "react-router-dom";
import Header from "../../componentc/Header";

const EmailConfirm = () => {
    const params= useParams()
    const [values,setValues] = useState({
        error:" ",
        success:false
    })
    const {error,success} =values

    useEffect(()=>{
        const token = params
        fetch(`${API}/confirmation/${token}`,{
            method:"POST",
            headers:{
                Accept:"application/json",
                "content-Type":"application/json"
            },
            body:JSON.stringify()
        })
        .then(res=>{
            return res.json(values)
        })
        .then(data=>{
            if(data.error){
                setValues({...values, error:data.error, success:false})
            }else{
                setValues({...values, error:'', success:true})
            }
        })
        .catch(err=>console.log(err))   
    },[params])

        // to show error message
    const showError=()=>(
        <div className='alert alert-danger' style={{ display:error?'':'none' }}>
         {error}
        </div> 
       )
         // to show success
     const shoeSuccess=()=>(
         
         <div className='alert alert-success' style={{ display:success?" ":'none' }}>
         <span>user registration successful, verify your email before login</span>
        </div> 
      )

  return (
    <>
    <Header/>
                {showError()}
                    {shoeSuccess()}
    </>
  )
}

export default EmailConfirm


