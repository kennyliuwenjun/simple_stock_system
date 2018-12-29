import React, { Component } from 'react';

class MyBank extends Component {
  constructor() {
    super();
    this.state = { amount: 0 };
    this._deposit = this._deposit.bind( this );
    this._withdraw = this._withdraw.bind( this );
    this._handleInput = this._handleInput.bind( this );
  }

  _handleInput(e){
    this.setState( {amount:e.target.value} )
  }

  _deposit() {
    this.props.onButtonClick(parseInt(this.props.balance,0) + parseInt(this.state.amount,0));
  }

  _withdraw() {
    this.props.onButtonClick(parseInt(this.props.balance,0) - parseInt(this.state.amount,0));
  }

  render() {
    return (
      <div>
        <input onInput={ this._handleInput } />
        <button onClick={this._deposit}>Deposit</button>
        <button onClick={this._withdraw}>Withdraw</button>
      </div>
    );
  }
}

export default MyBank;
