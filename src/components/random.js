import React, { Component } from 'react'
import axios from 'axios'
import _ from 'lodash'
import { ClipLoader, RingLoader, PropagateLoader } from 'react-spinners';
import './Tickers.css'
import Cryptocurrency from './Cryptocurrency'

const Spinner = props => {
    return (
        <div className="tab-spinner">
            <PropagateLoader
                color={'#123abc'}
                loading={props.isLoading}
            />
        </div>
    );
}


class Random extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isLoading: true
    }
  }

  fetchCryptocurrencyData() {
    const start = _.random(40, 100)
    axios
      .get(`https://api.coinmarketcap.com/v1/ticker/?start=${start}&limit=20`)
      .then(response => {
        var result = response.data //.filter(currency => wanted.includes(currency.id));
        this.setState({ data: result, isLoading: false })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchCryptocurrencyData();
    this.interval = setInterval(() => this.fetchCryptocurrencyData(), 30 * 1000)
  }

  render() {
    const isLoading = this.state.isLoading;
    var tickers;

    if (!isLoading) {
     tickers = this.state.data.map(currency => (
          <Cryptocurrency data={currency} key={currency.id} />
        ));
    }

    return (
        <div>
            {isLoading && <Spinner props={{isLoading:this.state.isLoading}} />}
            {tickers && (
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

export default Random;
