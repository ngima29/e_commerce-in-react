import { API } from '../../config'

// for sign up `${API}/register`,

export const signup=user=>{
return fetch(`${API}/register`,{
    method:"POST",
    headers:{
        Accept:"application/json",
        "content-Type":"application/json"
    },
    body:JSON.stringify(user)
})
.then(res=>{
    return res.json()
})
.catch(err=>console.log(err))
}


// for signin up `${API}/register`,

export const signin=user=>{
    return fetch(`${API}/signin`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))
    }

    // authenticate
    export const authenticate=(data,next)=>{
        if(typeof window !== 'undefined'){
            localStorage.setItem('jwt',JSON.stringify(data))
            next()
        }
    }
    // redirect user buy role id if authenticate

    export const isAuthenticated=()=>{
        if(typeof window === 'undefined'){
            return false
        }
        if(localStorage.getItem('jwt')){
            return JSON.parse(localStorage.getItem('jwt'))

        }else{
            return false
        }
    }
/// signout logout

export const signout=next=>{
    if(typeof window !== 'undefined'){
        localStorage.removeItem('jwt',JSON.stringify('jwt'))
        next()
        return fetch(`${API}/signout`,{
            method:"POST"
        })
        .then(res=>{
            console.log(res);
        })
        .catch(err=>console.log(err))
    }
}