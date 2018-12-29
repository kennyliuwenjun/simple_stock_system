import React, { Component } from 'react';
import StockResult from './StockResult'
import SearchForm from './SearchForm'
import MyBank from './MyBank'
import MyStock from './MyStock'
import axios from 'axios';

const Alpha_Vantage_API_URL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE";
const API_KEY = "5KKVQH1JXJVLSW4Y"

class Stock extends Component {
  constructor () {
    super();

    const myBalance = window.localStorage.PSAmyBalance ? JSON.parse(window.localStorage.PSAmyBalance) : this.balanceInit();
    const myStocks = window.localStorage.PSAmyStocks ? JSON.parse(window.localStorage.PSAmyStocks) : this.stocksInit();

    this.state = {
      searchResult: {
        symbol: '',
        price: 0
      },
      myBalance,
      myStocks
    };
    this.fetchStockData = this.fetchStockData.bind(this);
    this.balanceChange = this.balanceChange.bind(this);
    this.buyStock = this.buyStock.bind(this);
  };

  balanceInit(){
    localStorage.setItem('PSAmyBalance', JSON.stringify(0));
    return JSON.parse(window.localStorage.PSAmyBalance)
  }
  stocksInit(){
    localStorage.setItem('PSAmyStocks',JSON.stringify([]));
    return JSON.parse(window.localStorage.PSAmyStocks)
  }

  fetchStockData(symbol) {
    console.log('Searching stock for', symbol);

    axios
      .get(`${ Alpha_Vantage_API_URL }&symbol=${ symbol }&apikey=${ API_KEY }`)
      .then((res) => {
        const searchResult = {
          symbol,
          price: res.data['Global Quote']['05. price']
        }
        this.setState({searchResult})
      })
      .catch((err) => {
        console.log(err)
      })
  };

  balanceChange(cb){
    localStorage.setItem('PSAmyBalance', cb);
    this.setState({myBalance:cb})
  }

  buyStock(quantity, stockPrice, stockSymbol){
    this.balanceChange(this.state.myBalance - quantity * stockPrice)
    let exit = false
    const myStocks = this.state.myStocks
    myStocks.forEach(function(stock){
       if (stock.symbol === stockSymbol){
         stock.amount += quantity
         exit = true
       }
    })
    if (!exit){
      myStocks.push({
        symbol: stockSymbol,
        amount: quantity
      })
    }
    localStorage.setItem('PSAmyStocks',JSON.stringify(myStocks));

  }

  render() {
    return (
      <div>
        <h2>Search Stock</h2>
        <SearchForm onSubmit={ this.fetchStockData }/>
        { this.state.searchResult.symbol === '' ? <div></div> : <StockResult stock={ this.state.searchResult } onBuy={ this.buyStock }/> }
        <p>My Balance: { this.state.myBalance ? this.state.myBalance : 0 }</p>
        <MyBank onButtonClick={ this.balanceChange } balance={ this.state.myBalance }/>
        { this.state.myStocks.map( (stock) => <MyStock stock={stock} /> ) }
      </div>
    );
  }
};



export default Stock;
