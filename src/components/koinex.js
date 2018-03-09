import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import { HashLoader } from 'react-spinners';
import './Tickers.css';
import Cryptocurrency from './koin';

const Spinner = props => {
    return (
        <div className="tab-spinner">
            <HashLoader
                color={'#123abc'}
                loading={props.isLoading}
            />
        </div>
    );
}

class Koinex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: { },
      isLoading: true
    }
  }

  fetchCryptocurrencyData() {
    axios
      .get(`https://koinex.in/api/ticker`)
      .then(response => {
        var result = response.data //.filter(currency => wanted.includes(currency.id));
        this.setState({ data: result, isLoading: false });
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchCryptocurrencyData()
    this.interval = setInterval(() => this.fetchCryptocurrencyData(), 20 * 1000)
  }

  render() {
    const { isLoading, data : { prices, stats } } = this.state;
    console.log(" prices: ", prices);
    var tickers = [];
    // const prices = { 'BTC': 670000, 'BAT': 22 };
    if (!isLoading) {
      Object.keys(prices).forEach( key => tickers.push(
          <Cryptocurrency data=
           {{
              price_usd : prices[key],
              name: key,
              symbol: key,
              percent_change_24h: stats[key] && stats[key]["max_24hrs"],
              percent_change_7d: stats[key] &&stats[key]["min_24hrs"],
              percent_change_1h: stats[key] && stats[key]["vol_24hrs"]
            }} 
            key={key} 
            format="INR"
            />
        ));
    }
    console.log(tickers);
    return (
        <div>
            {isLoading && <Spinner isLoading={isLoading} />}
            {!isLoading && (
              <div className="tickers-container">
                 <div>
                    <ul className="tickers">{tickers[0]}</ul>
                    <ul className="tickers">{tickers[1]}</ul>
                    <ul className="tickers">{tickers[2]}</ul>
                    <ul className="tickers">{tickers[3]}</ul>
                  </div>
                  <div>
                    <ul className="tickers">{tickers[4]}</ul>
                    <ul className="tickers">{tickers[5]}</ul>
                    <ul className="tickers">{tickers[6]}</ul>
                    <ul className="tickers">{tickers[7]}</ul>
                    <ul className="tickers">{tickers[8]}</ul>
                  </div>
                  <div>
                    <ul className="tickers">{tickers[9]}</ul>
                    <ul className="tickers">{tickers[10]}</ul>
                    <ul className="tickers">{tickers[11]}</ul>
                    <ul className="tickers">{tickers[12]}</ul>
                  </div>
              </div>
            )}
        </div>
    )
  }
}

export default Koinex;
