import React from 'react'

import Aeternity from './favourites/aeternity';
import BAT from './favourites/basic-attention-token';
import Bitcoin from './favourites/bitcoin';
import Cardano from './favourites/cardano';
import Etherium from './favourites/etherium';
import Golem from './favourites/golem';
import Litecoin from './favourites/litecoin';
import Nuls from './favourites/nuls';
import Omisego from './favourites/omisego';
import PivX from './favourites/pivx';
import Request from './favourites/request';
import Ripple from './favourites/ripple';
import SONM from './favourites/sonm';
import SUMOKoin from './favourites/sumokoin';
import Tron from './favourites/tron';
import OX from './favourites/zero-x';
import { REFRESH_TIME } from './constants';

import './Tickers.css'

const Favourites = () => {

    return (
      <div>
        <div className="tickers-container">
          <div>
            <ul className="tickers">
              <Bitcoin />
            </ul>
            <ul className="tickers">
              <Request />
            </ul>
            <ul className="tickers">
              <Omisego />
            </ul>
            <ul className="tickers">
              <BAT/>
            </ul>
          </div>
          <div>
          <ul className="tickers">
              <Aeternity />
            </ul>
            <ul className="tickers">
              <Etherium />
            </ul>
            <ul className="tickers">
              <OX />
            </ul>
            <ul className="tickers">
              <Golem />
            </ul>
          </div>
          <div>
            <ul className="tickers">
              <Litecoin />
            </ul>
            <ul className="tickers">
              <Tron />
            </ul>
          </div>
          <div>
            <ul className="tickers">
              <Nuls />
            </ul>
            <ul className="tickers">
              <Ripple />
            </ul>
            <ul className="tickers">
              <PivX />
            </ul>
            <ul className="tickers">
              <SUMOKoin />
            </ul>
            <ul className="tickers">
              <SONM />
            </ul>
            <ul className="tickers">
              <Cardano />
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Favourites
