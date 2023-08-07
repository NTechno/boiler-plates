import React from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import Link from "../components/form-ele/link";
import TextBox from "../components/form-ele/textBox";
import ButtonEle from "../components/form-ele/buttonEle";

export default function Register() {
  var { uEmail, uPassword, uName } = "";
  const handleClick = () => {
    console.log("into the click !!!", uEmail, uName, uPassword);
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
              Sign UP to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <TextBox
                type="text"
                htmlFor="name"
                placeholder="Full Name"
                label="Name"
                onBlur={(value) => {
                  uName = value;
                }}
              />

              <TextBox
                type="email"
                htmlFor="email"
                placeholder="Email address"
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
              <Link href="#" label="Already Have Account ?" />
            </div>

            <div>
              <ButtonEle
                onClick={() => {
                  handleClick();
                }}
                label="Sign Up"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
