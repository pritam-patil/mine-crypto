import React, { createElement } from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';

// ReactDOM.render(
// 	<HashRouter>
//   		<App />
//   	</HashRouter>,
//   document.getElementById('root')
// );

function startMethod() {
	render(
		createElement(App),
  		document.getElementById('root')
	);
}


if (['loaded', 'complete', 'interactive'].includes(document.readyState)) {
	startMethod();
} else {
	 window.onload = startMethod();
}