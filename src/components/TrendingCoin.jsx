import React from "react";
import TradeDown from "@/icons/trade-down";
import TradeUp from "@/icons/trade-up";

const TrendingCoin = ({
  coinImg,
  coinName,
  coinValue,
  dollarValue,
  coinCurrency,
  changeAmount,
}) => {
  return (
    <div className="min-w-64 max-sm:min-w-40 flex-1 text-sm space-y-2 rounded-lg p-3 border border-tok-light-gray dark:border-tok-gray/20">
      <div className="w-full flex justify-between items-center">
        <div className="flex-grow flex items-center gap-1">
          <div className="rounded-full h-9 w-9 overflow-hidden">
            <img src={coinImg} alt={`Logo ${coinName}`} />
          </div>
          <div>
            <p
              title={coinName}
              className="font-bold text-tok-dark-gray dark:text-white text-nowrap truncate max-w-28 max-sm:max-w-11"
            >
              {coinName}
            </p>
            <p className="uppercase text-tok-dark-gray/60 dark:text-tok-gray font-bold">
              {coinCurrency}
            </p>
          </div>
        </div>
        <span
          className={`font-semibold flex gap-1 rounded-full ${
            changeAmount < 0
              ? "text-tok-red bg-tok-red/15"
              : "text-tok-green bg-tok-green/15"
          } dark:text-tok-light-gray py-1 px-2`}
        >
          <span>
            {changeAmount > 0 && "+"}
            {changeAmount}%
          </span>
          {changeAmount < 0 ? (
            <TradeDown className="text-tok-red" />
          ) : (
            <TradeUp className="text-tok-green" />
          )}
        </span>
      </div>
      <div>
        <p className="text-tok-dark-gray dark:text-tok-light-gray uppercase font-bold">
          {coinValue} {coinCurrency}
        </p>
        <p className="text-tok-dark-gray dark:text-tok-gray font-medium">
          ${dollarValue}
        </p>
      </div>
    </div>
  );
};

export default TrendingCoin;
