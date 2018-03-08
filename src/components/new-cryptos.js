import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import { HashLoader } from 'react-spinners';
import './Tickers.css';
import Cryptocurrency from './Cryptocurrency';

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

class NewCryptos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isLoading: true
    }
  }

  fetchCryptocurrencyData() {
    const start = _.random(25)
    axios
      .get(`https://api.coinmarketcap.com/v1/ticker/?start=${start}&limit=15`)
      .then(response => {
        var result = response.data //.filter(currency => wanted.includes(currency.id));
        this.setState({ data: result, isLoading: false })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchCryptocurrencyData()
    this.interval = setInterval(() => this.fetchCryptocurrencyData(), 20 * 1000)
  }

  render() {
    const { isLoading } = this.state;
    var tickers;

    if (!isLoading) {
        tickers = this.state.data.map(currency => (
          <Cryptocurrency data={currency} key={currency.id} />
        ))
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
                </div>
                <div>
                  <ul className="tickers">{tickers[6]}</ul>
                  <ul className="tickers">{tickers[7]}</ul>
                  <ul className="tickers">{tickers[8]}</ul>
                </div>
              </div>
              <div id="footer">
                <p align="center">
                  {' '}
                  Information updated every 10 seconds courtesy of coinmarketcap.com{' '}
                </p>
              </div>
              </div>
            )}
        </div>
    )
  }
}

export default NewCryptos
