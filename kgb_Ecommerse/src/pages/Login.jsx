import React from 'react'
import {  Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="font-sans text-gray-900 antialiased">
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-[#f8f4f3]">
                <div>
                        <h2 className="font-bold text-3xl">LOREM <span className="bg-[#f84525] text-white px-2 rounded-md">IPSUM</span></h2>
                </div>

                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <form>
                        <div className="py-8">
                            <center>
                                <span className="text-2xl font-semibold">Log In</span>
                            </center>
                        </div>

                        <div>
                            <label className="block font-medium text-sm text-gray-700" for="email" value="Email" />
                            <input type='email'
                                name='email'
                                placeholder='Email'
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]" />
                        </div>


                        <div className="mt-4">
                            <label className="block font-medium text-sm text-gray-700" for="password" value="Password" />
                            <div className="relative">
                                <input id="password" type="password" name="password" placeholder="Password" required className='w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]' />
                            </div>
                        </div>


                        <div className="flex items-center justify-end mt-4">
                            <a className="hover:underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Forgot your password?
                            </a>

                            <button className='ms-4 px-4 py-2 bg-[#f84525] border border-transparent rounded-md font-semibold text-xs text-white hover:bg-red-800 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out no-underline'>
                                SIGN IN
                            </button>
   
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login