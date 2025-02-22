"use client";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios"

const Navbar = () => {
  const [menu, setMenu] = useState("SignUp");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
 
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL 

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
     
        const response = await axios.post(`${baseUrl}/api/users`,{
            username,
            email,
            password
        })

        console.log(response);
        if (response.data.status === 200) {
            alert("User registered successfully!");
        setUsername("");
        setEmail("");
        setPassword("");
        } else {
            alert("Failed to register user.");
        }
        
    } catch (error) {
        if (error instanceof axios.AxiosError) {
            console.log(error?.response?.data);
          }
          if (error === 404 || error) {
            const errorMessage = error;
            console.log(errorMessage);
          }    
    } 
    
  };

  return (
    <div className="lg:h-screen h-auto bg-cover flex justify-center items-center bg-hero-pattern">
      <div className="flex justify-center items-center flex-col lg:flex-row max-w-[1200px]  w-[100%] text-white md:w-[70%] rounded-lg m-auto bg-transparent shadow-2xl shadow-black">
        <div className="p-10 flex-1 max-w-[600px] flex flex-col">
          <h1 className="text-4xl mb-2 font-bold">Welcome 👋</h1>
          <h6>Fill in the details to get started with the best Chat App!</h6>

          <div className="bg-white text-black mt-7 rounded-lg p-5">
            <ul className="flex gap-2 mb-5 ">
              <li
                onClick={() => setMenu("Login")}
                className={
                  menu === "Login"
                    ? "font-semibold cursor-pointer flex-1 text-center border-b-2 border-black pb-2"
                    : "font-semibold cursor-pointer flex-1 text-center border-b-2  pb-2"
                }
              >
                Login
              </li>

              <li
                onClick={() => setMenu("SignUp")}
                className={
                  menu === "SignUp"
                    ? "font-semibold flex-1 text-center border-b-2 cursor-pointer border-black"
                    : "font-semibold cursor-pointer flex-1 text-center border-b-2  pb-2"
                }
              >
                SignUp
              </li>
            </ul>

            <form onSubmit={handleSubmit}>
              {menu === "Login" ? (
                ""
              ) : (
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[100%] shadow-md shadow-[#575656]  outline-none rounded-xl ,mb-2 mt-5 px-3 py-2"
                  required
                  name=""
                  id=""
                  placeholder="Enter your Email"
                />
              )}

              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-[100%] shadow-md shadow-[#575656]  outline-none rounded-xl mb-6 mt-5 px-3 py-2"
                required
                name=""
                id=""
                placeholder="Enter your Username"
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[100%] outline-none shadow-md shadow-[#575656] rounded-xl mb-6 px-3 py-2"
                name=""
                id=""
                required
                placeholder="Enter your password"
              />
              <span className="flex mb-5">
                <input required type="checkbox" name="" id="" />
                <p className="text-sm text-[#5e5d5d] font-medium ml-3">
                  Agree to the terms of use & Privacy Policy.
                </p>
              </span>
              {menu === "Login" ? (
                <button type="submit" className="bg-[#077eff] text-white w-full rounded-xl py-2 font-semibold">
                  Login
                </button>
              ) : (
                <button type="submit" className="bg-[#077eff] text-white w-full rounded-xl py-2 font-semibold">
                  Create Account
                </button>
              )}
            </form>

            <div className="flex text-sm my-5">
              {menu === "Login" ? (
                <p className="mr-2 text-[#5e5d5d]">
                  Create an account{" "}
                  <span
                    onClick={() => setMenu("SignUp")}
                    className="font-semibold cursor-pointer text-[#077eff]"
                  >
                    Click here
                  </span>
                </p>
              ) : (
                <p className="mr-2 text-[#5e5d5d]">Already have an account?</p>
              )}
              {menu === "Login" ? (
                ""
              ) : (
                <p
                  onClick={() => setMenu("Login")}
                  className="font-semibold cursor-pointer text-[#077eff]"
                >
                  Login Here
                </p>
              )}

              {menu === "Login" ? (
                <p className="mr-2 text-[#5e5d5d]">
                  Forgot Password?{" "}
                  <span className="font-semibold text-[#077eff]">
                    Click here
                  </span>
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-[600px] lg:mb-0 mb-10">
          <Image
            className="w-[300px] m-auto"
            src="/logo_big-Cp0kVrXR.png"
            alt="icon"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
