import React from "react";
import ChevronUpDown from "@/icons/chevron-up-down";
import Sun from "@/icons/sun";
import Moon from "@/icons/moon";

const Header = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  };
  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-tok-dark-bg flex items-center justify-between gap-2 py-2 px-6 border-b border-b-tok-light-gray dark:border-b-tok-gray/15 text-sm">
      <div className="flex gap-6">
        <div>
          <span className="font-semibold">Dashboard</span>
          <p className="text-nowrap text-ellipsis text-xs text-tok-dark-gray dark:text-tok-gray">
            Welcome back, John Doe!
          </p>
        </div>
        <button
          className="flex max-sm:hidden justify-center items-center gap-2 bg-tok-blue text-nowrap hover:bg-tok-blue/90 transition-colors duration-300 ease text-white px-3 py-1 rounded-lg"
          type="button"
        >
          <img src="/assets/icons/add-wallet.svg" alt="" srcset="" />
          Connect wallet
        </button>
      </div>
      <div className="flex gap-2">
        <button
          className="flex justify-center items-center font-medium gap-2 py-1 px-3 text-tok-dark-gray dark:text-tok-gray rounded-lg border border-tok-dark-gray dark:border-tok-gray"
          type="button"
        >
          <span>USD</span>
          <ChevronUpDown />
        </button>
        <button
          className="flex justify-center items-center aspect-square gap-2 py-1 px-3 text-tok-dark-gray dark:text-tok-gray rounded-lg border border-tok-dark-gray dark:border-tok-gray"
          onClick={toggleDarkMode}
          type="button"
        >
          <Sun className="hidden dark:block" />
          <Moon className="dark:hidden" />
        </button>
      </div>
    </header>
  );
};

export default Header;
