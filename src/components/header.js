import React, { Component } from 'react';
import '../App.css';
import Favourites from './index';
import New from './new-cryptos';
import Random from './random';
import Tickers from './Tickers';
import {
  HashRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';	

const Header = () => (
  <header className="container">
    <nav>
      <table className="center">
      <tbody>
        <tr>
        	<td><Link to='/favourite'>Favourites</Link></td>
        	<td><Link to='/random'>Random</Link></td>
        	<td><Link to='/classic'>Classic</Link></td>
        	<td><Link to='/new'>New</Link></td>
        </tr>
       </tbody>
      </table>
    </nav>
  </header>
);

const Main = () => (
  <main>
   <Switch>
      <Route exact path='/favourite' component={Favourites}/>
      <Route path='/random' component={Random} />
      <Route path='/classic' component={Tickers} />
      <Route path='/new' component={New} />
      <Route path='/' component={Favourites}/>
    </Switch>
  </main>
)

const NavBar = () => (
    <div>
    	<Header />
    	<Main />
    </div>
)

export default NavBar;