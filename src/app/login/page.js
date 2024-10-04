"use client";
import Link from 'next/link'
import React, { useState } from 'react'

const Login = () => {
    const [credentials, setCredentials]= useState({ 
        email: "",
        password: "",
        name:""
    });
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };
    const onSubmit=(e)=>{
        e.preventDefault();    }  
      
  return (
    <div>
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        /> */}
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight  ">
          Log in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6  "
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="email"
                autoComplete="email"
                value={credentials.email}
                onChange={onChange}
                required
                className="block w-full rounded-md border-0 p-1.5   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6  "
              >
                Password
              </label>
              <div className="text-sm">
                <button
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                //   onClick={handleForgotPassword}
                >
                  Forgot password?
                </button>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                autoComplete="current-password"
                value={credentials.password}
                onChange={onChange}
                className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={onSubmit}
              className="flex w-full justify-center rounded-md bg-colors-customBlue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            href={"/register"}
            className="font-semibold leading-6 text-colors-customBlue
             hover:text-indigo-500 ml-1"
          >
             Create a new account
          </Link>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Login