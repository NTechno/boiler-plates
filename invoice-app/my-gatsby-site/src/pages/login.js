import React, { useEffect, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import TextBox from "../components/form-ele/textBox";
import Link from "../components/form-ele/link";
import ButtonEle from "../components/form-ele/buttonEle";
import CheckBoxEle from "../components/form-ele/checkBoxEle";
import { navigate } from "@reach/router";

export default function Login() {
  var uEmail = "";
  var uPassword = "";

  useEffect(()=>{
    console.log("into the login!!!");    
    
  }, [])

  const handleCheck = () => {
    console.log("into the handle check");
  };

  const handleClick = () => {
    console.log("into handle click", uEmail, uPassword);    
    navigate("/dashboard/");
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <TextBox
                type="email"
                htmlFor="email"
                placeholder="Email Address"
                label="Email"                
                onBlur={(value) => {                  
                  uEmail = value;
                }}
              />
              <TextBox
                type="password"
                htmlFor="password"
                placeholder="Password"
                label="Password"
                onBlur={(value) => {
                  uPassword = value;
                }}
              />
            </div>

            <div className="flex items-center justify-between">
              <CheckBoxEle
                label="Remember"
                onChange={(data) => handleCheck()}
              />
              <Link href="#" label="Forgot Your Password?" />
            </div>
            <ButtonEle
              onClick={() => {
                handleClick();
              }}
              label="Sign In"
            />
          </form>
        </div>
      </div>
    </>
  );
}
