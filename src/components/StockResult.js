import React, { Component } from 'react';

class StockResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      stock: this.props.stock
    };
    this._handleInput = this._handleInput.bind( this );
    this._handleSubmit = this._handleSubmit.bind( this );
  }


  _handleInput(e) {
    this.setState({ quantity: e.target.value });
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onBuy(parseInt(this.state.quantity,0), parseFloat(this.state.stock.price), this.state.stock.symbol)
  }

  render() {
    return (
      <div>
        <p>Stock:{ this.props.stock.symbol }</p>
        <p>Price:{ this.props.stock.price}</p>
        <form onSubmit={ this._handleSubmit }>
          <input type="search" required onInput={ this._handleInput } />
          <input type="submit" value="Buy" />
        </form>
      </div>
    );
  }
}
export default StockResult;
