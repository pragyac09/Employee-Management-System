import React,{useEffect, useState} from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

    const [username, setusername] = useState('')
    const data=props.data
  
    useEffect(()=>{
        if(!data){
        setusername('Admin')
    }else{
        setusername(data.firstName)
    }
    },[data])
    

    const logOutUser =()=>{
                localStorage.setItem('loggedInUser','')
                props.changeUser('')
                window.location.reload()
        }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>{username}👋</span></h1>
        <button onClick={logOutUser} className='bg-red-500 text-lg font-medium px-5 text-white rounded-small'>Log Out</button>
    </div>
  )
}

export default Header
