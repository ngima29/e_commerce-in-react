import React,{useState} from 'react'
import Sidebar from './Sidebar'
import { isAuthenticated } from '../auth/api'
import { addcategory } from './apiindex'

const AddCategory = () => {
    const [category_name, setCategory]= useState()
    const [error, setError] = useState()
    const[success, setSuccess]= useState(false)

    const {token} = isAuthenticated()


    const handleSubmit =e=>{
        e.preventDefault();
        setError('')
        setSuccess(false)
        addcategory(token, {category_name})
        .then(data=>{
            if(data.error){
                setError(data.error)
            }else{
                setError('')
                setSuccess('')
                setCategory('')
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
   <div className='container-fluid'>
   <div className='row d-flex justify-content-between'>
    <div className='col-md-4'>
    <Sidebar/> 
    </div>
        <div className='col-md-6  mt-5'>
            <form className='shadow-lg p3'> 
            {showError()}
                    {showSuccess()}
                <div className='col-12 mb-3'>
                <label htmlFor='category_name'>category Name</label>
                <input type="text" id='category_name'
                 placeholder='category name' className='form-control' onChange={(e)=>setCategory(e.target.value)} value={category_name}/>
                </div>
                <div className='col-md-4'>
                    <button className='btn btn-primary' onClick={handleSubmit}> add</button>
                </div>
            </form>

        </div>
    </div>
   </div>
 
    </>
  )
}

export default AddCategory