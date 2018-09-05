import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Ienthusiasm } from './reducers/index';
import { Provider } from 'react-redux';
import RouteConfig from './router/index'
const store = createStore(Ienthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
  <RouteConfig />
</Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
