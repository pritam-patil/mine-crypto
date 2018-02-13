import React, { Component } from 'react';
import axios from 'axios';
import Cryptocurrency from '../Cryptocurrency';
	
class Ethereum extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
            {
                id: "ethereum",
                name: "Ethereum",
                symbol: "ETH",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            }
        ]
        };
    }
    
     fetchCryptocurrencyData() {
        axios.get("https://api.coinmarketcap.com/v1/ticker/ethereum/")
            .then(response => {
                var wanted = ["bitcoin", "ethereum", "ripple", "sumokoin", "pivx", "sonm", "nuls", "cardano"];
                var result = response.data[0]; //.filter(currency => wanted.includes(currency.id));
                this.setState({ data: result});
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 10 * 1000);
    };

    render() {
        return <Cryptocurrency data={this.state.data} name={'ethereum'} symbol={'ETH'} />;
    }
}

export default Ethereum;
