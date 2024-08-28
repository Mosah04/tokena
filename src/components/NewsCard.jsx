import React from "react";
import Heart from "@/icons/heart";
import Comment from "@/icons/comment";

const NewsCard = () => {
  return (
    <div className="p-2 rounded-lg inline-block hover:shadow-md hover:dark:shadow-tok-gray transition-shadow duration-300 ease-out border border-tok-light-gray dark:border-tok-gray/15 text-sm cursor-pointer space-y-2">
      <div className="flex gap-2 items-center">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img
            src="/assets/marketCapNews.jpeg"
            alt="Market Cap Logo"
            className="h-full"
          />
        </div>
        <div>
          <span className="font-semibold">CoinMarketCap</span>
          <p className="text-tok-dark-gray dark:text-tok-light-gray">
            News - 1hours ago
          </p>
        </div>
      </div>
      <div className="aspect-[4/3] w-full rounded-lg overflow-hidden bg-tok-light-gray dark:bg-tok-dark/70">
        <img src="" alt="News View" className="h-full aspect-cover" />
      </div>
      <p className="italic font-semibold">
        Ethereum’s Merge Coming and the Stakes Couldn’t Be Higher
      </p>
      <p className="">
        The most important upgrade in blockchain history is slated for August.
        And the outcome of Ethe....
      </p>
      <div className=" flex gap-2">
        <div className="flex gap-1">
          <button type="button">
            <Heart />
          </button>
          <span>5</span>
        </div>
        <div className="flex gap-1">
          <button type="button">
            <Comment />
          </button>
          <span>5</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
