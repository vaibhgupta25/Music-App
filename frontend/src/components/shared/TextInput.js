import React from "react";

export default function TextInput({ label, type, placeholder, className,value,setValue }) {
  return (
    <div className={`flex flex-col my-2 w-full ${className}`}>
      <label htmlFor={label} className="font-semibold">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-solid border-gray-500 p-1.5 rounded focus:outline-none focus:border-black-600"
        id={label}
        value={value}
        onChange={(e)=>{
          setValue(e.target.value)
        }}
      />
    </div>
  );
}
