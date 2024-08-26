import React from "react";

import NewsCard from "@components/NewsCard";
import ArrowDown from "@/icons/arrow-down";

const News = () => {
  return (
    <div>
      <h1 className="font-semibold mt-4 mb-6">Latest crypto news</h1>
      <div className="containerGrid">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <div className="w-full flex items-center justify-center m-3">
        <button className="flex justify-center items-center gap-2 bg-tok-light-gray dark:bg-tok-dark-bg-2 rounded-full border border-tok-gray dark:border-tok-gray/20 text-sm p-2">
          <span>Load more</span>
          <ArrowDown />
        </button>
      </div>
    </div>
  );
};

export default News;
