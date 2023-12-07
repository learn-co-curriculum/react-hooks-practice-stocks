import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleBuyStocks }) {
  // [{}, {}, {}, {}]
  //

  // [ <Stock />, <Stock />, <Stock />, <Stock /> ]
  const renderStocks = stocks.map((stock) => (
    <Stock key={stock.id} stock={stock} handleBuyStocks={handleBuyStocks} />
  ));

  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks}
      {/* render stock list here*/}
    </div>
  );
}

export default StockContainer;
