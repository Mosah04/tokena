import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import { useLayoutContext } from "@contexts/LayoutContext";

function App() {
  const { sideVisible } = useLayoutContext();
  useEffect(() => {
    const themeMode = localStorage.getItem("theme");
    if (themeMode) {
      if (themeMode === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        document.documentElement.classList.add("dark");
      }
    }

    const themeListener = window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        if (event.matches) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
      });

    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", themeListener);
  }, []);
  return (
    <div className="font-monaSans text-tok-dark min-h-screen min-w-screen dark:bg-tok-dark-bg dark:text-tok-light-gray">
      <Sidebar />
      <div
        className={`transition-margin duration-300 ${
          sideVisible ? "md:ml-72" : ""
        }`}
      >
        <Header />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
