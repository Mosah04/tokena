import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(Object.keys(error));
  return (
    <div className="w-full h-[90vh] flex flex-col gap-4 items-center justify-center text-center">
      <h1 className="font-bold text-6xl text-tok-red">500</h1>
      <p className="font-bold text-4xl">An error happened</p>
      <p className="text-2xl text-tok-dark-gray dark:text-tok-gray">
        {error.message}
      </p>
    </div>
  );
};

export default Error;
