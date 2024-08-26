import React, { useState } from "react";
import ArrowDown from "@/icons/arrow-down";
import ArrowUp from "@/icons/arrow-up";
import ChevronDown from "@/icons/chevron-down";
import SearchIcon from "@/icons/search";
import EllipsisIcon from "@/icons/ellipsis";
import TrendingCoin from "@components/TrendingCoin";
import { Link } from "react-router-dom";
import AddFavorite from "@components/AddFavorite";
import CoinOverview from "@components/CoinOverview";

const Dashboard = () => {
  const [showCoinOverview, setShowCoinOverview] = useState(false);

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
              <TrendingCoin
                coinName="Sui"
                coinImg="/assets/logoSui.jpeg"
                coinCurrency="sui"
                coinValue={"1.56"}
                changeAmount={-10.5}
                dollarValue={"2,455,806,673"}
              />
              <TrendingCoin
                coinName="Ginnan The Freazisghhh"
                coinImg="/assets/ginnan.png"
                coinCurrency="Ginnan"
                coinValue={"1.56"}
                changeAmount={3.2}
                dollarValue={"34,007,492"}
              />
              <TrendingCoin
                coinName="Toncoin"
                coinImg="/assets/toncoin.png"
                coinCurrency="Ton"
                coinValue={"6.95"}
                changeAmount={7.5}
                dollarValue={"17,524,537,268"}
              />
              <TrendingCoin
                coinName="Solana"
                coinImg="/assets/solana.png"
                coinCurrency="Sol"
                coinValue={"6.95"}
                changeAmount={-0.05}
                dollarValue={"67,116,052,623"}
              />
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

        <div
          onClick={() => {
            setShowCoinOverview((view) => !view);
          }}
          className="relative overflow-x-auto rounded-lg border border-tok-gray dark:border-tok-dark-gray"
        >
          <table className="w-full text-sm font-medium text-left">
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
            <tbody>
              <tr className="border-b border-b-tok-gray dark:border-b-tok-gray/15 hover:bg-tok-light-gray dark:hover:bg-tok-dark-bg-2 cursor-pointer">
                <td className="w-4 p-4">
                  <AddFavorite />
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-8 w-8 rounded-full overflow-hidden">
                      <img src="/assets/bitcoin.png" alt="Bitcoin" />
                    </span>
                    <span>Bitcoin-BTC</span>
                  </div>
                </td>
                <td className="px-6 py-4">$58,765.16</td>
                <td className="px-6 py-4">
                  <span className="bg-tok-red/15 p-1 rounded-full text-tok-red mr-1">
                    -3.9%
                  </span>
                </td>
                <td className="px-6 py-4">$20,522,294,968</td>
                <td className="px-6 py-4">$1,159,941,106,149</td>
                <td className="px-6 py-4">
                  <span>
                    <img src="/assets/coin-down.svg" alt="" />
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-tok-light-gray dark:hover:bg-tok-dark-bg-2 cursor-pointer">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <AddFavorite />
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-8 w-8 rounded-full overflow-hidden">
                      <img src="/assets/ethereum.png" alt="Ethereum" />
                    </span>
                    <span>Ethereum-ETH</span>
                  </div>
                </td>
                <td className="px-6 py-4">$2,556.57</td>
                <td className="px-6 py-4">
                  <span className="bg-tok-red/15 p-1 rounded-full text-tok-red mr-1">
                    -1.9%
                  </span>
                </td>
                <td className="px-6 py-4">$11,647,000,462</td>
                <td className="px-6 py-4">$308,740,061,915</td>
                <td className="px-6 py-4">
                  <span>
                    <img src="/assets/coin-down.svg" alt="Coin Down" />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {showCoinOverview && (
        <CoinOverview onClose={() => setShowCoinOverview(false)} />
      )}
    </>
  );
};

export default Dashboard;
