import React from 'react';

function MyStock (props) {
  return (
    <div>
      <p>Stock:{props.stock.symbol}, amount:{props.stock.amount}</p>
    </div>
  );
}

export default MyStock;
