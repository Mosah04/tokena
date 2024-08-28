import React, { useEffect, useState } from "react";
import CloseIcon from "@/icons/close";
import UncheckedStar from "@/icons/star-unchecked";
import { loadCoinView } from "@api/dashboardLoader";

const CoinOverview = ({ onClose, coinToView }) => {
  const [coin, setCoin] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const coinLoader = async () => {
      try {
        setIsLoading(true);
        let coinData = await loadCoinView(coinToView);
        console.log("cc", coinData);
        coinData = JSON.parse(coinData);
        setCoin(coinData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    coinLoader();
  }, [coinToView]);

  return (
    <div
      className={`fixed top-0 right-0 z-40 h-full w-full rounded-lg max-w-[496px]  border border-tok-gray dark:border-tok-dark-gray bg-white dark:bg-tok-dark-bg p-4 space-y-4 overflow-y-auto`}
    >
      <div className={`w-full h-full ${isLoading ? "animate-pulse" : ""}`}>
        <div className="w-full flex justify-between items-center">
          <span className="font-bold">{coin?.name}</span>
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
                src={coin?.image.small}
                alt={`${coin?.name} Logo`}
              />
            </div>
            <span>
              {coin?.name} ({coin?.symbol.toUpperCase()}/USD)
            </span>
          </div>
          <span>
            ${coin?.market_data.current_price["usd"].toLocaleString()}
          </span>
        </div>
        <ul className="w-full text-sm space-y-2">
          <li className="flex justify-between items-center">
            <span className="font-bold">Crypto Market Rank</span>
            <span className="p-1 font-bold text-xs rounded-full bg-tok-light-gray dark:bg-tok-gray/15">
              Rank #{coin?.market_cap_rank}
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-bold">Market cap</span>
            <span className="text-tok-dark-gray dark:text-tok-gray">
              ${coin?.market_data.market_cap["usd"].toLocaleString()}
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-bold">Circulating supply</span>
            <span className="text-tok-dark-gray dark:text-tok-gray">
              {coin?.market_data.circulating_supply}
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-bold">24 Hour High</span>
            <span className="text-tok-dark-gray dark:text-tok-gray">
              ${coin?.market_data.high_24h["usd"].toLocaleString()}
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-bold">24 Hour Low</span>
            <span className="text-tok-dark-gray dark:text-tok-gray">
              ${coin?.market_data.low_24h["usd"].toLocaleString()}
            </span>
          </li>
        </ul>
        <div>
          <span className="text-sm font-bold">Description</span>
          <p
            dangerouslySetInnerHTML={{
              __html:
                coin?.description.en +
                "<style>p>a{text-decoration: underline;}</style>",
            }}
            className="text-xs text-tok-dark-gray dark:text-tok-gray"
          ></p>
        </div>
        <button
          type="button"
          className="w-full rounded-lg border border-white dark:border-tok-gray/15 text-tok-blue p-2 bg-tok-blue/5 text-sm flex justify-center items-center gap-2"
        >
          <UncheckedStar />
          <span>Add to favorites</span>
        </button>
      </div>
    </div>
  );
};

export default CoinOverview;
