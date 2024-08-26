import React from "react";
import CloseIcon from "@/icons/close";
import UncheckedStar from "@/icons/star-unchecked";

const CoinOverview = ({ onClose }) => {
  return (
    <div className="fixed top-0 right-0 z-40 h-full w-full rounded-lg max-w-[496px]  border border-tok-gray dark:border-tok-dark-gray bg-white dark:bg-tok-dark-bg p-4 space-y-4">
      <div className="w-full flex justify-between items-center">
        <span className="font-bold">Bitcoin</span>
        <button
          type="button"
          onClick={onClose}
          className="p-2 aspect-square rounded-lg bg-tok-light-gray dark:bg-tok-dark-bg-2"
        >
          <CloseIcon />
        </button>
      </div>
      <div className="w-full">
        <img
          src="/assets/LineChart.png"
          alt="Bitcoin chart"
          className="w-full"
        />
      </div>
      <div className="flex justify-between items-center font-semibold">
        <div className="flex gap-2 items-center">
          <div className="h-10 rounded-full overflow-hidden">
            <img
              className="h-full"
              src="/assets/bitcoin.png"
              alt="Bitcoin Logo"
            />
          </div>
          <span>Bitcoin (BTC/USD)</span>
        </div>
        <span>$59,478</span>
      </div>
      <ul className="w-full text-sm space-y-2">
        <li className="flex justify-between items-center">
          <span className="font-bold">Crypto Market Rank</span>
          <span className="p-1 font-bold text-xs rounded-full bg-tok-light-gray dark:bg-tok-gray/15">
            Rank #1
          </span>
        </li>
        <li className="flex justify-between items-center">
          <span className="font-bold">Market cap</span>
          <span className="text-tok-dark-gray dark:text-tok-gray">
            $1,159,941,106,149
          </span>
        </li>
        <li className="flex justify-between items-center">
          <span className="font-bold">Circulating supply</span>
          <span className="text-tok-dark-gray dark:text-tok-gray">
            19739831.0
          </span>
        </li>
        <li className="flex justify-between items-center">
          <span className="font-bold">24 Hour High</span>
          <span className="text-tok-dark-gray dark:text-tok-gray">$61,540</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="font-bold">24 Hour Low</span>
          <span className="text-tok-dark-gray dark:text-tok-gray">$58,989</span>
        </li>
      </ul>
      <div>
        <span className="text-sm font-bold">Description</span>
        <p className="text-xs text-tok-dark-gray dark:text-tok-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          accusamus placeat soluta asperiores minima culpa vel, quas maiores
          autem quasi! Enim optio facere quod consequuntur laudantium maxime?
          Velit, libero voluptate!
        </p>
      </div>
      <button
        type="button"
        className="w-full rounded-lg border border-white dark:border-tok-gray/15 text-tok-blue p-2 bg-tok-blue/5 text-sm flex justify-center items-center gap-2"
      >
        <UncheckedStar />
        <span>Add to favorites</span>
      </button>
    </div>
  );
};

export default CoinOverview;
