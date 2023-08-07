import React from "react";
import { Header } from "./header";

export default function Layout({ children }) {
  console.log("layout render!!");
  return (
    // <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0.1 rem` }}>
    //   { children }
    // </div>
    <>
      <Header />
      {children}
    </>
  );
}
