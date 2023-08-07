import React from "react";

export default function TextBox({
  htmlFor,
  type,
  placeholder,
  label,
  onBlur,
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="sr-only">
        {label}
      </label>
      <input
        id={htmlFor}
        name={htmlFor}
        type={type}
        autoComplete="current-password"
        required
        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder={placeholder}
        // value={value}
        onBlur={(e) => {
          onBlur(e.target.value);
        }}
      />
    </div>
  );
}
