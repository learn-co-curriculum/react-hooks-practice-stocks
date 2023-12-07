import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

function MainContainer() {
  const [stocks, setStocks] = useState([]);

  const [boughtStocks, setBoughtStocks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStocks(data);
      });
  }, []);

  function handleBuyStocks(stock) {
    setBoughtStocks([...boughtStocks, stock]);
  }

  //  [{id: 23}, {id: 21}, {id: 22}, {id:24}]
  // 21

  // [{id: 23}, {id: 22},  {id:24} ]
  function handleSellStocks(stockId) {
    const filteredStocks = boughtStocks.filter((stock) => stock.id !== stockId);
    setBoughtStocks(filteredStocks);
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handleBuyStocks={handleBuyStocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer
            boughtStocks={boughtStocks}
            handleSellStocks={handleSellStocks}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
