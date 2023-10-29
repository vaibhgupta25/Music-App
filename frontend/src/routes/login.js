import React, { useState } from "react";
import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import { Link, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { makeAuthenticatedRequest, makeUnauthenticatedPostRequest } from "../utils/serverHelper";


export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookie,setCookie] = useCookies(['token']);
  const login = async () => {
    // e.preventDefault();
    console.log('log in')
    const body = {email,password};
    console.log(body.email + body.password)
    const res = await makeUnauthenticatedPostRequest('/auth/login',body);
    if(res && !res.err){
      console.log(res)
      const token = res.data.token;
      const date = new Date();
      date.setDate(date.getDate()+30);
      setCookie("token",token,{path:'/',expire:date});
    }
    else{
      console.log(res.err)
      return;
    }
  };
  
  return (
    <div className="w-full h-full flex flex-col items-center font-poppins">
      <div className="p-5 border-b border-gray-400 w-full flex justify-center">
        <Icon icon="logos:spotify" width={145} />
      </div>
      <div className="input-area  flex flex-col py-10 items-center w-1/3 ">
        <p className="font-bold mb-12 ">To continue, login to spotify.</p>
        <TextInput
          label="Email address or username"
          placeholder="Email address or username"
          type="text"
          value={email}
          setValue={setEmail}
        />
        <TextInput
          label="Password"
          type="Password"
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />
        <div className=" w-full py-8 border-b border-gray-400  text-end">
          <button className="border border-solid border-gray-600 p-3 px-6 rounded-full bg-green-500" onClick={login}>
            LOG IN
          </button>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <p className="font-semibold my-6 text-lg">Dont't have an account?</p>
          <button className=" w-full p-3 border border-gray-500 rounded-full">
            <Link to="/signup">SIGN UP FOR SPOTIFY</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
