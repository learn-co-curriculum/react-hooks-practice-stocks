import React from "react";

function Stock({ stock, handleBuyStocks, handleSellStocks }) {
  function handleClick() {
    console.log(stock);

    if (!handleBuyStocks) {
      handleSellStocks(stock.id);
    }

    handleBuyStocks(stock);
  }

  return (
    <div onClick={handleClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
