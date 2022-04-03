import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import ErrorMessage from './components/error-message/error-message';
import { fetchFilmsAction, fetchPromoFilmAction } from './store/actions/api-actions';
import { store } from './store/store';

store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
