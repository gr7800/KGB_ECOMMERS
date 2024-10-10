import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userData } from '../redux/slices/authSlice'

const Profile = () => {
  const dispatch = useDispatch()
  const {token, user} = useSelector((state)=>state.auth) 

  useEffect(()=>{
    dispatch(userData(token))
  },[])
  
  return (
    <div>Profile</div>
  )
}

export default Profile