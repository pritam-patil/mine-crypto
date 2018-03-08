import React, { Component } from 'react';
import axios from 'axios';
import Cryptocurrency from '../Cryptocurrency';

class BAT extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
            {
                id: "BAT",
                name: "BAT",
                symbol: "BAT",
                price_usd: 1,
                percent_change_1h: 0,
                percent_change_24h: 0,
                percent_change_7d: 0,
            }
        ]
        };
    }
    
     fetchCryptocurrencyData() {
        axios.get("https://api.coinmarketcap.com/v1/ticker/basic-attention-token/")
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
        return <Cryptocurrency data={this.state.data} name={'BAT'} symbol={'BAT'}/>
    }
}

export default BAT;
