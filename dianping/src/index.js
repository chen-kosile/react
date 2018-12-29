import React from 'react';
import ReactDOM from 'react-dom';
import RouteMap from './router/routerMap';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';

import './static/css/common.less'
import './static/css/font.css'

const store = configureStore();

const render = () => ReactDOM.render(
    <Provider store={store}>
      <RouteMap />
    </Provider>
    , document.getElementById('root'));

render();
store.subscribe(render);