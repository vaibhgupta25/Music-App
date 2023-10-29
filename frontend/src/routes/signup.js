import React, { useState } from "react";
import { Icon } from "@iconify/react";
import {useCookies} from "react-cookie"
import TextInput from "../components/shared/TextInput";
import { makeUnauthenticatedPostRequest } from "../utils/serverHelper";
import { Link } from "react-router-dom";

export default function SignUpComponent() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [cookie,setCookie]=useCookies(["token"])

  const signUp = async (e) => {
    e.preventDefault()
    const data = { email, password, firstName, lastName, userName };
    if (email != confirmEmail || password != confirmPassword) {
      alert("some feilds are not same");
      return;
    }
    const res = await makeUnauthenticatedPostRequest("/auth/register", data);
    console.log(res)
    if(res && !res.err){
      const token = res.data.token;
      const date = new Date();
      date.setDate(date.getDate()+30);
      setCookie("token",token,{path:"/", expires:date});
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center font-poppins">
      <div className="p-5 border-b border-gray-400 w-full flex justify-center">
        <Icon icon="logos:spotify" width={145} />
      </div>
      <div className="input-area w-1/3  flex flex-col py-10 items-center">
        <p className="font-bold mb-12 ">To continue, login to spotify.</p>
        <TextInput
          label="Email address"
          type="text"
          placeholder="Enter your email"
          value={email}
          setValue={setEmail}
        />
        <TextInput
          label="Confirm Email address"
          type="text"
          placeholder="Enter your email again"
          value={confirmEmail}
          setValue={setConfirmEmail}
        />
        <TextInput
          label="Password"
          type="Password"
          placeholder="Enter a strong password"
          value={password}
          setValue={setPassword}
        />
        <TextInput
          label="Confirm Password"
          type="Password"
          placeholder="Should be same as password"
          value={confirmPassword}
          setValue={setConfirmPassword}
        />
        <TextInput
          label="Username"
          type="text"
          placeholder="Enter your username"
          value={userName}
          setValue={setUserName}
        />
        <div className="w-full flex ">
          <TextInput
            label="First Name "
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            setValue={setFirstName}
          />
          <TextInput
            label="Last Name"
            type="text"
            placeholder="Enter your last name"
            className="pl-2"
            value={lastName}
            setValue={setLastName}
          />
        </div>

        <div className=" w-full py-8 border-b border-gray-400  text-center">
          <button
            className="border border-solid border-gray-600 p-3 px-6 rounded-full bg-green-500"
            onClick={signUp}
          >
            Sign Up
          </button>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <p className="font-semibold my-6 text-lg">Already have an account?</p>
          <button className=" w-full p-3 border border-gray-500 rounded-full">
            <Link to="/login">LOGIN TO SPOTIFY</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
