import React, { useEffect, useState } from 'react'
import { doCreateUserWithEmailIdAndPassword } from '../firebase'
import { updateProfile } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig'

const Register = () => {
    const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password1, setPassword1] = useState("")
    const [username, setUsername] = useState("")

    async function handleSignup(e) {
        e.preventDefault()
        const userCredentials = await doCreateUserWithEmailIdAndPassword(email,password) 
        const user = userCredentials.user
        await updateProfile(user,{username,name})
        await setDoc(doc(db,"users", user.uid),{uid:user.uid})
        alert("User created")

    }


    return (
        <div className="min-h-screen bg-light-pink-1 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-[#ff006c]">
                    Create a new account
                </h2>
                <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
                    Or {" "}
                    <span
                        className="font-medium text-rose-500 hover:text-rose-600 focus:outline-none focus:underline transition ease-in-out duration-150">
                        login to your account
                    </span>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={handleSignup} action="#">
                        <div>
                            <label for="email" className="block text-sm font-medium leading-5  text-[#fa7fab]">Name</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input value={name} onChange={(e) => setname(e.target.value)} id="name" name="name" placeholder="John Doe" type="text" required=""
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                            clip-rule="evenodd">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <label for="username" className="block text-sm font-medium leading-5 text-[#fa7fab]">Username</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input value={username} onChange={(e) => setUsername(e.target.value)} id="email" name="email" placeholder="exampleuser" type="text"
                                    required=""
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <label for="email" className="block text-sm font-medium leading-5 text-[#fa7fab]">
                                Email address
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" placeholder="user@example.com" type="email"
                                    required=""
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <label for="password" className="block text-sm font-medium leading-5 text-[#fa7fab]">
                                Password
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" required=""
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label for="password_confirmation" className="block text-sm font-medium leading-5 text-[#fa7fab]">
                                Confirm Password
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input value={password1} onChange={(e) => setPassword1(e.target.value)} id="password_confirmation" name="password_confirmation" type="password" required=""
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>
                        </div>

                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                                <button type="submit"
                                    className="w-full text-white hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-500 dark:focus:ring-rose-500 bg-[#ff006c]">
                                    Create account
                                </button>
                            </span>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Register