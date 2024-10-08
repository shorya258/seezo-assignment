"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
const Login = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    name: "",
  });
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  // fn to validate email address
  const validateEmail = (email) => {
    // Regular expression for validating an email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  // .fn to validate email and pwd
  const validateInputs = (credentials) => {
    if (!credentials.email && !credentials.password) {
      toast.error("Enter the parameters first!");
      return false;
    } else {
      if (!credentials.email || !validateEmail(credentials.email)) {
        toast.error("Enter a valid email address!");
        return false;
      } else if (!credentials.password) {
        toast.error("Enter a valid password!");
        return false;
      }
    }
    return true;
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs(credentials)) return;
    const response = await fetch("api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    let authStorageToken = json.authToken;
    localStorage.setItem("authStorageToken", authStorageToken);
    const statusCode = response.status;
    if (statusCode === 201) {
      toast.success("Logged in successfully!");
      setTimeout(() => router.push("/assessments"), 3000);
    } else if (statusCode === 400) {
      toast.error(json.error);
    } else {
      toast.error("invalid creds");
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex gap-1 justify-center items-center mt-10 text-center text-2xl font-bold leading-9 tracking-tight  ">
            <Image src={"/images/logo.png"} alt="logo" height={40} width={40} />
           <h2>
           Log in to your account
           </h2>
          </div>
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
  );
};

export default Login;
