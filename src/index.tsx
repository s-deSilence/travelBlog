import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import './styles/style.scss';
import { App } from './components/router/app';

render( <Provider store={store}><App /></Provider>, document.body );
