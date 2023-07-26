import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Layout = (porps) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <ToastContainer />
        {porps.children}
      </main>
      <Footer />
    </div>
  );
};
