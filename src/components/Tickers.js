import React, { Component } from 'react';
import axios from 'axios';
import { CircleLoader } from 'react-spinners';
import './Tickers.css';
import Cryptocurrency from './Cryptocurrency';

const Spinner = props => {
    return (
        <div className="tab-spinner">
            <CircleLoader
                color={'#123abc'}
                loading={props.isLoading}
            />
        </div>
    );
}

class Tickers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      data: [
        {
          id: 'bitcoin',
          name: 'Bitcoin',
          symbol: 'BTC',
          price_usd: '0',
          percent_change_1h: '0',
          percent_change_24h: '0',
          percent_change_7d: '0',
        },
        {
          id: 'ethereum',
          name: 'Ethereum',
          symbol: 'ETH',
          price_usd: '0',
          percent_change_1h: '0',
          percent_change_24h: '0',
          percent_change_7d: '0',
        },
        {
          id: 'ripple',
          name: 'Ripple',
          symbol: 'XRP',
          price_usd: '0',
          percent_change_1h: '0',
          percent_change_24h: '0',
          percent_change_7d: '0',
        },
      ],
    }
  }

  fetchCryptocurrencyData() {
    axios
      .get('https://api.coinmarketcap.com/v1/ticker/?limit=15')
      .then(response => {
        var wanted = [
          'bitcoin',
          'ethereum',
          'ripple',
          'sumokoin',
          'pivx',
          'sonm',
          'nuls',
          'cardano',
        ]
        var result = response.data.filter(currency =>
          wanted.includes(currency.id)
        )
        this.setState({ data: result, isLoading: false })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchCryptocurrencyData()
    this.interval = setInterval(() => this.fetchCryptocurrencyData(), 25 * 1000)
  }

  render() {
    const { isLoading } = this.state;
    var tickers;

    if (!isLoading) {
        tickers = this.state.data.map(currency => (
          <Cryptocurrency data={currency} key={currency.id} />
        ));
    }

    return (
      <div>
      {isLoading && <Spinner isLoading={isLoading} />}
      {!isLoading && (
          <div>
          <div className="tickers-container">
            <div>
              <ul className="tickers">{tickers[0]}</ul>
              <ul className="tickers">{tickers[1]}</ul>
              <ul className="tickers">{tickers[2]}</ul>
            </div>
            <div>
              <ul className="tickers">{tickers[3]}</ul>
              <ul className="tickers">{tickers[4]}</ul>
              <ul className="tickers">{tickers[5]}</ul>
            </div>
            <div>
              <ul className="tickers">{tickers[6]}</ul>
              <ul className="tickers">{tickers[7]}</ul>
              <ul className="tickers">{tickers[8]}</ul>
            </div>
            <div id="footer">
                <p align="center">
                  {' '}
                  Information updated every 10 seconds courtesy of coinmarketcap.com{' '}
                </p>
              </div>
          </div>
          </div>
        )}
      </div>
    )
  }
}

export default Tickers
