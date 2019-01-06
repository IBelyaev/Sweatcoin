import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './containers/app';
import * as serviceWorker from './serviceWorker';
import { store } from './store';

const AppWithStore = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(AppWithStore, document.getElementById('root'));

serviceWorker.unregister();
