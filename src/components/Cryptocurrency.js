import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import './Cryptocurrency.css';

class Cryptocurrency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    fetchCurrencyRates() {
        axios.get("http://api.fixer.io/latest?base=USD")
            .then(response => {
                var result = response.data && response.data.rates; //.filter(currency => wanted.includes(currency.id));
                return this.setState({ data: result});
            })
            .catch(err => console.log(err));
    }

    componentWillMount() {
        this.fetchCurrencyRates();
    }

    getValueString (price_usd) {

            function roundToTwo(num) {
                return +(Math.round(num + "e+2")  + "e-2");
            }

            const numberWithCommas = (x) => {
             return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            const price = price_usd ? numberWithCommas(roundToTwo(price_usd * this.state.data.INR))  : 0;
            // const price = price_usd ? price_usd.toFixed(2) : 0;
            const label = `${price}`;
            return label;
    };

    showValue(price_usd=0) {
        return this.getValueString(price_usd);
    }

    render() {
        var {
            id,
            name,
            symbol,
            price_usd,
            percent_change_1h,
            percent_change_24h,
            percent_change_7d,
        } = this.props.data;
        const defined = ['bitcoin', 'ripple', 'ethereum', 'nuls']
        let cryptoClass = defined[_.random(defined.length)-1]
        if (!cryptoClass) { 
            cryptoClass = 'stellar'; 
        }

        const upOrDown = val => !!val && val > 0 ? "up" : "down";

        const nameLabel = !!this.props.name ? this.props.name : name;
        const symbolLabel = !!this.props.symbol ? this.props.symbol : symbol;

        return (
            <li className={"cryptocurrency " + cryptoClass}>
                <button name='show me' value='click me' onClick={this.showRates}/>
                <p className="cryptocurrency-name">{nameLabel} ({symbolLabel})</p>
                <h1> &#8377; {this.showValue(price_usd)} </h1>
                <table className={"valueChanges"}>
                 <tr> <td > Last hour </td> <td className={(upOrDown(percent_change_1h))} / > <td> {percent_change_1h}% </td></tr>
                  <tr> <td> Since last day </td> <td className={(upOrDown(percent_change_24h))} /> <td> {percent_change_24h}% </td> <td /></tr>
                   <tr> <td> Past week </td> <td className={(upOrDown(percent_change_7d))} /> <td> {percent_change_7d}% </td> <td /></tr>
                 </table>
            </li>
        );
    }
}

export default Cryptocurrency;
