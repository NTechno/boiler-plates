import React from "react";

export default function Link({ href, label }) {
  return (
    <div className="text-sm">
      <a
        href={href}
        className="font-medium text-indigo-600 hover:text-indigo-500"
      >
        {label}
      </a>
    </div>
  );
}
