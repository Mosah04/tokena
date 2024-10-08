import React from "react";

const tradeDown = ({ className }) => {
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
        d="M16.6667 9.16666V13.3333H12.5"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.6666 13.3333L12.4999 9.16666C11.7644 8.43116 11.3968 8.06345 10.9454 8.0228C10.8708 8.01607 10.7958 8.01607 10.7211 8.0228C10.2698 8.06345 9.90209 8.43116 9.16659 9.16666C8.43109 9.90216 8.06338 10.2698 7.61206 10.3105C7.53745 10.3172 7.46239 10.3172 7.38778 10.3105C6.93646 10.2698 6.56872 9.90216 5.83325 9.16666L3.33325 6.66666"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default tradeDown;
