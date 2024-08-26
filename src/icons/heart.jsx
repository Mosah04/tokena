import React from "react";

const heart = ({ className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.2189 3.32846C13.9842 1.95769 12.0337 2.51009 10.8621 3.39001C10.3816 3.7508 10.1414 3.93119 10.0001 3.93119C9.85875 3.93119 9.61858 3.7508 9.13808 3.39001C7.96643 2.51009 6.01599 1.95769 3.78128 3.32846C0.848472 5.12745 0.184848 11.0624 6.94969 16.0695C8.23818 17.0232 8.88241 17.5 10.0001 17.5C11.1177 17.5 11.762 17.0232 13.0505 16.0695C19.8153 11.0624 19.1517 5.12745 16.2189 3.32846Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default heart;
