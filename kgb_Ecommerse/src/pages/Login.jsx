import React, { useState } from 'react';

const Login = () => {
    return (
        <div className="font-sans text-[#fa7fab] antialiased bg-[#fae9e6] min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div>
                <h2 className="font-bold text-[#ff006c] text-3xl">
                    <span className="bg-[#ff006c] text-white px-2 rounded-md">KGB</span> Ecommerce
                </h2>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <form>
                    <div className="py-8 text-center">
                        <span className="text-2xl font-semibold text-[#ff006c]">Log In</span>
                    </div>

                    <div>
                        <label className="block font-medium text-sm text-[#fa7fab]" htmlFor="email">Email</label>
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] focus:ring-2 focus:ring-[#ff006c] transition duration-200"
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block font-medium text-sm text-[#fa7fab]" htmlFor="password">Password</label>
                        <div className="relative">
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                className='w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] focus:ring-2 focus:ring-[#ff006c] transition duration-200'
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <button className='p-4 text-white hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#ff006c]'>
                            SIGN IN
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
