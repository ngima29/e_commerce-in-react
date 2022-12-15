import React, {useState, useEffect} from 'react'
import { isAuthenticated } from '../auth/api'
import { addproduct, allcategory } from './apiindex'
import Sidebar from './Sidebar'


const AddProduct = () => {
    const {token} = isAuthenticated()
    const [values, setValues] = useState({
        product_name:"",
        produtc_price:" ",
        countInStock:" ",
        product_description: " ",
        categories:[],
        category: "",
        product_image:" ",
        error: '',
        success:"",
        FormData: " "
    })

    const {product_name,produtc_price,countInStock, product_description,categories,category,product_image,error,success,FormData} = values
  
  // load categories and set form data

  const init = ()=>{
    allcategory()
    .then(data=>{
        if(data.error){
            setValues({...values, error:data.error})
        }else{
            setValues({...values, categories:data, formData:new formData})
        }
    })
  }

  useEffect(()=>{
    init()
  },[])

  const handleChange = name=>event=>{
    const value=name === 'product_image'? event.target.files[0]:event.target.value
    formData.set(name,value)
    setValues({...values, [name]:value})
  }
  const handleSubmit=e=>{
    e.preventDefault()
    setValues({...values, error:false})
    addproduct(token,formData)
    .then(data=>{
        if(data.error){
            set({...values, error:data.error})
        }else{
            setValues({...values,product_name:"",produtc_price:"",countInStock:"", product_description:"",categories:"",category:"",product_image:"",error:false,success:true})
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
     <span>product has beed added</span>
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
            <h1 className='text-center text-mutued'>Add Product</h1>
            {showError()}
            {showSuccess()}
                <div className='col-12 mb-3'>
                <label htmlFor='product_name'>Product Name</label>
                <input type="text" id='product_name'
                 className='form-control' onChange={handleChange(product_name)} value={product_name}/>
                </div>
                <div className='col-12 mb-3'>
                <label htmlFor='product_price'>Product Price</label>
                <input type="number" id='product_price'
                 className='form-control' onChange={handleChange(product_price)} value={product_price}/>
                </div>

                <div className='col-12 mb-3'>
                <label htmlFor='stock'>Stock Quantity </label>
                <input type="number" id='stock'
                 className='form-control' onChange={handleChange(countInStock)} value={countInStock}/>
                </div>

                <div className='col-12 mb-3'>
                <label htmlFor='stock'>Stock Quantity </label>
                <input type="number" id='stock'
                 className='form-control' onChange={handleChange(countInStock)} value={countInStock}/>
                </div>

                <div className='col-12 mb-3'>
                <label htmlFor='product_desc'>Product Description </label>
                <textarea className='form-control' id="product_desc" onChange={handleChange(product_description)} value={product_description}>
                </textarea>  
                </div>

                <div className='col-12 mb-3'>
                <label htmlFor='product_image'>Product Image </label>
                <input type="file" id='product_image' className='form-control' onChange={handleChange(product_image)} />
                </div>

                <div className='col-12 mb-3'>
                <label htmlFor='category'>Category</label>
                <select  id='category'
                 className='form-control' onChange={handleChange(category)}>
                    {
                        categories && categories.map((c,i)=>{
                            <option key={i} value={c._id}>{c.category_name}</option>
                        })
                    }
                </select>
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

export default AddProduct