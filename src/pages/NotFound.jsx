import React from "react";

const NotFound = () => {
  return (
    <div className="w-full h-[90vh] flex flex-col gap-4 items-center justify-center">
      <h1 className="font-bold text-6xl">404</h1>
      <p className="font-bold text-4xl">Page not found</p>
      <p className="text-2xl text-tok-dark-gray dark:text-tok-gray">
        The page you requested was not found on this server
      </p>
    </div>
  );
};

export default NotFound;
