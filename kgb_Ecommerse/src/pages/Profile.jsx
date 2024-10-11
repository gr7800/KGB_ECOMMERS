
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut, userData } from '../redux/slices/authSlice';
import defaultProfile from "../assets/DefaultProfile.jpg";

const Profile = () => {
  const dispatch = useDispatch()
  const {token, user} = useSelector((state)=>state.auth) 


  function handleLogout(){
    dispatch(logOut())
  }


  
  return (
    <div className="w-full  flex  justify-center bg-pink-100 text-rose-900 py-10 px-10">
      <div className="rounded-lg shadow-lg shadow-rose-900 p-8 max-w-sm w-full text-center my-auto bg-rose-300">
        <img
          src={defaultProfile}
          alt="Profile Picture"
          className="w-25 h-25 rounded-full mx-auto mb-4 border-4 border-rose-400 shadow-md shadow-rose-900"
        />
        <h2 className="text-2xl font-semibold mb-2">{user?.firstname}{" "}{user?.lastname}</h2>
        <p className="text-sm text-rose-500">{user?.email}</p>
        <p className="text-sm text-rose-500"><b>Gender</b> : {user?.gender}</p>
        <p className="text-sm text-rose-500"><b>Role</b> : {user?.role}</p>
        <div className="mt-4 flex justify-center gap-4">
          <button onClick={handleLogout} className="bg-pink-500 text-white rounded-lg px-4 py-2 transition hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-rose-100 shadow-md shadow-rose-500">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
