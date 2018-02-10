import React, { Component } from 'react';
import _ from 'lodash';
import './Cryptocurrency.css';

class Cryptocurrency extends Component {

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
                <h1>${ (+price_usd).toFixed(2) }</h1>
                <p>{percent_change_1h}% 1hr</p>
                <p>{percent_change_24h}% 24hrs</p>
                <p>{percent_change_7d}% 7days</p>
            </li>
        );
    }
}

export default Cryptocurrency;
