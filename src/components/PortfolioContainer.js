import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, onRemoveStock }) {
  const stockList = stocks.map((stock) => (
    <Stock key={stock.id} stock={stock} onStockClick={onRemoveStock} />
  ));

  return (
    <div>
      <h2>My Portfolio</h2>
      {stockList}
    </div>
  );
}

export default PortfolioContainer;
