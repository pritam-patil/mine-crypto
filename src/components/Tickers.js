import React, { Component } from 'react';
import axios from 'axios';
import './Tickers.css';
import Cryptocurrency from './Cryptocurrency';
	

function getData(item) {   
     return axios.get(`https://api.coinmarketcap.com/v1/ticker/${item}/`)
     .then(response => response && response.data[0])
     .catch(function (response) {
        console.log(response);
     })

}

class Favorites extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
            {
                id: "bitcoin",
                name: "Bitcoin",
                symbol: "BTC",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            },
            {
                id: "ethereum",
                name: "Ethereum",
                symbol: "ETH",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            },
            {
                id: "ripple",
                name: "Ripple",
                symbol: "XRP",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            }
        ]
        };
    }
    
     fetchCryptocurrencyData() {
        axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=15")
            .then(response => {
                var wanted = ["bitcoin", "ethereum", "ripple", "sumokoin", "pivx", "sonm", "nuls", "cardano"];
                var result = response.data.filter(currency => wanted.includes(currency.id));
                this.setState({ data: result});
            })
            .catch(err => console.log(err));
    }

    // getData()

    fetchAllFavoritesData() {
        var wanted = ["bitcoin", "ethereum", "ripple", "sumokoin", "pivx", "sonm", "nuls", "cardano"];
        let dataState = {};
        wanted.map(item => {
            let promised_data = getData(item);
            let data;
            promised_data.then(response => { 
                dataState = Object.assign(dataState, response);
                console.log("resolved ", response);})
                        .catch(function (response) {console.log("error resolving");})
            
        });
        console.log("returned", dataState);
    }
    
    componentDidMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 1000 * 1000);
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
                    <ul className="tickers">{tickers[5]}</ul>
                </div>
                <div>
                    <ul className="tickers">{tickers[6]}</ul>
                    <ul className="tickers">{tickers[7]}</ul>
                    <ul className="tickers">{tickers[8]}</ul>
                </div>
                <p>Information updated every 10 seconds courtesy of coinmarketcap.com</p>
           </div>
        );
    }
}

export default Favorites;
