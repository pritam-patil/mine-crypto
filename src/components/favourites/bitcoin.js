import React, { Component } from 'react';
import axios from 'axios';
import Cryptocurrency from '../Cryptocurrency';
var authOptions = {
    url: "https://api.coinmarketcap.com/v1/ticker/bitcoin/",
    headers: {
        'Authorization': 'Basic Y2xpZW50OnNlY3JldA==',
        'Access-Control-Allow-Origin': '*'
    }
  }

class Bitcoin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
            {
                id: "bitcoin",
                name: "Bitcoin",
                symbol: "BTC",
                price_usd: 1,
                percent_change_1h: 0,
                percent_change_24h: 0,
                percent_change_7d: 0,
            }
        ]
        };
    }
    
     fetchCryptocurrencyData() {
        console.log("called bitcoin");
        axios.get("https://api.coinmarketcap.com/v1/ticker/bitcoin/")
            .then(response => {
                var result = response.data[0]; //.filter(currency => wanted.includes(currency.id));
                return this.setState({ data: result});
            })
            .catch(err => console.log(err));
    }

    
    componentWillMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 10 * 1000);
    };

    render() {
        return <Cryptocurrency data={this.state.data} name={'Bitcoin'} symbol={'BTC'}/>
    }
}

export default Bitcoin;
