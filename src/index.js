import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "@/index.css";
import router from "@/routes/router";
import { LayoutContextProvider } from "@contexts/LayoutContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LayoutContextProvider>
      <RouterProvider router={router} />
    </LayoutContextProvider>
  </React.StrictMode>
);
