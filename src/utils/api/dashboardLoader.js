const { REACT_APP_COIN_GECKO_KEY } = process.env;

const loadTrendingCoins = async () => {
  const myHeaders = new Headers();
  myHeaders.append("x-cg-api-key", REACT_APP_COIN_GECKO_KEY);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/search/trending",
      requestOptions
    );
    const data = await response.text();
    if (response.ok) return data;
    else throw new Error(data.message);
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const loadMarket = async (page = 1) => {
  const myHeaders = new Headers();
  myHeaders.append("x-cg-api-key", REACT_APP_COIN_GECKO_KEY);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=${page}&sparkline=true`,
      requestOptions
    );
    const data = await response.text();
    if (response.ok) return data;
    else throw new Error(data.message);
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const loadCoinView = async (coin) => {
  const myHeaders = new Headers();
  myHeaders.append("x-cg-api-key", REACT_APP_COIN_GECKO_KEY);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coin}?tickers=false&community_data=false&developer_data=false&sparkline=true`,
      requestOptions
    );
    const data = await response.text();
    if (response.ok) return data;
    else throw new Error(data.message);
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const trendingLoader = async () => {
  let trendings = await loadTrendingCoins();
  console.log(trendings);
  trendings = JSON.parse(trendings);

  let marketData = await loadMarket();
  console.log("marketData", marketData);
  marketData = JSON.parse(marketData);
  return { trendings, marketData };
};
