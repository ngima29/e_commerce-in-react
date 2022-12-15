import {API} from '../../config'
import { authenticate } from '../auth/api'

export const addcategory = (token,category_name)=>{
    return fetch(`${API}/postcategory`,{
        method:"POST",
        headers:{
            Accept:'application/json',
            authenticate:'Bearer ${token'
        },
        body:JSON.stringify(category_name)
    })
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))
    
}
// show product
export const allcategory = ()=>{
    return fetch(`${API}/categorylist`,{
        method:"GET"
    })
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))
}

// add product
export const addproduct = (token,product)=>{
    return fetch(`${API}/postproduct`,{
        method:"POST",
        headers:{
            Accept:'application/json',
            authenticate:'Bearer ${token'
        },
        body:product
    })
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))
    
}