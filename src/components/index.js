import React from 'react';

import Bitcoin from './favourites/bitcoin';
import Cardano from './favourites/cardano';
import Etherium from './favourites/etherium';
import Nuls from './favourites/nuls';
import PivX from './favourites/pivx';
import Ripple from './favourites/ripple';
import SONM from './favourites/sonm';
import SUMOKoin from './favourites/sumokoin';


import './Tickers.css';

const Favourites = () => {
	return (
		<div>
		<div className="tickers-container">
            <div>
                <ul className="tickers"><Bitcoin /></ul>
                <ul className="tickers"><Cardano /></ul>
                <ul className="tickers"><Nuls /></ul>
            </div>
            <div>
                 <ul className="tickers"><Etherium /></ul>
                 <ul className="tickers"><PivX /></ul>
            </div>
            <div>
                <ul className="tickers"><Ripple /></ul>
                <ul className="tickers"><SUMOKoin /></ul>
                <ul className="tickers"><SONM /></ul>
            </div>
           </div>
			<p>Information updated every 10 seconds courtesy of coinmarketcap.com</p>
		</div>
	);
}

export default Favourites;