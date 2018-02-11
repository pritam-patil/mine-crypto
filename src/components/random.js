import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import './Tickers.css';
import Cryptocurrency from './Cryptocurrency';
	

class Random extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [ ]
        };
    }
    
     fetchCryptocurrencyData() {
        const start = _.random(40, 100);
        axios.get(`https://api.coinmarketcap.com/v1/ticker/?start=${start}&limit=20`)
            .then(response => {
                var result = response.data; //.filter(currency => wanted.includes(currency.id));
                this.setState({ data: result});
            })
            .catch(err => console.log(err));
    }
    
    componentDidMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 1500 * 1000);
    };

    render() {
        var tickers = this.state.data.map((currency) => 
            <Cryptocurrency data={currency} key={currency.id} />
        );
        return (
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
        );
    }
}

export default Random;
