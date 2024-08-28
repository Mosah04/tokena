import React, { useRef, useState } from "react";
import ArrowDown from "@/icons/arrow-down";
import ArrowUp from "@/icons/arrow-up";
import ChevronDown from "@/icons/chevron-down";
import SearchIcon from "@/icons/search";
import EllipsisIcon from "@/icons/ellipsis";
import TrendingCoin from "@components/TrendingCoin";
import { Link, useLoaderData } from "react-router-dom";
import AddFavorite from "@components/AddFavorite";
import CoinOverview from "@components/CoinOverview";
import { Sparklines, SparklinesLine } from "react-sparklines";

import { loadMarket } from "@api/dashboardLoader";

const Dashboard = () => {
  const [showCoinOverview, setShowCoinOverview] = useState(false);
  const {
    trendings: { coins },
    marketData: marketDataFetched,
  } = useLoaderData();
  const [page, setPage] = useState(1);

  const [marketData, setMarketData] = useState(marketDataFetched);
  const [isLoading, setIsLoading] = useState(false);

  const loadTable = async (page) => {
    try {
      setIsLoading(true);
      let marketData = await loadMarket(page);
      marketData = JSON.parse(marketData);
      setMarketData(marketData);
      setPage(page);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatLargeNumber = (num) => {
    return num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });
  };

  const inputRef = useRef();

  const [coinToView, setCoinToView] = useState("");

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-wrap w-full gap-4">
          <div className="flex-grow min-w-72 flex flex-col justify-center gap-2 rounded-lg p-2 border border-tok-light-gray dark:border-tok-gray/20 text-xl">
            <p className="font-semibold">Balance</p>
            <div className="flex justify-between items-center">
              <span className="font-bold">$63,755,200</span>
              <span className="text-sm font-medium text-tok-dark-gray dark:text-tok-gray">
                <span className="bg-tok-green/15 p-1 rounded-full text-tok-green mr-1">
                  +2.3%
                </span>
                vs last month
              </span>
            </div>
            <div className="flex gap-2">
              <button className="flex justify-center items-center gap-2 p-2 flex-1 text-lg bg-tok-blue/5 rounded-lg text-tok-blue border border-white dark:border-tok-gray/15">
                <ArrowUp /> <span>Deposit</span>
              </button>
              <button className="flex justify-center items-center gap-2 p-2 flex-1 text-lg bg-tok-blue/5 rounded-lg text-tok-blue border border-white dark:border-tok-gray/15">
                <ArrowDown /> <span>Withdraw</span>
              </button>
            </div>
          </div>
          <div className="flex-grow flex flex-col justify-between gap-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Trending</span>
              <Link className="text-xs text-tok-dark-gray dark:text-tok-gray hover:underline inline-flex gap-1 items-center">
                <span>View more</span>
                <ChevronDown className="-rotate-90" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {coins.slice(0, 4).map((coin, index) => (
                <TrendingCoin
                  key={index}
                  coinImg={coin.item?.thumb}
                  coinName={coin.item.name}
                  coinValue={coin.item.data.price.toFixed(3)}
                  dollarValue={formatLargeNumber(
                    parseFloat(
                      coin.item.data.market_cap.replace(/[^0-9.-]+/g, "")
                    )
                  )}
                  coinCurrency={coin.item.symbol}
                  changeAmount={coin.item.data.price_change_percentage_24h.usd.toFixed(
                    1
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap gap-2 justify-between items-center">
          <div className="relative min-w-[250px] max-sm:flex-grow">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <SearchIcon className="text-tok-dark-gray" />
            </div>
            <input
              type="text"
              className="bg-transparent font-medium border border-tok-gray outline-none text-sm rounded-lg placeholder:text-tok-dark-gray focus:ring-tok-blue focus:border-tok-blue block w-full ps-10 p-2.5 dark:border-tok-dark-gray dark:focus:ring-tok-blue dark:focus:border-tok-blue"
              placeholder="Search crypto..."
            />
          </div>
          <div className="min-w-[250px] max-sm:flex-grow">
            <select className="bg-white font-medium border border-tok-gray outline-none text-sm rounded-lg placeholder:text-tok-dark-gray focus:ring-tok-blue focus:border-tok-blue block w-full p-2.5 dark:bg-tok-dark-bg dark:border-tok-dark-gray dark:focus:ring-tok-blue dark:focus:border-tok-blue">
              <option disabled selected>
                Categories
              </option>
              <option value="1">Aave Tokens</option>
              <option value="2">Account Abstraction</option>
              <option value="3">Adidas Ecosystem</option>
              <option value="4">Adventure Games</option>
            </select>
          </div>
        </div>

        <div className="relative overflow-x-auto rounded-lg border border-tok-gray dark:border-tok-dark-gray">
          <table className="w-full text-sm font-medium text-left text-nowrap">
            <caption className="p-5 text-lg font-semibold w-full rounded-t-lg">
              <span className="font-semibold float-left">Market</span>
              <button
                type="button"
                className="p-1 aspect-square rounded-lg border border-tok-gray dark:border-tok-dark-gray float-right"
              >
                <EllipsisIcon />
              </button>
            </caption>
            <thead className="text-xs bg-tok-light-gray dark:bg-tok-light-gray/10 border-b border-b-tok-gray dark:border-b-tok-gray/15">
              <tr>
                <th scope="col" className="p-4"></th>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Coin
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  24h
                </th>
                <th scope="col" className="px-6 py-3">
                  24h Volume
                </th>
                <th scope="col" className="px-6 py-3">
                  Market Cap
                </th>
                <th scope="col" className="px-6 py-3">
                  Last 7 Days
                </th>
              </tr>
            </thead>
            <tbody className={`${isLoading ? "animate-pulse" : ""}`}>
              {marketData.map((coin, index) => (
                <tr
                  key={coin.id}
                  onClick={() => {
                    setCoinToView(coin.id);
                    setShowCoinOverview(true);
                  }}
                  className={`border-b border-b-tok-gray dark:border-b-tok-gray/15 hover:bg-tok-light-gray dark:hover:bg-tok-dark-bg-2 cursor-pointer`}
                >
                  <td className="w-4 p-4">
                    <AddFavorite />
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {coin.market_cap_rank}
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="h-8 w-8 rounded-full overflow-hidden">
                        <img src={coin.image} alt={coin.name} />
                      </span>
                      <span>
                        {coin.name}-{coin.symbol.toUpperCase()}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    ${coin.current_price.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`bg-tok-${
                        coin.price_change_percentage_24h >= 0 ? "green" : "red"
                      }/15 p-1 rounded-full text-tok-${
                        coin.price_change_percentage_24h >= 0 ? "green" : "red"
                      } mr-1`}
                    >
                      {coin.price_change_percentage_24h > 0 && "+"}
                      {coin.price_change_percentage_24h.toFixed(1)}%
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    ${coin.total_volume.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    ${coin.market_cap.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <Sparklines data={coin.sparkline_in_7d.price}>
                      <SparklinesLine
                        color={
                          coin.sparkline_in_7d.price[
                            coin.sparkline_in_7d.price.length - 1
                          ] >= coin.sparkline_in_7d.price[0]
                            ? "green"
                            : "red"
                        }
                      />
                    </Sparklines>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="min-w-max w-full gap-4 flex justify-between items-center p-4">
            <button
              className="flex justify-center items-center gap-2 bg-tok-blue text-nowrap hover:bg-tok-blue/90 transition-colors duration-300 ease text-white px-3 py-2 rounded-lg"
              type="button"
              onClick={() => {
                if (page > 1) {
                  loadTable(page - 1);
                }
              }}
              disabled={page <= 1 || isLoading}
            >
              Previous
            </button>
            <div className="flex items-center gap-2">
              <span>Page {page}</span>
              <form
                className="min-w-[200px]"
                onSubmit={(e) => {
                  e.preventDefault();
                  loadTable(inputRef.current.value);
                }}
              >
                <input
                  type="number"
                  ref={inputRef}
                  min={1}
                  max={150}
                  className="bg-transparent font-medium border border-tok-gray outline-none text-sm rounded-lg text-center placeholder:text-tok-dark-gray focus:ring-tok-blue focus:border-tok-blue block w-full  p-2.5 dark:border-tok-dark-gray dark:focus:ring-tok-blue dark:focus:border-tok-blue"
                  placeholder="Search for a page"
                />
              </form>
            </div>
            <button
              className="flex justify-center items-center gap-2 bg-tok-blue text-nowrap hover:bg-tok-blue/90 transition-colors duration-300 ease text-white px-3 py-2 rounded-lg"
              type="button"
              onClick={() => {
                loadTable(page + 1);
              }}
              disabled={isLoading}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      {showCoinOverview && (
        <CoinOverview
          coinToView={coinToView}
          onClose={() => setShowCoinOverview(false)}
        />
      )}
    </>
  );
};

export default Dashboard;
