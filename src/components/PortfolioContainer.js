import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ boughtStocks, handleSellStocks }) {
  const renderStocks = boughtStocks.map((stock) => (
    <Stock key={stock.id} stock={stock} handleSellStocks={handleSellStocks} />
  ));

  return (
    <div>
      <h2>My Portfolio</h2>
      {renderStocks}
    </div>
  );
}

export default PortfolioContainer;
