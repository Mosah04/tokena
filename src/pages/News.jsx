import React, { useState } from "react";

import NewsCard from "@components/NewsCard";
import ArrowDown from "@/icons/arrow-down";

const News = () => {
  const [news, setNews] = useState(new Array(8).fill(0));
  return (
    <div>
      <h1 className="font-semibold mt-4 mb-6">Latest crypto news</h1>
      <div className="containerGrid">
        {news.map(() => (
          <NewsCard />
        ))}
      </div>
      <div className="w-full flex items-center justify-center m-3">
        <button
          type="button"
          onClick={() =>
            setNews((news) => [...news, ...[0, 0, 0, 0, 0, 0, 0, 0]])
          }
          className="flex justify-center items-center gap-2 bg-tok-light-gray dark:bg-tok-dark-bg-2 hover:bg-tok-light-gray/50 hover:dark:bg-tok-dark-bg-2/50 transition-colors duration-300 ease-linear rounded-full border border-tok-gray dark:border-tok-gray/20 text-sm p-2"
        >
          <span>Load more</span>
          <ArrowDown />
        </button>
      </div>
    </div>
  );
};

export default News;
