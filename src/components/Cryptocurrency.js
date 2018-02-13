import React, { Component } from 'react';
import _ from 'lodash';
import './Cryptocurrency.css';

class Cryptocurrency extends Component {

    getValueString (price_usd) {

            function roundToTwo(num) {
                return +(Math.round(num + "e+2")  + "e-2");
            }

            const price = price_usd ? roundToTwo(price_usd) : 0;
            // const price = price_usd ? price_usd.toFixed(2) : 0;
            const label = `${price} $`;
            return label;
    };

    showValue(price_usd=0) {
        return(
            <h1>
                {this.getValueString(price_usd) }
            </h1>
        );
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

        return (
            <li className={"cryptocurrency " + cryptoClass}>
                <p className="cryptocurrency-name">{name} ({symbol})</p>
                {this.showValue(price_usd)}
                <p>Last hour: {percent_change_1h}%</p>
                <p>Since last day: {percent_change_24h}%</p>
                <p>Past week: {percent_change_7d}%</p>
            </li>
        );
    }
}

export default Cryptocurrency;
