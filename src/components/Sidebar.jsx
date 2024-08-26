import { useEffect, useState } from "react";
import { useLayoutContext } from "@contexts/LayoutContext";
import { Link, NavLink } from "react-router-dom";
import HomeIcon from "@/icons/home";
import NewsIcon from "@/icons/news";
import ChartIcon from "@/icons/chart";
import Bell from "@/icons/bell";
import ChevronDown from "@/icons/chevron-down";
import CreditCard from "@/icons/credit-card";
import HeadPhone from "@/icons/headphone";
import Invoice from "@/icons/invoice";
import Reports from "@/icons/reports";
import Settings from "@/icons/settings";
import Wallet from "@/icons/wallet";

const Sidebar = () => {
  const { sideVisible, setSideVisible } = useLayoutContext();
  const [screenSize, setScreenSize] = useState(null);
  const toggleSide = () => {
    setSideVisible((sideVisible) => !sideVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 770) {
      setSideVisible(false);
    } else {
      setSideVisible(true);
    }
  }, [screenSize, setSideVisible]);

  return (
    <aside
      className={`fixed top-0 left-0 z-20 flex-shrink-0 bg-white dark:bg-tok-dark-bg w-72 h-full transition-transform duration-500 border-r border-r-tok-gray dark:border-r-tok-gray/15 ${
        sideVisible ? "" : "-translate-x-[100%]"
      }`}
    >
      <div className="relative h-full">
        {/* <div
          onClick={toggleSide}
          className="inline-flex absolute top-1/2 right-0 translate-x-[100%] h-9 items-center rounded-r-lg cursor-pointer drop-shadow-lg shadow-white"
        >
          <ChevronDown className="-rotate-90 h-8 w-8" />
        </div> */}
        <div className="h-full w-full p-3 overflow-y-auto">
          <div className="h-full flex flex-col gap-3 text-xs">
            <Link
              to={"/"}
              className="w-full rounded-lg bg-tok-blue/10 p-2 mb-6"
            >
              <div className="flex gap-2">
                <span className="p-2 bg-tok-blue/25 rounded-lg">
                  <img src="/assets/icons/logo.svg" alt="Logo Tokena" />
                </span>
                <div>
                  <p className="text-tok-dark-blue font-bold">Tokena</p>
                  <p className="text-tok-blue font-medium">Finance app</p>
                </div>
              </div>
            </Link>
            <span className="text-sm text-tok-dark-gray dark:text-white font-medium">
              Menu
            </span>
            <div className="flex-grow space-y-1">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `flex justify-between items-center rounded-lg font-medium transition-hover duration-300 dark:text-white dark:border  ${
                    isActive
                      ? "bg-tok-blue text-white font-semibold hover:bg-tok-blue/90 dark:bg-tok-dark-blue/70 dark:border-tok-blue"
                      : "hover:bg-tok-blue/10 dark:border-tok-dark"
                  }`
                }
              >
                <div className="flex gap-2 items-center pl-2 py-3 ">
                  <HomeIcon />
                  <span>Dashboard</span>
                </div>
              </NavLink>
              <NavLink
                to={"/news"}
                className={({ isActive }) =>
                  `flex justify-between items-center rounded-lg font-medium transition-hover duration-300 dark:text-white dark:border  ${
                    isActive
                      ? "bg-tok-blue text-white font-semibold hover:bg-tok-blue/90 dark:bg-tok-dark-blue/70 dark:border-tok-blue"
                      : "hover:bg-tok-blue/10 dark:border-tok-dark"
                  }`
                }
              >
                <div className="flex gap-2 items-center pl-2 py-3 ">
                  <NewsIcon />
                  <span>News</span>
                </div>
              </NavLink>
              <NavLink
                to={"/activities"}
                className={({ isActive }) =>
                  `flex justify-between items-center rounded-lg font-medium transition-hover duration-300 dark:text-white dark:border  ${
                    isActive
                      ? "bg-tok-blue text-white font-semibold hover:bg-tok-blue/90 dark:bg-tok-dark-blue/70 dark:border-tok-blue"
                      : "hover:bg-tok-blue/10 dark:border-tok-dark"
                  }`
                }
              >
                <div className="flex gap-2 items-center pl-2 py-3 ">
                  <ChartIcon />
                  <span>Activities</span>
                </div>
              </NavLink>
              <NavLink
                to={"/cards"}
                className={({ isActive }) =>
                  `flex justify-between items-center rounded-lg font-medium transition-hover duration-300 dark:text-white dark:border  ${
                    isActive
                      ? "bg-tok-blue text-white font-semibold hover:bg-tok-blue/90 dark:bg-tok-dark-blue/70 dark:border-tok-blue"
                      : "hover:bg-tok-blue/10 dark:border-tok-dark"
                  }`
                }
              >
                <div className="flex gap-2 items-center pl-2 py-3 ">
                  <CreditCard />
                  <span>Cards</span>
                </div>
              </NavLink>
              <NavLink
                to={"/reports"}
                className={({ isActive }) =>
                  `flex justify-between items-center rounded-lg font-medium transition-hover duration-300 dark:text-white dark:border  ${
                    isActive
                      ? "bg-tok-blue text-white font-semibold hover:bg-tok-blue/90 dark:bg-tok-dark-blue/70 dark:border-tok-blue"
                      : "hover:bg-tok-blue/10 dark:border-tok-dark"
                  }`
                }
              >
                <div className="flex gap-2 items-center pl-2 py-3 ">
                  <Reports />
                  <span>Reports</span>
                </div>

                <span>
                  <ChevronDown />
                </span>
              </NavLink>
              <NavLink
                to={"/notifications"}
                className={({ isActive }) =>
                  `flex justify-between items-center rounded-lg font-medium transition-hover duration-300 dark:text-white dark:border  ${
                    isActive
                      ? "bg-tok-blue text-white font-semibold hover:bg-tok-blue/90 dark:bg-tok-dark-blue/70 dark:border-tok-blue"
                      : "hover:bg-tok-blue/10 dark:border-tok-dark"
                  }`
                }
              >
                <div className="flex gap-2 items-center pl-2 py-3 ">
                  <Bell />
                  <span>Notifications</span>
                </div>
              </NavLink>
              <NavLink
                to={"/billing"}
                className={({ isActive }) =>
                  `flex justify-between items-center rounded-lg font-medium transition-hover duration-300 dark:text-white dark:border  ${
                    isActive
                      ? "bg-tok-blue text-white font-semibold hover:bg-tok-blue/90 dark:bg-tok-dark-blue/70 dark:border-tok-blue"
                      : "hover:bg-tok-blue/10 dark:border-tok-dark"
                  }`
                }
              >
                <div className="flex gap-2 items-center pl-2 py-3 ">
                  <Wallet />
                  <span>Billing</span>
                </div>
              </NavLink>
              <NavLink
                to={"/invoices"}
                className={({ isActive }) =>
                  `flex justify-between items-center rounded-lg font-medium transition-hover duration-300 dark:text-white dark:border  ${
                    isActive
                      ? "bg-tok-blue text-white font-semibold hover:bg-tok-blue/90 dark:bg-tok-dark-blue/70 dark:border-tok-blue"
                      : "hover:bg-tok-blue/10 dark:border-tok-dark"
                  }`
                }
              >
                <div className="flex gap-2 items-center pl-2 py-3 ">
                  <Invoice />
                  <span>Invoices</span>
                </div>
              </NavLink>
              <NavLink
                to={"/help"}
                className={({ isActive }) =>
                  `flex justify-between items-center rounded-lg font-medium transition-hover duration-300 dark:text-white dark:border  ${
                    isActive
                      ? "bg-tok-blue text-white font-semibold hover:bg-tok-blue/90 dark:bg-tok-dark-blue/70 dark:border-tok-blue"
                      : "hover:bg-tok-blue/10 dark:border-tok-dark"
                  }`
                }
              >
                <div className="flex gap-2 items-center pl-2 py-3 ">
                  <HeadPhone />
                  <span>Help center</span>
                </div>
              </NavLink>
              <NavLink
                to={"/settings"}
                className={({ isActive }) =>
                  `flex justify-between items-center rounded-lg font-medium transition-hover duration-300 dark:text-white dark:border  ${
                    isActive
                      ? "bg-tok-blue text-white font-semibold hover:bg-tok-blue/90 dark:bg-tok-dark-blue/70 dark:border-tok-blue"
                      : "hover:bg-tok-blue/10 dark:border-tok-dark"
                  }`
                }
              >
                <div className="flex gap-2 items-center pl-2 py-3 ">
                  <Settings />
                  <span>Settings</span>
                </div>
              </NavLink>
            </div>

            <div className="flex gap-2 items-center p-2 my-2 hover:bg-tok-blue/10 dark:hover:bg-tok-dark-bg-2 transition-colors duration-300 ease rounded-lg cursor-pointer">
              <div className="rounded-full h-12 w-12 overflow-hidden">
                <img src="/assets/userProfile.jpeg" alt="User" />
              </div>
              <div className="flex-grow">
                <p className="font-medium">John Doe</p>
                <p className="text-tok-dark-gray dark:text-tok-gray text-ellipsis">
                  johndoe8@gmail.com
                </p>
              </div>
              <ChevronDown />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
